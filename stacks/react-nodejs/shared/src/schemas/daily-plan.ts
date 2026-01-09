import { Schema } from "effect";

import type { SchemaType } from "./utils.js";

export const DailyPlan = Schema.Struct({
    id: Schema.Number,
    title: Schema.String,
    description: Schema.String,
});
export type DailyPlan = SchemaType<typeof DailyPlan>;

export const DailyPlanChunk = Schema.Chunk(DailyPlan);
export type DailyPlanChunk = SchemaType<typeof DailyPlanChunk>;
