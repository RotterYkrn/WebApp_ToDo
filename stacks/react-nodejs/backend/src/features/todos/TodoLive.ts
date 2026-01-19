import { Todo, TodoChunk, TodoCreate, TodoUpdate } from "@1day-todo/shared";
import { Layer, pipe, Schema } from "effect";

import { TodoService } from "./TodoService.js";

let tasks: { id: number; title: string; description: string | null }[] = [
    {
        id: 1,
        title: "🛒 買い物に行く",
        description: "スーパーで牛乳・パン・卵を購入する。ついでに日用品もチェック。",
    },
    {
        id: 2,
        title: "🧹 部屋の掃除",
        description: "リビングとキッチンを中心に掃除機をかけて片付ける。",
    },
    {
        id: 3,
        title: "📧 メール確認",
        description: "クライアントからの返信を確認し、返事を書く。",
    },
];

export const TodoLive = Layer.succeed(
    TodoService,
    TodoService.of({
        getAllTodosFromDB: () => pipe(tasks, Schema.decodeUnknownEither(TodoChunk)),

        createTodoInDB: (todo) =>
            pipe(todo, Schema.encodeSync(TodoCreate), (todo) => {
                const newTask = {
                    id: tasks.length + 1,
                    title: todo.title,
                    description: todo.description,
                };
                tasks.push(newTask);
                return Schema.decodeUnknownEither(Todo)(newTask);
            }),

        updateTodoInDB: (id, todo) =>
            pipe(
                todo,
                Schema.encodeSync(TodoUpdate),
                (todo) => {
                    tasks = tasks.map((task) =>
                        task.id === id
                            ? {
                                  ...task,
                                  title: todo.title ?? task.title,
                                  description:
                                      todo.description !== undefined
                                          ? todo.description
                                          : task.description,
                              }
                            : task,
                    );
                    const taskIndex = tasks.findIndex((task) => task.id === id);
                    return tasks[taskIndex];
                },
                Schema.decodeUnknownEither(Todo),
            ),

        deleteTodoInDB: (id) =>
            pipe(
                id,
                (id) => {
                    tasks = tasks.filter((task) => task.id !== id);
                    return id;
                },
                Schema.decodeUnknownEither(Schema.Number),
            ),
    }),
);
