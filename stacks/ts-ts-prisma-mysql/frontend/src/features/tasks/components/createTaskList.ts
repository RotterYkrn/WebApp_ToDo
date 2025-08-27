import { AppManager } from "@/app/AppManager";
import { AuthComponent, AuthLive } from "@/features/auths";
import { ApiLive } from "@/shared/http";
import { ConsoleLoggerLive } from "@/shared/logger";
import { buildFooter, buildHeader } from "@/shared/ui";
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

export const initializePageContent = (_: TaskType) => Effect.gen(function* () {
	const appManager = new AppManager(AppLive);
	const authComponent = new AuthComponent(appManager);
	const taskComponent = new TaskComponent(appManager);

	yield* Effect.sync(() =>
		document.body.style.display = "block"
	);

	const pageContent = document.createElement("div");
	pageContent.id = "page-content";
	pageContent.append(
		yield* buildHeader(),
		yield* taskComponent.buildTaskSection(
			TaskType.DAILY_PLAN,
			yield* getAllTasks(TaskType.DAILY_PLAN)
		),
		yield* authComponent.buildSignOutButton(),
		yield* buildFooter()
	);

	yield* Effect.sync(() => {
		const appRoot = document.getElementById("app-root");
		if (appRoot) {
			appRoot.append(pageContent);
		}
	});
});
