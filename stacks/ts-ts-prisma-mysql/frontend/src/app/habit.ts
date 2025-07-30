import { Effect, Layer } from "effect";
import { authenticated, signout } from "@/features/auths";
import { ApiLive} from "@/core/http";
import { AuthServiceLive } from "@/features/auths/services/AuthServiceLive";
import { initializePageContent } from "@/features/tasks";

const AppLive = Layer.merge(ApiLive, AuthServiceLive);

window.addEventListener("DOMContentLoaded", async () =>
	await Effect.runPromise(
		Effect.provide(authenticated(initializePageContent("/api/habit")), AppLive)
	).catch((e) => console.error(e))
);
