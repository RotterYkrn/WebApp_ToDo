import { Effect, Context, Layer, pipe } from "effect";
import createFooter from "./footer";

type HttpRequestFn = typeof fetch;

class HttpRequestService extends Context.Tag("HttpRequestService")<
	HttpRequestService,
	HttpRequestFn
	>() { };

const LiveFetchService = Layer.succeed(HttpRequestService, fetch);

const runEffectWithLayer = <A, E, R>(
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
): Effect.Effect<Response, Error, HttpRequestService> => // RにHttpRequestServiceが追加された
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

const parseJson = <T>(resEffect: Effect.Effect<Response, Error, HttpRequestService>): Effect.Effect<T, Error, HttpRequestService> =>
	pipe(
		resEffect,
		Effect.flatMap((res) => Effect.tryPromise({
			try: () => res.json() as Promise<T>, // ★ ここでJSONパース
			catch: (e) => new Error(`JSON parsing failed: ${String(e)}`)
		})),
	)

const checkSessionLogic = () => {
	return pipe(
		httpRequest("/api/check-session", {
			method: "GET",
			credentials: "include", // クッキーを送るために必須！
		}),
		parseJson<SessionData>,
		Effect.match({
			onSuccess: (data) => {
				return data.loggedIn;
			},
			onFailure: (e) => {
				console.error("通信エラー", e);
				return false;
			},
		}),
	);
};

const checkSession = async (): Promise<boolean> => {
	return await runEffectWithLayer(checkSessionLogic(), LiveFetchService);
};

window.addEventListener("DOMContentLoaded", async () => {
	// イベント設定
	document.getElementById("signout-button")?.addEventListener("click", () => {
		fetch("/api/signout", {
			method: "POST",
			credentials: "include", // クッキーを送るために必須！
		}).then(() => {
			window.location.href = "/signin";
		});
	});

	document.body.appendChild(createFooter());

	if (!await checkSession()) {
		window.location.href = "/signin";
		return;
	}

	document.body.style.display = "block";

	// メイン処理
	try {
		const tasks = await fetch("/api/daily-plan", {
			method: "GET",
		})
			.then((res) => res.json())
			.then((data) => data as { title: string; detail: string }[]);

		const taskList = document.getElementById("task-list");

		if (taskList) {
			const taskElements = tasks.map((task) => {
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
			taskList.append(...taskElements);
		}
	} catch (err) {
		console.error("通信エラー", err);
	}
});
