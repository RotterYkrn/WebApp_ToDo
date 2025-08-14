import { IAppManager } from "@/shared/app";
import { Effect, Layer, Runtime } from "effect";

export class AppManager<R> implements IAppManager<R> {
    public readonly appRuntime: Runtime.Runtime<R>;

    public constructor(AppLive: Layer.Layer<R>) {
        this.appRuntime = Effect.runSync(
            Layer.toRuntime(AppLive).pipe(
                Effect.scoped
            )
        )
    }
}
