import { Effect, Exit } from "effect";
import { AppService } from "./AppLayer";

export interface IAppManager {
    readonly runPromise: <A, E>(
        effect: Effect.Effect<A, E, AppService>,
    ) => Promise<Exit.Exit<A, E>>;
    readonly runSync: <A, E>(
        effect: Effect.Effect<A, E, AppService>
    ) => Exit.Exit<A, E>;
}
