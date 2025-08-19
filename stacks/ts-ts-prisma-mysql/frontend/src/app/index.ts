import { authenticated, AuthLive } from "@/features/auths";
import { initializePageContent } from "@/features/tasks";
import { ApiLive } from "@/shared/http";
import { ApiDailyPlanPath } from "@app/shared";
import { Effect, Layer } from "effect";

const AppLive = Layer.merge(ApiLive, AuthLive);

window.addEventListener("DOMContentLoaded", async () =>
	await Effect.runPromise(
		Effect.provide(authenticated(initializePageContent(ApiDailyPlanPath.GET_ALL)), AppLive)
	).catch((e) => console.error(e))
);
