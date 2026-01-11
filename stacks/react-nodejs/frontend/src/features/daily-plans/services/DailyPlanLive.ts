import { ApiDailyPlanPath, DailyPlan, DailyPlanChunk } from "@1day-todo/shared";
import { Effect, Layer, pipe } from "effect";

import { DailyPlanService } from "./DailyPlanService";

import { InternalServerError } from "@/errors";
import { ApiService, extractBodyWithSchema, HttpStatus } from "@/shared/http";

export const DailyPlanLive = Layer.succeed(
    DailyPlanService,
    DailyPlanService.of({
        getAllDailyPlansApi: () =>
            pipe(
                ApiService.get(ApiDailyPlanPath.GET_ALL, HttpStatus.OK),
                Effect.flatMap(extractBodyWithSchema(DailyPlanChunk)),
                Effect.mapError(
                    (e) =>
                        new InternalServerError({
                            message: "Failed to fetch daily plans",
                            cause: e,
                        }),
                ),
            ),

        createDailyPlanApi: (newDailyPlan: DailyPlan) =>
            pipe(
                ApiService.post(ApiDailyPlanPath.CREATE, HttpStatus.CREATED, {
                    body: newDailyPlan,
                }),
                Effect.flatMap(extractBodyWithSchema(DailyPlan)),
                Effect.mapError(
                    (e) =>
                        new InternalServerError({
                            message: "Failed to create daily plans",
                            cause: e,
                        }),
                ),
            ),
    }),
);
