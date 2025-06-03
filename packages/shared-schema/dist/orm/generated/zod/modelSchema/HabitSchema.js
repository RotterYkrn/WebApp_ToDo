import { z } from 'zod';
/////////////////////////////////////////
// HABIT SCHEMA
/////////////////////////////////////////
export const HabitSchema = z.object({
    id: z.number().int(),
    userId: z.number().int(),
    categoryId: z.number().int().nullable(),
    title: z.string(),
    description: z.string().nullable(),
    autoInclude: z.boolean(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
});
export default HabitSchema;
