import { ApiLive } from "@/shares/http";
import { AuthServiceLive } from "@/features/auths/services/AuthServiceLive";
import { Effect, Layer } from "effect";

export const AppLive = Layer.mergeAll(
    ApiLive,
    AuthServiceLive
);

export const appRuntime = Effect.runSync(
    Layer.toRuntime(AppLive).pipe(
        Effect.scoped
    )
);
