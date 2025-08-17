import { Router } from "express";
import { ApiAuthPathLocal, ApiDailyPlanPath, ApiHabitPath, ApiTodoPath, ApiUserPath } from "@app/shared/app-paths";
import authRouter from "./auths.js";
import userRouter from "./users.js";
import dailyPlanRouter from "./daily-plans.js";
import todoRouter from "./todos.js";
import habitRouter from "./habits.js";

const router = Router();

router.use(ApiAuthPathLocal.ROOT, authRouter);
router.use(ApiUserPath.ROOT, userRouter);
router.use(ApiDailyPlanPath.ROOT, dailyPlanRouter);
router.use(ApiTodoPath.ROOT, todoRouter);
router.use(ApiHabitPath.ROOT, habitRouter);

export default router;
