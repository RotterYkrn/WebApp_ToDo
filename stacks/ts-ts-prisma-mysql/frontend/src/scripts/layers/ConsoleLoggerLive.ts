import { Effect, Layer } from "effect";
import { Logger, LoggerService } from "../services/LoggerService";

export const consoleLogger: Logger = {
  log: (message, ...args) => Effect.sync(() => console.log(`[LOG] ${message}`, ...args)),
  info: (message, ...args) => Effect.sync(() => console.info(`[INFO] ${message}`, ...args)),
  warn: (message, ...args) => Effect.sync(() => console.warn(`[WARN] ${message}`, ...args)),
  error: (message, ...args) => Effect.sync(() => console.error(`[ERROR] ${message}`, ...args)),
};

export const ConsoleLoggerLive = Layer.succeed(LoggerService, consoleLogger);
