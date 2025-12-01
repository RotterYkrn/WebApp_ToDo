import { ApiAuthPathLocal, ApiDailyPlanPath, ApiHabitPath, ApiTodoPath, ApiUserPath } from "@1day-todo/shared";
import { Router } from "express";
import authRouter from "./auths.js";
import dailyPlanRouter from "./daily-plans.js";
import habitRouter from "./habits.js";
import todoRouter from "./todos.js";
import userRouter from "./users.js";

const router = Router();

router.use(ApiAuthPathLocal.ROOT, authRouter);
router.use(ApiUserPath.ROOT, userRouter);
router.use(ApiDailyPlanPath.ROOT, dailyPlanRouter);
router.use(ApiTodoPath.ROOT, todoRouter);
router.use(ApiHabitPath.ROOT, habitRouter);

export default router;
