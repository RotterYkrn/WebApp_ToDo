import { z } from 'zod';
export declare const CategorySchema: z.ZodObject<{
    id: z.ZodNumber;
    name: z.ZodString;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
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
