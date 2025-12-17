import { ApiService, extractBodyWithSchema, HttpStatus } from "@/shared/http";
import { ApiDailyPlanPath, DailyPlan, DailyPlanChunk } from "@1day-todo/shared";
import { Effect, Layer, pipe } from "effect";
import { DailyPlanService } from "./DailyPlanService";

export const DailyPlanLive = Layer.succeed(DailyPlanService, DailyPlanService.of({
    getAllDailyPlansApi: () => pipe(
        ApiService.get(
            ApiDailyPlanPath.GET_ALL,
            HttpStatus.OK,
        ),
        Effect.flatMap(extractBodyWithSchema(DailyPlanChunk)),
    ),

    createDailyPlanApi: (newDailyPlan: DailyPlan) => pipe(
        ApiService.post(
            ApiDailyPlanPath.CREATE,
            HttpStatus.CREATED,
            { body: newDailyPlan },
        ),
        Effect.flatMap(extractBodyWithSchema(DailyPlan)),
    ),
}));
