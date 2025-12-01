import { ApiDailyPlanPath, ApiHabitPath, ApiTodoPath } from "../paths/index.js";
import { Task, TaskB } from "../schemas/task.js";

export enum TaskType {
    DAILY_PLAN = "daily-plan",
    TODO = "todo",
    HABIT = "habit",
};

export const TaskSchemaMap = {
    [TaskType.DAILY_PLAN]: Task,
    [TaskType.TODO]: Task,
    [TaskType.HABIT]: TaskB,
};
export type TaskSchemaMap = typeof TaskSchemaMap;

export const TaskApiPathMap = {
    [TaskType.DAILY_PLAN]: ApiDailyPlanPath,
    [TaskType.TODO]: ApiTodoPath,
    [TaskType.HABIT]: ApiHabitPath,
};
export type TaskApiPathMap = typeof TaskApiPathMap;
