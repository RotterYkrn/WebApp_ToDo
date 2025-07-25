import { Effect, Layer } from "effect";
import { runPromiseWithLayer } from "@/shares/utils";
import { NetworkError, ParseJsonError } from "@/shares/errors";
import { LoggerService } from "@/shares/logger/services";
import { HttpLive } from "@/shares/http/layers";
import { ConsoleLoggerLive } from "@/shares/logger/layers";
import { getHttpResponseObjectWithHandle } from "@/shares/http/use-cases";
import { authenticated, signout } from "@/features/auths/components";
import createFooter from "@/shares/ui/footer";

type AppError = NetworkError | ParseJsonError;

type Task = {
	title: string;
	detail: string;
}

const processTaskData = (data: Task[]) => Effect.succeed(createTaskListView(data));

const handleCreateTaskListError = (e: AppError): Effect.Effect<HTMLElement[], never, LoggerService> =>
	Effect.gen(function* (_) {
		const logger = yield* _(LoggerService);
		yield* _(logger.error("Failed to create task list: ", e));
		return [];
	});

const createTaskListFlow = () =>
	getHttpResponseObjectWithHandle<Task[], HTMLElement[]>(
		"/api/todo",
		{},
		processTaskData,
		handleCreateTaskListError
	);

const createTaskList = async (): Promise<HTMLElement[]> => {
	return await runPromiseWithLayer(createTaskListFlow(), Layer.mergeAll(HttpLive, ConsoleLoggerLive));
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
		taskList.append(...(await createTaskList()));
	}
}));
