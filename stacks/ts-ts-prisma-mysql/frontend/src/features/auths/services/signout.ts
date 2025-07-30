import { Effect, pipe } from "effect";
import { runPromiseWithLayer } from "@/core/utils";
import { ApiService, ApiLive } from "@/core/http";

export const signoutFlow = () => pipe(
	Effect.gen(function* () {
		const apiService = yield* ApiService;
		return yield* apiService.post("/api/signout", { credentials: "include" });
	}),
	Effect.flatMap(() => {
		window.location.href = "/signin";
		return Effect.never;
	}),
	Effect.mapError((e) => e),
);

export const signout = async (): Promise<void> => {
	await runPromiseWithLayer(signoutFlow(), ApiLive);
};
