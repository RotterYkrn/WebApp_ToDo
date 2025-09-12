import { appManager } from "@/app/app";
import { AuthComponent } from "@/features/auths";
import { buildFooter, buildHeader, UIService } from "@/shared/ui";
import { appendElementsWrapper } from "@/shared/ui/services/use-case";
import { TaskType } from "@app/shared";
import { Effect } from "effect"; // "effect/index" から "effect" に変更
import { getAllTasks } from "../services/use-cases";
import { TaskComponent } from "./TaskComponent";

export const initializePageContent = (_: TaskType) => Effect.gen(function* () {
	yield* Effect.sync(() =>
		document.body.style.display = "block"
	);

	const authComponent = new AuthComponent(appManager);
	const taskComponent = new TaskComponent(appManager);
	yield* appendElementsWrapper(
		yield* UIService.getElementById("app-root"), 
		yield* buildHeader(),
		yield* taskComponent.buildTaskListSection(
			TaskType.DAILY_PLAN,
			yield* getAllTasks(TaskType.DAILY_PLAN)
		),
		yield* authComponent.buildSignOutButton(),
		yield* buildFooter()
	);
});
