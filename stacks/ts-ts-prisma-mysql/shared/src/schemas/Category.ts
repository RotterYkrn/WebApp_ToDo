import { CategorySchema as BaseCategorySchema } from '@baseModel/CategorySchema';
import { z } from 'zod';

/////////////////////////////////////////
// CATEGORY SCHEMA
/////////////////////////////////////////

export const CategorySchema = BaseCategorySchema.extend({
  // バリデーションを追加
  name: z.string().min(1).max(255),
})

export type Category = z.infer<typeof CategorySchema>

export default CategorySchema;
