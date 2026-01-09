import { Layer } from "effect";

import { AuthLive } from "@/features/auths/services/AuthLive";
import { DailyPlanLive } from "@/features/daily-plans";
import { HabitLive } from "@/features/habits";
import { TodoLive } from "@/features/todos";
import { ApiLive } from "@/shared/http";
import { ConsoleLoggerLive } from "@/shared/logger";
import { UILive } from "@/shared/ui";

export const AppLayer = Layer.mergeAll(
    ApiLive,
    UILive,
    AuthLive,
    DailyPlanLive,
    TodoLive,
    HabitLive,
    ConsoleLoggerLive,
);

export type AppService = typeof AppLayer extends Layer.Layer<infer R> ? R : never;
