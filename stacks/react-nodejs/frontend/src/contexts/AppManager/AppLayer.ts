import { Layer } from "effect";

import { AuthLive } from "@/features/auths/services/AuthLive";
import { DailyPlanLive } from "@/features/daily-plans/services/DailyPlanLive";
import { HabitLive } from "@/features/habits/services/HabitLive";
import { TodoLive } from "@/features/todos/services/TodoLive";
import { ApiLive } from "@/shared/http/services/ApiLive";
import { ConsoleLoggerLive } from "@/shared/logger/services/ConsoleLoggerLive";
import { UILive } from "@/shared/ui/services/UILive";

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
