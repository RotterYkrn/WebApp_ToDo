import { ApiDailyPlanPath, ApiHabitPath, ApiTodoPath } from "../app-paths/index.js";
export var TaskType;
(function (TaskType) {
    TaskType[TaskType["DAILY_PLAN"] = 0] = "DAILY_PLAN";
    TaskType[TaskType["TODO"] = 1] = "TODO";
    TaskType[TaskType["HABIT"] = 2] = "HABIT";
})(TaskType || (TaskType = {}));
;
export const TaskApiPathMap = {
    [TaskType.DAILY_PLAN]: ApiDailyPlanPath,
    [TaskType.TODO]: ApiTodoPath,
    [TaskType.HABIT]: ApiHabitPath,
};
