import type { Schema, Types } from "effect";

interface Variance<A, I, R> {
    readonly [Schema.TypeId]: {
        readonly _A: Types.Invariant<A>;
        readonly _I: Types.Invariant<I>;
        readonly _R: Types.Covariant<R>;
    };
}

export type SchemaType<S> = S extends Variance<infer A, infer _I, infer _R> ? A : never;

export type ChunkInfer<S> = S extends Schema.Chunk<infer A> ? A : never;
