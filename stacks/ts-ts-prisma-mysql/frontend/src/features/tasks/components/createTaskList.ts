import { Effect, Layer, pipe } from "effect/index";
import { ApiLive, ApiService, parseResponseJson } from "@/shares/http";
import { createFooter } from "@/shares/ui";
import { AuthComponent, AuthServiceLive } from "@/features/auths";
import { ConsoleLoggerLive } from "@/shares/logger";
import { AppManager } from "@/app/AppManager";
import { AuthManager } from "@/features/auths/services/AuthManager";

export interface Task {
	title: string;
	detail: string;
}

export const initializePageContent = (path: string) => Effect.gen(function* () {
	const AppLive = Layer.mergeAll(
		ApiLive,
		AuthServiceLive,
		ConsoleLoggerLive
	);
	
	const appManager = new AppManager(AppLive);
	const authManager = new AuthManager(appManager);
	const authComponent = new AuthComponent(authManager);

	// イベント設定
	// yield* Effect.sync(() =>
	// 	document.getElementById("signout-button")?.addEventListener("click", () => 
	// 		authManager.signout()
	// 	)
	// );

	yield* Effect.sync(() =>
		document.body.style.display = "block"
	);

	yield* Effect.sync(() =>
		document.body.appendChild(authComponent.createSignoutButton())
	);

	yield* Effect.sync(() =>
		document.body.appendChild(createFooter())
	);

	const taskListElement = yield* Effect.sync(() => 
		document.getElementById("task-list")
	);

	if (taskListElement) {
		const taskList = yield* createTaskList(path);
		yield* Effect.sync(() =>
			taskListElement.append(...taskList)
		);
	}
});

export const createTaskList = (path: string) => pipe(
	Effect.gen(function* () {
		const apiService = yield* ApiService;
		return yield* apiService.get(path, { credentials: "include" });
	}),
	parseResponseJson<Task[]>(),
	Effect.flatMap(processTaskData),
	Effect.mapError((e) => e),
);

export const processTaskData = (data: Task[]) => Effect.succeed(createTaskListView(data));

export const createTaskListView = (tasks: Task[]): HTMLElement[] =>
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
