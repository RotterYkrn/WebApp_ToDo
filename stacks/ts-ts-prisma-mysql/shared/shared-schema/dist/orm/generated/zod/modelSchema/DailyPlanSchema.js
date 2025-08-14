import { z } from 'zod';
/////////////////////////////////////////
// DAILY PLAN SCHEMA
/////////////////////////////////////////
export const DailyPlanSchema = z.object({
    id: z.number().int(),
    userId: z.number().int(),
    date: z.coerce.date(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
});
export default DailyPlanSchema;
