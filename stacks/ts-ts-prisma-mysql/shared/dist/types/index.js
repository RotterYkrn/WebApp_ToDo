import { ApiDailyPlanPath, ApiHabitPath, ApiTodoPath } from "../paths/index.js";
import { Task, TaskB } from "../schemas/task.js";
export var TaskType;
(function (TaskType) {
    TaskType[TaskType["DAILY_PLAN"] = 0] = "DAILY_PLAN";
    TaskType[TaskType["TODO"] = 1] = "TODO";
    TaskType[TaskType["HABIT"] = 2] = "HABIT";
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
