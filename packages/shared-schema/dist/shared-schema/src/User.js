import { UserSchema as BaseUserSchema } from '@baseModel/UserSchema';
import { z } from 'zod';
/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////
export const UserSchema = BaseUserSchema.extend({
    email: z.string().email(),
    password: z.string().min(8).max(16),
    appleId: z.string().nullable(),
    googleId: z.string().nullable(),
});
export default UserSchema;
