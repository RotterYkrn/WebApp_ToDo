import { Effect, Layer, pipe } from "effect"; // "effect/index" から "effect" に変更
import { ApiLive, ApiService, parseResponseJson } from "@/shared/http";
import { createFooter } from "@/shared/ui";
import { AuthComponent, AuthServiceLive } from "@/features/auths";
import { ConsoleLoggerLive } from "@/shared/logger";
import { AppManager } from "@/app/AppManager";
import { AuthManager } from "@/features/auths/services/AuthManager";
import { AppError } from "@/errors"; // AppErrorをインポート

export interface Task {
	title: string;
	detail: string;
}

const AppLive = Layer.mergeAll(
	ApiLive,
	AuthServiceLive,
	ConsoleLoggerLive
);

let tasks: Task[] = [];

export const initializePageContent = (path: string) => Effect.gen(function* () {
	const appManager = new AppManager(AppLive);
	const authManager = new AuthManager(appManager);
	const authComponent = new AuthComponent(authManager);

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

		// 新しいタスク追加フォームを既存のタスクと同じ見た目で生成して追加
		const taskFormElement = yield* Effect.sync(() => createAddTaskFormView(path));
		yield* Effect.sync(() => {
			taskListElement.append(taskFormElement);
		});
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

export const createAddTaskFormView = (path: string): HTMLElement => {
	const taskElem = document.createElement("article");
	taskElem.className = "task"; // 既存のタスクと同じクラス名

	const titleElem = document.createElement("button");
	titleElem.className = "task-title";
	titleElem.setAttribute("aria-expanded", "false");
	titleElem.textContent = "新しいタスクを追加"; // タイトル部分に「新しいタスクを追加」

	const detailElem = document.createElement("p");
	detailElem.className = "task-detail"; // 既存のタスクと同じクラス名
	detailElem.innerHTML = `
		<div><input type="text" id="new-task-title" placeholder="タスクのタイトル" required /></div>
		<div><textarea id="new-task-detail" placeholder="タスクの詳細"></textarea></div>
		<div><button id="add-task-submit-button">タスクを追加</button></div>
	`;

	const formContent = detailElem; // フォームのコンテンツはdetailElemにまとめる
	formContent.style.display = "none"; // 最初は非表示

	titleElem.addEventListener("click", () => {
		const isOpen = taskElem.classList.toggle("open");
		titleElem.setAttribute("aria-expanded", isOpen.toString());
		formContent.style.display = formContent.style.display === "none" ? "block" : "none";
	});

	taskElem.appendChild(titleElem);
	taskElem.appendChild(detailElem);

	const addTaskButton = detailElem.querySelector<HTMLButtonElement>("#add-task-submit-button");
	const newTaskTitleInput = detailElem.querySelector<HTMLInputElement>("#new-task-title");
	const newTaskDetailTextarea = detailElem.querySelector<HTMLTextAreaElement>("#new-task-detail");

	if (addTaskButton && newTaskTitleInput && newTaskDetailTextarea) {
		addTaskButton.addEventListener("click", () => {
			const title = newTaskTitleInput.value;
			const detail = newTaskDetailTextarea.value;

			if (title) {
				Effect.runPromise(
					pipe(
						addTask(path, { title, detail }),
						Effect.provide(AppLive), // provideLayer を provide に変更
						Effect.mapError((e): AppError => e as AppError) // エラー型をAppErrorにキャスト
					)
				).then(
					() => {
						console.log("タスクが正常に追加されました。");
						newTaskTitleInput.value = "";
						newTaskDetailTextarea.value = "";
						// タスクリストを再読み込み
						const taskListElement = document.getElementById("task-list");
						if (taskListElement) {
							taskListElement.innerHTML = ""; // 既存のリストをクリア
							Effect.runPromise(
								pipe(
									createTaskList(path),
									Effect.provide(AppLive), // provideLayer を provide に変更
									Effect.mapError((e): AppError => e as AppError) // エラー型をAppErrorにキャスト
								)
							).then(
								(taskList: unknown) => { // unknownとして受け取り、内部でキャスト
									taskListElement.append(...(taskList as HTMLElement[]));
								}
							).catch(
								(e: AppError) => { // エラー型をAppErrorに指定
									console.error("タスクリストの再読み込みに失敗しました:", e);
								}
							);
						}
					}
				).catch(
					(e: AppError) => { // エラー型をAppErrorに指定
						console.error("タスクの追加に失敗しました:", e);
						alert("タスクの追加に失敗しました。");
					}
				);
			} else {
				alert("タスクのタイトルは必須です。");
			}
		});
	}

	return taskElem;
};

export const addTask = (path: string, task: Task) => pipe(
	Effect.gen(function* () {
		const apiService = yield* ApiService;
		return yield* apiService.post(path, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(task),
			credentials: "include",
		});
	}),
	parseResponseJson<Task>(),
	Effect.mapError((e) => e),
);
