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

export const TaskApiPathMap = {
    [TaskType.DAILY_PLAN]: ApiDailyPlanPath,
    [TaskType.TODO]: ApiTodoPath,
    [TaskType.HABIT]: ApiHabitPath,
};
