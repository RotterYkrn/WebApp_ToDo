import { ApiDailyPlanPath, DailyPlan, DailyPlanChunk } from "@1day-todo/shared";
import { Effect, Layer, pipe } from "effect";

import { DailyPlanService } from "./DailyPlanService";

import { InternalServerError } from "@/errors/types/features/DomainUtilError";
import { ApiService } from "@/shared/http/services/ApiService";
import { extractBodyWithSchema } from "@/shared/http/services/use-case";
import { HttpStatus } from "@/shared/http/types/HttpStatus";

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
