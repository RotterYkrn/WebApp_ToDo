import { ApiDailyPlanPath, ApiHabitPath, ApiTodoPath } from "@app/shared";

export type ApiGetAllTasksPath =
    | typeof ApiDailyPlanPath.GET_ALL
    | typeof ApiTodoPath.GET_ALL
    | typeof ApiHabitPath.GET_ALL;