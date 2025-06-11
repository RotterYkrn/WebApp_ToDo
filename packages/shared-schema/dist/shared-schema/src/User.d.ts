import { z } from 'zod';
export declare const UserSchema: z.ZodObject<{
    id: z.ZodNumber;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
} & {
    email: z.ZodString;
    password: z.ZodString;
    appleId: z.ZodNullable<z.ZodString>;
    googleId: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    email: string;
    password: string;
    appleId: string | null;
    googleId: string | null;
}, {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    email: string;
    password: string;
    appleId: string | null;
    googleId: string | null;
}>;
export type User = z.infer<typeof UserSchema>;
export default UserSchema;
