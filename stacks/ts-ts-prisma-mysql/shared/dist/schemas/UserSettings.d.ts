import { z } from 'zod';
export declare const UserSettingsSchema: any;
export type UserSettings = z.infer<typeof UserSettingsSchema>;
export default UserSettingsSchema;
