import { z } from 'zod';
export declare const UserSchema: any;
export type User = z.infer<typeof UserSchema>;
export default UserSchema;
