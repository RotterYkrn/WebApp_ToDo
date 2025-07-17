import { Effect, Context, Layer, pipe } from "effect";
import createFooter from "./footer";

type HttpRequestFn = typeof fetch;

class HttpRequestService extends Context.Tag("HttpRequestService")<
	HttpRequestService,
	HttpRequestFn
	>() { };

const LiveHttpRequestService = Layer.succeed(HttpRequestService, fetch);

const LiveServiceLayers = Layer.mergeAll(LiveHttpRequestService);

type HttpRequestError = Error;
type HttpRequestEffect = Effect.Effect<Response, HttpRequestError, HttpRequestService>;

const runPromiseWithLayer = <A, E, R>(
	effect: Effect.Effect<A, E, R>,
	layer: Layer.Layer<R, E, never> // Rはeffectが必要とする環境、Eはエラー型
): Promise<A> => {
	return Effect.runPromise(
		pipe(
			effect,
			Effect.provide(layer) // ここで指定されたレイヤーを環境として提供
		)
	);
};

const httpRequest = (
	path: string,
	options: RequestInit
): HttpRequestEffect => // RにHttpRequestServiceが追加された
	Effect.gen(function* (_) {
		const fetcherFn = yield* _(HttpRequestService);

		const res = yield* _(Effect.tryPromise({
			try: () => fetcherFn(path, { ...options }), // fetcherFnを使用
			catch: (e) => new Error(`Network error during fetch: ${String(e)}`)
		}));

		if (!res.ok) {
			yield* _(Effect.fail(new Error(`HTTP error ${res.status}: ${path}`)));
		}

		return res;
	});

interface SessionData {
  loggedIn: boolean;
}

const parseResponseJson = <T>() => <R>(resEffect: Effect.Effect<Response, HttpRequestError, R>): Effect.Effect<T, HttpRequestError, R> =>
	pipe(
		resEffect,
		Effect.flatMap((res) => Effect.tryPromise({
			try: () => res.json() as Promise<T>,
			catch: (e) => new Error(`JSON parsing failed: ${String(e)}`)
		})),
	);

const getHttpResponseObjectWithHandle = <T, S>(
	path: string,
	options: RequestInit,
	handleSuccess: (data: T) => Effect.Effect<S, never, never>,
	handleFailure: (e: HttpRequestError) => Effect.Effect<S, never, never>
) => pipe(
	httpRequest(path, { ...options, method: "GET" }),
	parseResponseJson<T>(),
	Effect.flatMap(handleSuccess),
	Effect.catchAll(handleFailure),
);

const postHttpRequestWithHandle = (
	path: string,
	options: RequestInit,
	handleSuccess: () => Effect.Effect<void, never, never>,
	handleFailure: (e: HttpRequestError) => Effect.Effect<void, never, never>
) => pipe(
	httpRequest(path, { ...options, method: "POST" }),
	Effect.flatMap(handleSuccess),
	Effect.catchAll(handleFailure),
);

const checkSessionLogic = () =>
	getHttpResponseObjectWithHandle<SessionData, boolean>(
		"/api/check-session",
		{
			credentials: "include",
		},
		(data) => Effect.succeed(data.loggedIn),
		(e) => {
			console.error("通信エラー", e);
			return Effect.succeed(false);
		}
	);

const checkSession = async (): Promise<boolean> => {
	return await runPromiseWithLayer(checkSessionLogic(), LiveServiceLayers);
};

const authenticated =
	(callback: () => Promise<void>) =>
		async (): Promise<void> => {
			if (await checkSession()) {
				await callback()
			} else {
				window.location.href = "/signin";
			}
		};

const signoutLogic = () =>
	postHttpRequestWithHandle(
		"/api/signout",
		{
			credentials: "include",
		},
		() => {
			window.location.href = "/signin";
			return Effect.succeed(undefined);
		},
		(e) => {
			console.error("通信エラー", e);
			return Effect.succeed(undefined);
		}
	);

const signout = async (): Promise<void> => {
	await runPromiseWithLayer(signoutLogic(), LiveServiceLayers);
};

type Task = {
	title: string;
	detail: string;
}

const viewTaskListLogic = () =>
	getHttpResponseObjectWithHandle<Task[], HTMLElement[]>(
		"/api/daily-plan",
		{
			credentials: "include",
		},
		(data) => {
			return Effect.succeed(createTaskListView(data));
		},
		(e) => {
			console.error("通信エラー", e);
			return Effect.succeed([]);
		}
	);

const viewTaskList = async (): Promise<HTMLElement[]> => {
	return await runPromiseWithLayer(viewTaskListLogic(), LiveServiceLayers);
};

const createTaskListView = (tasks: Task[]): HTMLElement[] =>
	tasks.map((task) => {
		const taskElem = document.createElement("article");
		taskElem.className = "task";

		const titleElem = document.createElement("button");
		titleElem.className = "task-title";
		titleElem.setAttribute("aria-expanded", "false");
		titleElem.textContent = task.title;

		const detailElem = document.createElement("p");
		detailElem.className = "task-detail";
		detailElem.textContent = task.detail;

		titleElem.addEventListener("click", () => {
			const isOpen = taskElem.classList.toggle("open");
			titleElem.setAttribute("aria-expanded", isOpen.toString());
		});

		taskElem.appendChild(titleElem);
		taskElem.appendChild(detailElem);
		return taskElem;
	});

window.addEventListener("DOMContentLoaded", authenticated(async () => {
	// イベント設定
	document.getElementById("signout-button")?.addEventListener("click", signout);

	document.body.style.display = "block";

	document.body.appendChild(createFooter());

	// メイン処理
	const taskList = document.getElementById("task-list");
	if (taskList) {
		taskList.append(...(await viewTaskList()));
	}
}));
