import { DailyPlanSchema as BaseDailyPlanSchema } from '@baseModel/DailyPlanSchema';
import type { z } from 'zod';

/////////////////////////////////////////
// DAILY PLAN SCHEMA
/////////////////////////////////////////

export const DailyPlanSchema = BaseDailyPlanSchema.extend({
  // バリデーションを削除
})

export type DailyPlan = z.infer<typeof DailyPlanSchema>

export default DailyPlanSchema;
