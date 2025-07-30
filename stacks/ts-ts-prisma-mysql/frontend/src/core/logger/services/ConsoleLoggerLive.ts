import { Effect, Layer } from "effect";
import { LoggerService } from "@/core/logger";

export const consoleLogger = {
  log: (message: string, ...args: unknown[]) => Effect.sync(() => console.log(`[LOG] ${message}`, ...args)),
  info: (message: string, ...args: unknown[]) => Effect.sync(() => console.info(`[INFO] ${message}`, ...args)),
  warn: (message: string, ...args: unknown[]) => Effect.sync(() => console.warn(`[WARN] ${message}`, ...args)),
  error: (message: string, ...args: unknown[]) => Effect.sync(() => console.error(`[ERROR] ${message}`, ...args)),
};

export const ConsoleLoggerLive = Layer.succeed(LoggerService, consoleLogger);
