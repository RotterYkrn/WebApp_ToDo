import { Effect, Layer, pipe } from "effect";

const runPromiseWithLayer = <A, E, R>(
    effect: Effect.Effect<A, E, R>,
    layer: Layer.Layer<R, E, never> // Rはeffectが必要とする環境、Eはエラー型
): Promise<A> => {
    return Effect.runPromise(
        pipe(
            effect,
            Effect.provide(layer) // ここで指定されたレイヤーを環境として提供
        )
    );
};

export {
    runPromiseWithLayer,
};
