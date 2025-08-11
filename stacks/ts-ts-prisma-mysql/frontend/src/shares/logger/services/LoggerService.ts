import { Effect } from "effect";

export type Logger = {
  log: (message: string, ...args: unknown[]) => Effect.Effect<void>;
  info: (message: string, ...args: unknown[]) => Effect.Effect<void>;
  warn: (message: string, ...args: unknown[]) => Effect.Effect<void>;
  error: (message: string, ...args: unknown[]) => Effect.Effect<void>;
};

export class LoggerService extends Effect.Tag("LoggerService")<
  LoggerService,
  Logger
  >() { }
