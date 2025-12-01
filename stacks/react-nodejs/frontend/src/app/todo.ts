import { authenticated } from "@/features/auths";
import { initializePageContent } from "@/features/tasks";
import { TaskType } from "@1day-todo/shared";
import { appManager } from "./app";

window.addEventListener("DOMContentLoaded", async () =>
	await appManager.runPromise(
		authenticated(initializePageContent(TaskType.TODO))
	).catch((e) => console.error(e))
);
