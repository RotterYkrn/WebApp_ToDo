import { HabitSchema as BaseHabitSchema } from '@baseModel/HabitSchema';
import { z } from 'zod';

/////////////////////////////////////////
// HABIT SCHEMA
/////////////////////////////////////////

export const HabitSchema = BaseHabitSchema.extend({
  // バリデーションを追加
  title: z.string().min(1).max(255),
  description: z.string().max(1000).nullable(),
})

export type Habit = z.infer<typeof HabitSchema>

export default HabitSchema;
