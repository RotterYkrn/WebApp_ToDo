import type { z } from 'zod';
export declare const DailyPlanSchema: any;
export type DailyPlan = z.infer<typeof DailyPlanSchema>;
export default DailyPlanSchema;
