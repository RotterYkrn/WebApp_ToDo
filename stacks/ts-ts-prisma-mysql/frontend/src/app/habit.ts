import { Effect, Layer } from "effect";
import { authenticated, AuthServiceLive } from "@/features/auths";
import { ApiLive } from "@/shared/http";
import { initializePageContent } from "@/features/tasks";
import { HabitPath } from "@app/shared/app-paths";

const AppLive = Layer.merge(ApiLive, AuthServiceLive);

window.addEventListener("DOMContentLoaded", async () =>
	await Effect.runPromise(
		Effect.provide(authenticated(initializePageContent(HabitPath.GET_ALL)), AppLive)
	).catch((e) => console.error(e))
);
