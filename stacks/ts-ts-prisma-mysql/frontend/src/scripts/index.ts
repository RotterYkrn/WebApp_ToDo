import { Effect } from "effect";
import { runPromiseWithLayer } from "./utils";
import { getHttpResponseObjectWithHandle, HttpRequestLayers } from "./httpRequest";
import authenticated from "./authenticate";
import signout from "./signout";
import createFooter from "./footer";

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
	return await runPromiseWithLayer(viewTaskListLogic(), HttpRequestLayers);
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
