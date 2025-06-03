import type { z } from 'zod';
export declare const CategorySchema: z.ZodObject<{
    id: z.ZodNumber;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
} & {
    name: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
}, {
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
}>;
export type Category = z.infer<typeof CategorySchema>;
export default CategorySchema;
