import { Effect, Layer } from "effect";
import { authenticated, AuthServiceLive } from "@/features/auths";
import { ApiLive } from "@/shares/http";
import { initializePageContent } from "@/features/tasks";

const AppLive = Layer.merge(ApiLive, AuthServiceLive);

window.addEventListener("DOMContentLoaded", async () =>
	await Effect.runPromise(
		Effect.provide(authenticated(initializePageContent("/api/todo")), AppLive)
	).catch((e) => console.error(e))
);
