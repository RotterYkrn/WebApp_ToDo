import { TodoSchema as BaseTodoSchema } from '@baseModel/TodoSchema';
import { z } from 'zod';
/////////////////////////////////////////
// TODO SCHEMA
/////////////////////////////////////////
export const TodoSchema = BaseTodoSchema.extend({
    // バリデーションを追加
    title: z.string().min(1).max(255),
    description: z.string().max(1000).nullable(),
    priority: z.number().int().min(1).max(5).nullable(),
});
export default TodoSchema;
