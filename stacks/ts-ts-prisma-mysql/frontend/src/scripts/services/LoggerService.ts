import { Effect, Context } from "effect";

export interface Logger {
  log: (message: string, ...args: unknown[]) => Effect.Effect<void>;
  info: (message: string, ...args: unknown[]) => Effect.Effect<void>;
  warn: (message: string, ...args: unknown[]) => Effect.Effect<void>;
  error: (message: string, ...args: unknown[]) => Effect.Effect<void>;
}

export class LoggerService extends Context.Tag("LoggerService")<
  LoggerService,
  Logger
    >() { }