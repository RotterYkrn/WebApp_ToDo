import { UserSettingsSchema as BaseUserSettingsSchema } from '@baseModel/UserSettingsSchema';
import { z } from 'zod';
/////////////////////////////////////////
// USER SETTINGS SCHEMA
/////////////////////////////////////////
export const UserSettingsSchema = BaseUserSettingsSchema.extend({
    // バリデーションを追加
    dateChangeTime: z.string().regex(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/),
    theme: z.enum(['light', 'dark', 'system']),
    language: z.enum(['en', 'ja']),
});
export default UserSettingsSchema;
