import { Effect, Layer } from "effect";
import * as Runtime from "effect/Runtime";
import { useMemo } from "react";
import { AppLayer } from "./AppLayer";
import { AppManagerContext } from "./AppManagerContext";
import { IAppManager } from "./IAppManager";

const createAppManager = (): IAppManager => {
    const runtime = Effect.runSync(
        Layer.toRuntime(AppLayer).pipe(Effect.scoped),
    );

    return {
        runPromise: (effect) => Runtime.runPromise(runtime)(
            effect.pipe(Effect.exit)
        ),
        runSync: (effect) => Runtime.runSync(runtime)(
            effect.pipe(Effect.exit)
        ),
    };
};

export const AppManagerProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const appManager = useMemo(createAppManager, []);

    return <AppManagerContext value={appManager}>{children}</AppManagerContext>;
};
