import { AuthLive } from "@/features/auths";
import { TaskLive } from "@/features/tasks/services/TaskLive";
import { ApiLive } from "@/shared/http";
import { ConsoleLoggerLive } from "@/shared/logger";
import { UILive } from "@/shared/ui";
import { Layer } from "effect";

export const AppLayer = Layer.mergeAll(
    ApiLive,
    UILive,
    AuthLive,
    TaskLive,
    ConsoleLoggerLive,
);

export type AppService = typeof AppLayer extends Layer.Layer<infer R>
    ? R
    : never;
