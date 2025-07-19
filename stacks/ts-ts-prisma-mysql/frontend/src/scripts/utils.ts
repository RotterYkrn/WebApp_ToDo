import { Effect, Context, Layer, pipe } from "effect";

export interface Logger {
  log: (message: string, ...args: unknown[]) => Effect.Effect<void>;
  info: (message: string, ...args: unknown[]) => Effect.Effect<void>;
  warn: (message: string, ...args: unknown[]) => Effect.Effect<void>;
  error: (message: string, ...args: unknown[]) => Effect.Effect<void>;
}

class LoggerService extends Context.Tag("LoggerService")<
  LoggerService,
  Logger
    >() { }

const consoleLogger: Logger = {
  log: (message, ...args) => Effect.sync(() => console.log(`[LOG] ${message}`, ...args)),
  info: (message, ...args) => Effect.sync(() => console.info(`[INFO] ${message}`, ...args)),
  warn: (message, ...args) => Effect.sync(() => console.warn(`[WARN] ${message}`, ...args)),
  error: (message, ...args) => Effect.sync(() => console.error(`[ERROR] ${message}`, ...args)),
};

const ConsoleLoggerLive = Layer.succeed(LoggerService, consoleLogger);

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
    LoggerService,
    ConsoleLoggerLive,
    runPromiseWithLayer,
};
