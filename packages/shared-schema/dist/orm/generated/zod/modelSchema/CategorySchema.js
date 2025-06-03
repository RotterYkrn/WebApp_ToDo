import { z } from 'zod';
/////////////////////////////////////////
// CATEGORY SCHEMA
/////////////////////////////////////////
export const CategorySchema = z.object({
    id: z.number().int(),
    name: z.string(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
});
export default CategorySchema;
