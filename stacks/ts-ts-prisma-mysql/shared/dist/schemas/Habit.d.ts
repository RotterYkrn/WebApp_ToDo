import { z } from 'zod';
export declare const HabitSchema: any;
export type Habit = z.infer<typeof HabitSchema>;
export default HabitSchema;
