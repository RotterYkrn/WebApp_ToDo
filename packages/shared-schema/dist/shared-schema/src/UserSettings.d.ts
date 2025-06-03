import type { z } from 'zod';
export declare const UserSettingsSchema: z.ZodObject<{
    id: z.ZodNumber;
    userId: z.ZodNumber;
    notifications: z.ZodBoolean;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
} & {
    dateChangeTime: z.ZodString;
    theme: z.ZodEnum<["light", "dark", "system"]>;
    language: z.ZodEnum<["en", "ja"]>;
}, "strip", z.ZodTypeAny, {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    userId: number;
    dateChangeTime: string;
    theme: "light" | "dark" | "system";
    language: "en" | "ja";
    notifications: boolean;
}, {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    userId: number;
    dateChangeTime: string;
    theme: "light" | "dark" | "system";
    language: "en" | "ja";
    notifications: boolean;
}>;
export type UserSettings = z.infer<typeof UserSettingsSchema>;
export default UserSettingsSchema;
