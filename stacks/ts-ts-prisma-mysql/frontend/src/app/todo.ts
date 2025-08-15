import { Effect, Layer } from "effect";
import { authenticated, AuthServiceLive } from "@/features/auths";
import { ApiLive } from "@/shared/http";
import { initializePageContent } from "@/features/tasks";
import { ApiTodoPath } from "@app/shared/app-paths";

const AppLive = Layer.merge(ApiLive, AuthServiceLive);

window.addEventListener("DOMContentLoaded", async () =>
	await Effect.runPromise(
		Effect.provide(authenticated(initializePageContent(ApiTodoPath.GET_ALL)), AppLive)
	).catch((e) => console.error(e))
);
