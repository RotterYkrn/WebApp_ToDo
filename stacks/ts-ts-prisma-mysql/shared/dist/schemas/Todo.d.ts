import { z } from 'zod';
export declare const TodoSchema: any;
export type Todo = z.infer<typeof TodoSchema>;
export default TodoSchema;
