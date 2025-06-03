import { z } from 'zod';

/////////////////////////////////////////
// TODO SCHEMA
/////////////////////////////////////////

export const TodoSchema = z.object({
  id: z.number().int(),
  userId: z.number().int(),
  categoryId: z.number().int().nullable(),
  title: z.string(),
  dueDate: z.coerce.date().nullable(),
  description: z.string().nullable(),
  priority: z.number().int().nullable(),
  parentId: z.number().int().nullable(),
  completed: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Todo = z.infer<typeof TodoSchema>

export default TodoSchema;
