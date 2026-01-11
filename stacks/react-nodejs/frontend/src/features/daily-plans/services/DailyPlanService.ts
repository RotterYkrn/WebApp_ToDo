import { DailyPlan } from "@1day-todo/shared";
import { Chunk, Effect } from "effect";

import { InternalServerError } from "@/errors";
import { ApiService } from "@/shared/http";

export interface IDailyPlanService {
    readonly getAllDailyPlansApi: () => Effect.Effect<
        Chunk.Chunk<DailyPlan>,
        InternalServerError,
        ApiService
    >;
    readonly createDailyPlanApi: (
        newDailyPlan: DailyPlan,
    ) => Effect.Effect<DailyPlan, InternalServerError, ApiService>;
    // readonly deleteTask: (taskId: string) => Effect.Effect<void, SharedError, ApiService>;
}

export class DailyPlanService extends Effect.Tag("DailyPlanService")<
    DailyPlanService,
    IDailyPlanService
>() {}
