import { Effect } from "effect";

export interface IAppManager<R> {
	readonly runPromise: <A, E>(effect: Effect.Effect<A, E, R>) => Promise<A>;
    readonly runSync: <A, E>(effect: Effect.Effect<A, E, R>) => A;
}
