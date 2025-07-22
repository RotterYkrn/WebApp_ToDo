import { Effect, Layer, pipe } from "effect";

export const runPromiseWithLayer = <A, E, R>(
    effect: Effect.Effect<A, E, R>,
    layer: Layer.Layer<R, E, never>
): Promise<A> => {
    return Effect.runPromise(
        pipe(
            effect,
            Effect.provide(layer)
        )
    );
};