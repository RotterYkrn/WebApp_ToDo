import { z } from 'zod';
export declare const UserSettingsSchema: z.ZodObject<{
    id: z.ZodNumber;
    userId: z.ZodNumber;
    dateChangeTime: z.ZodString;
    theme: z.ZodString;
    language: z.ZodString;
    notifications: z.ZodBoolean;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, "strip", z.ZodTypeAny, {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    userId: number;
    dateChangeTime: string;
    theme: string;
    language: string;
    notifications: boolean;
}, {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    userId: number;
    dateChangeTime: string;
    theme: string;
    language: string;
    notifications: boolean;
}>;
export type UserSettings = z.infer<typeof UserSettingsSchema>;
export default UserSettingsSchema;
