import { Habit, HabitChunk, HabitCreate, HabitUpdate } from "@1day-todo/shared";
import { Layer, pipe, Schema } from "effect";

import { HabitService } from "./HabitService.js";

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

export const HabitLive = Layer.succeed(
    HabitService,
    HabitService.of({
        findAll: () => pipe(tasks, Schema.decodeUnknownEither(HabitChunk)),

        create: (habit) =>
            pipe(habit, Schema.encodeSync(HabitCreate), (habit) => {
                const newTask = {
                    id: tasks.length + 1,
                    title: habit.title,
                    description: habit.description,
                };
                tasks.push(newTask);
                return Schema.decodeUnknownEither(Habit)(newTask);
            }),

        update: (id, habit) =>
            pipe(
                habit,
                Schema.encodeSync(HabitUpdate),
                (habit) => {
                    tasks = tasks.map((task) =>
                        task.id === id
                            ? {
                                  ...task,
                                  title: habit.title ?? task.title,
                                  description:
                                      habit.description !== undefined
                                          ? habit.description
                                          : task.description,
                              }
                            : task,
                    );
                    const taskIndex = tasks.findIndex((task) => task.id === id);
                    return tasks[taskIndex];
                },
                Schema.decodeUnknownEither(Habit),
            ),

        delete: (id) =>
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
