import { Effect, Layer } from "effect";
import * as Runtime from "effect/Runtime";
import { useMemo } from "react";
import { AppLayer } from "./AppLayer";
import { AppManagerContext } from "./AppManagerContext";
import { IAppManager } from "./IAppManager";

// 3. IAppManagerの具体的な実装
// アプリケーション起動時に一度だけインスタンス化される
const createAppManager = (): IAppManager => {
    // AppLayer (アプリケーションの全依存関係) を提供する Runtime を作成
    const runtime = Effect.runSync(
        Layer.toRuntime(AppLayer).pipe(Effect.scoped),
    );

    return {
        // Effect-ts の Effect.runPromise(effect.pipe(Effect.provide(AppLayer))) に相当
        runPromise: (effect) => Runtime.runPromise(runtime)(effect),

        // Effect-ts の Effect.runSync(effect.pipe(Effect.provide(AppLayer))) に相当
        runSync: (effect) => Runtime.runSync(runtime)(effect),
    };
};

export const AppManagerProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    // インスタンスはコンポーネントのマウント時に一度だけ作成
    const appManager = useMemo(createAppManager, []);

    return <AppManagerContext value={appManager}>{children}</AppManagerContext>;
};
