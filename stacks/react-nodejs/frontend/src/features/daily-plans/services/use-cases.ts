import { DailyPlan, DailyPlanChunk } from "@1day-todo/shared";
import { Effect, pipe, Schema } from "effect";

import { DailyPlanService } from "./DailyPlanService";

import { InternalServerError, ValidationError } from "@/errors";
import { ApiService } from "@/shared/http";

export const getAllDailyPlansUseCase = (): Effect.Effect<
    DailyPlanChunk,
    InternalServerError,
    DailyPlanService | ApiService
> =>
    pipe(
        DailyPlanService.getAllDailyPlansApi(),
        Effect.mapError((e) => e),
    );

export const createDailyPlanUseCase = (newDailyPlan: {
    id: number;
    title: string;
    description: string;
}): Effect.Effect<
    DailyPlan,
    ValidationError | InternalServerError,
    DailyPlanService | ApiService
> =>
    pipe(
        newDailyPlan,
        Schema.decodeUnknownEither(DailyPlan),
        Effect.flatMap(DailyPlanService.createDailyPlanApi),
        Effect.mapError((e) => {
            switch (e._tag) {
                case "ParseError":
                    return new ValidationError({
                        message: "Invalid daily plan data format.",
                        originalError: e,
                    });
                default:
                    return e;
            }
        }),
    );
