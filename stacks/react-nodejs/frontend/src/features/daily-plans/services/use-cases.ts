import { TaskUnknownError } from "@/errors";
import { ApiService } from "@/shared/http";
import { parseToSchema } from "@/shared/utils";
import { DailyPlan, DailyPlanChunk } from "@1day-todo/shared";
import { Effect, pipe } from "effect";
import { DailyPlanService } from "./DailyPlanService";

export const getAllDailyPlansUseCase = (): Effect.Effect<DailyPlanChunk, TaskUnknownError, DailyPlanService | ApiService> =>
    pipe(
        DailyPlanService.getAllDailyPlansApi(),
        Effect.mapError((e) => {
            return new TaskUnknownError({
                message: "An unexpected error occurred while fetching daily plans.",
                originalError: e,
            });
        }),
    );

export const createDailyPlanUseCase = (newDailyPlan: {
    id: number;
    title: string;
    description: string;
}): Effect.Effect<DailyPlan, TaskUnknownError, DailyPlanService | ApiService> =>
    pipe(
        newDailyPlan,
        parseToSchema(DailyPlan),
        Effect.flatMap(DailyPlanService.createDailyPlanApi),
        Effect.mapError((e) => {
            return new TaskUnknownError({
                message: "An unexpected error occurred while creating a daily plan.",
                originalError: e,
            });
        }),
    );