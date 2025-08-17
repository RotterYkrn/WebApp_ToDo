import { Effect, Layer } from "effect";
import { authenticated, AuthLive } from "@/features/auths";
import { ApiLive } from "@/shared/http";
import { initializePageContent } from "@/features/tasks";
import { ApiHabitPath } from "@app/shared/app-paths";

const AppLive = Layer.merge(ApiLive, AuthLive);

window.addEventListener("DOMContentLoaded", async () =>
	await Effect.runPromise(
		Effect.provide(authenticated(initializePageContent(ApiHabitPath.GET_ALL)), AppLive)
	).catch((e) => console.error(e))
);
