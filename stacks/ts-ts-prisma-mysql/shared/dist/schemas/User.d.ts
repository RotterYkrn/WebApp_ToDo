import { z } from 'zod';
export declare const UserSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
    appleId: z.ZodNullable<z.ZodString>;
    googleId: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
    appleId: string | null;
    googleId: string | null;
}, {
    email: string;
    password: string;
    appleId: string | null;
    googleId: string | null;
}>;
export type User = z.infer<typeof UserSchema>;
export default UserSchema;
