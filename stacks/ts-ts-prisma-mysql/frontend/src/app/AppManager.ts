import { IAppManager } from "@/shared/app";
import { Effect, Layer, Runtime } from "effect";

export class AppManager<R> implements IAppManager<R> {
    private readonly appRuntime: Runtime.Runtime<R>;

    public constructor(AppLive: Layer.Layer<R>) {
        this.appRuntime = Effect.runSync(
            Layer.toRuntime(AppLive).pipe(
                Effect.scoped
            )
        )
    }

    public readonly runPromise = <A, E>(effect: Effect.Effect<A, E, R>): Promise<A> =>
        Runtime.runPromise(this.appRuntime)(effect);
}
