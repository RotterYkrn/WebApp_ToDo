import { ApiDailyPlanPath, ApiHabitPath, ApiTodoPath } from "../paths/index.js";
import { Task, TaskB } from "../schemas/task.js";
export var TaskType;
(function (TaskType) {
    TaskType["DAILY_PLAN"] = "daily-plan";
    TaskType["TODO"] = "todo";
    TaskType["HABIT"] = "habit";
})(TaskType || (TaskType = {}));
;
export const TaskSchemaMap = {
    [TaskType.DAILY_PLAN]: Task,
    [TaskType.TODO]: Task,
    [TaskType.HABIT]: TaskB,
};
export const TaskApiPathMap = {
    [TaskType.DAILY_PLAN]: ApiDailyPlanPath,
    [TaskType.TODO]: ApiTodoPath,
    [TaskType.HABIT]: ApiHabitPath,
};
