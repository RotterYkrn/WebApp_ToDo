import { z } from 'zod';

/////////////////////////////////////////
// DAILY PLAN ITEM SCHEMA
/////////////////////////////////////////

export const DailyPlanItemSchema = z.object({
  id: z.number().int(),
  dailyPlanId: z.number().int(),
  todoId: z.number().int().nullable(),
  habitId: z.number().int().nullable(),
  title: z.string(),
  description: z.string().nullable(),
  time: z.coerce.date().nullable(),
  priority: z.number().int().nullable(),
  completed: z.boolean(),
  order: z.number().int(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type DailyPlanItem = z.infer<typeof DailyPlanItemSchema>

export default DailyPlanItemSchema;
