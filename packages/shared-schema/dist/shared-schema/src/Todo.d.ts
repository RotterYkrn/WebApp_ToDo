import { z } from 'zod';
export declare const TodoSchema: z.ZodObject<{
    id: z.ZodNumber;
    userId: z.ZodNumber;
    categoryId: z.ZodNullable<z.ZodNumber>;
    dueDate: z.ZodNullable<z.ZodDate>;
    parentId: z.ZodNullable<z.ZodNumber>;
    completed: z.ZodBoolean;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
} & {
    title: z.ZodString;
    description: z.ZodNullable<z.ZodString>;
    priority: z.ZodNullable<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    userId: number;
    title: string;
    description: string | null;
    priority: number | null;
    completed: boolean;
    categoryId: number | null;
    dueDate: Date | null;
    parentId: number | null;
}, {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    userId: number;
    title: string;
    description: string | null;
    priority: number | null;
    completed: boolean;
    categoryId: number | null;
    dueDate: Date | null;
    parentId: number | null;
}>;
export type Todo = z.infer<typeof TodoSchema>;
export default TodoSchema;
