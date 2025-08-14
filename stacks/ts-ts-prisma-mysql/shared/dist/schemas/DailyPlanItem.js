import { DailyPlanItemSchema as BaseDailyPlanItemSchema } from '@baseModel/DailyPlanItemSchema';
import { z } from 'zod';
/////////////////////////////////////////
// DAILY PLAN ITEM SCHEMA
/////////////////////////////////////////
export const DailyPlanItemSchema = BaseDailyPlanItemSchema.extend({
    // バリデーションを追加
    title: z.string().min(1).max(255),
    description: z.string().max(1000).nullable(),
    priority: z.number().int().min(1).max(5).nullable(),
});
export default DailyPlanItemSchema;
