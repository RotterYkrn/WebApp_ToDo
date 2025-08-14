import { z } from 'zod';
export declare const DailyPlanSchema: z.ZodObject<{
    id: z.ZodNumber;
    userId: z.ZodNumber;
    date: z.ZodDate;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, "strip", z.ZodTypeAny, {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    userId: number;
    date: Date;
}, {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    userId: number;
    date: Date;
}>;
export type DailyPlan = z.infer<typeof DailyPlanSchema>;
export default DailyPlanSchema;
