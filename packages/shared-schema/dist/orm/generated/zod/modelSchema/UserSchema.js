import { z } from 'zod';
/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////
export const UserSchema = z.object({
    id: z.number().int(),
    email: z.string(),
    password: z.string(),
    appleId: z.string().nullable(),
    googleId: z.string().nullable(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
});
export default UserSchema;
