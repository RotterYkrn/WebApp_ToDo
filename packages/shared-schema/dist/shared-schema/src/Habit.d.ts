import type { z } from 'zod';
export declare const HabitSchema: z.ZodObject<{
    id: z.ZodNumber;
    userId: z.ZodNumber;
    categoryId: z.ZodNullable<z.ZodNumber>;
    autoInclude: z.ZodBoolean;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
} & {
    title: z.ZodString;
    description: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    userId: number;
    title: string;
    description: string | null;
    categoryId: number | null;
    autoInclude: boolean;
}, {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    userId: number;
    title: string;
    description: string | null;
    categoryId: number | null;
    autoInclude: boolean;
}>;
export type Habit = z.infer<typeof HabitSchema>;
export default HabitSchema;
