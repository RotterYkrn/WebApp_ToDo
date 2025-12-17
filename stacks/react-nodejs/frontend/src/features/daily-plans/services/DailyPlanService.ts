import { SharedError } from "@/errors";
import { ApiService } from "@/shared/http";
import { DailyPlan } from "@1day-todo/shared";
import { Chunk, Effect } from "effect";

export interface IDailyPlanService {
    readonly getAllDailyPlansApi: () =>
        Effect.Effect<Chunk.Chunk<DailyPlan>, SharedError, ApiService>;
    readonly createDailyPlanApi: (newDailyPlan: DailyPlan) =>
        Effect.Effect<DailyPlan, SharedError, ApiService>;
    // readonly deleteTask: (taskId: string) => Effect.Effect<void, SharedError, ApiService>;
}

export class DailyPlanService extends Effect.Tag("DailyPlanService")<
    DailyPlanService,
    IDailyPlanService
  >() { };
