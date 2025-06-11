import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SchemaWithTypeCheck } from './SchemaWithTypeCheck';

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = SchemaWithTypeCheck<Prisma.UserUpdateInput>()(
		z.object({
			email: z.string().email(),
			password: z.string().min(8).max(16),
			appleId: z.string().nullable(),
			googleId: z.string().nullable(),
		}),
	)

export type User = z.infer<typeof UserSchema>

export default UserSchema;