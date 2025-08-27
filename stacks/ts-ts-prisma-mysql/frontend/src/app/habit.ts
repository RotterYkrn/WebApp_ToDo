import { authenticated } from "@/features/auths";
import { initializePageContent } from "@/features/tasks";
import { TaskType } from "@app/shared";
import { appManager } from "./app";

window.addEventListener("DOMContentLoaded", async () =>
	await appManager.runPromise(
		authenticated(initializePageContent(TaskType.HABIT))
	).catch((e) => console.error(e))
);
