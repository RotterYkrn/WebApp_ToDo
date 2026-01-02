import { AuthLive } from "@/features/auths";
import { DailyPlanLive } from "@/features/daily-plans/services/DailyPlanLive";
import { HabitLive } from "@/features/habits/services/HabitLive";
import { TodoLive } from "@/features/todos/services/TodoLive";
import { ApiLive } from "@/shared/http";
import { ConsoleLoggerLive } from "@/shared/logger";
import { UILive } from "@/shared/ui";
import { Layer } from "effect";

export const AppLayer = Layer.mergeAll(
    ApiLive,
    UILive,
    AuthLive,
    DailyPlanLive,
    TodoLive,
    HabitLive,
    ConsoleLoggerLive,
);

export type AppService = typeof AppLayer extends Layer.Layer<infer R>
    ? R
    : never;
