import { AppManager } from "@/app/AppManager";
import { AuthComponent, AuthLive } from "@/features/auths";
import { ApiLive } from "@/shared/http";
import { ConsoleLoggerLive } from "@/shared/logger";
import { buildFooter } from "@/shared/ui";
import { TaskType } from "@app/shared";
import { Effect, Layer } from "effect"; // "effect/index" から "effect" に変更
import { TaskLive } from "../services/TaskLive";
import { getAllTasks } from "../services/use-cases";
import { TaskComponent } from "./TaskComponent";

const AppLive = Layer.mergeAll(
	ApiLive,
	AuthLive,
	TaskLive,
	ConsoleLoggerLive
);

export const initializePageContent = (_: string) => Effect.gen(function* () {
	const appManager = new AppManager(AppLive);
	const authComponent = new AuthComponent(appManager);
	const taskComponent = new TaskComponent(appManager);

	yield* Effect.sync(() =>
		document.body.style.display = "block"
	);

	const signOutButton = yield* authComponent.buildSignOutButton();
	yield* Effect.sync(() => {
		document.body.appendChild(signOutButton);
	});

	yield* Effect.sync(() => {
		const footer = Effect.runSync(buildFooter());
		document.body.appendChild(footer);
	});

	const taskListElement = yield* Effect.sync(() => 
		document.getElementById("task-list")
	);

	if (taskListElement) {
		const tasks = yield* getAllTasks(TaskType.DAILY_PLAN);
		const taskList = yield* taskComponent.buildTaskGroup(TaskType.DAILY_PLAN, tasks);
		yield* Effect.sync(() => {
			taskListElement.append(taskList);
		});
	}
});
