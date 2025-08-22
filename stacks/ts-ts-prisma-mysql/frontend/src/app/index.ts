import { authenticated, AuthLive } from "@/features/auths";
import { initializePageContent } from "@/features/tasks";
import { ApiLive } from "@/shared/http";
import { ApiDailyPlanPath } from "@app/shared";
import { Layer } from "effect";
import { appManager } from "./app";

const AppLive = Layer.merge(ApiLive, AuthLive);

window.addEventListener("DOMContentLoaded", async () =>
	await appManager.runPromise(
		authenticated(initializePageContent(ApiDailyPlanPath.GET_ALL))
	).catch((e) => console.error(e))
);
