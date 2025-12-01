import { ApiLive } from "@/shared/http";
import { AuthLive } from "@/features/auths/services/AuthLive";
import { Effect, Layer } from "effect";

export const AppLive = Layer.mergeAll(
    ApiLive,
    AuthLive
);

export const appRuntime = Effect.runSync(
    Layer.toRuntime(AppLive).pipe(
        Effect.scoped
    )
);
