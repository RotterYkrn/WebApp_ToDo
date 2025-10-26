import { Effect } from "effect";
import { AppService } from "./AppLayer";

export interface IAppManager {
    readonly runPromise: <A, E>(
        effect: Effect.Effect<A, E, AppService>,
    ) => Promise<A>;
    readonly runSync: <A, E>(effect: Effect.Effect<A, E, AppService>) => A;
}
