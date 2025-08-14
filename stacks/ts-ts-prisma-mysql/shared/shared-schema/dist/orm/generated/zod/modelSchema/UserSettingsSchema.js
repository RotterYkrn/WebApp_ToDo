import { z } from 'zod';
/////////////////////////////////////////
// USER SETTINGS SCHEMA
/////////////////////////////////////////
export const UserSettingsSchema = z.object({
    id: z.number().int(),
    userId: z.number().int(),
    dateChangeTime: z.string(),
    theme: z.string(),
    language: z.string(),
    notifications: z.boolean(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
});
export default UserSettingsSchema;
