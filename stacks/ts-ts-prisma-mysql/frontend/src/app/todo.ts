import { Effect, Layer } from "effect";
import { authenticated, AuthLive } from "@/features/auths";
import { ApiLive } from "@/shared/http";
import { initializePageContent } from "@/features/tasks";
import { ApiTodoPath } from "@app/shared";

const AppLive = Layer.merge(ApiLive, AuthLive);

window.addEventListener("DOMContentLoaded", async () =>
	await Effect.runPromise(
		Effect.provide(authenticated(initializePageContent(ApiTodoPath.GET_ALL)), AppLive)
	).catch((e) => console.error(e))
);
