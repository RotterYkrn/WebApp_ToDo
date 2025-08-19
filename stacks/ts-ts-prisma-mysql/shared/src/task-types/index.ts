import { ApiDailyPlanPath, ApiHabitPath, ApiTodoPath } from "../app-paths/index.js";

export enum TaskType {
    DAILY_PLAN,
    TODO,
    HABIT,
};

export interface Task {
	title: string;
	detail: string;
}

export type TaskResponseMap = {
    [TaskType.DAILY_PLAN]: Task;
    [TaskType.TODO]: Task;
    [TaskType.HABIT]: Task;
};

export type TaskApiPathMap = {
    [TaskType.DAILY_PLAN]: typeof ApiDailyPlanPath;
    [TaskType.TODO]: typeof ApiTodoPath;
    [TaskType.HABIT]: typeof ApiHabitPath;
};
