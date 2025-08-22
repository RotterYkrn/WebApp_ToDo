import { AuthLive } from "@/features/auths";
import { TaskLive } from "@/features/tasks/services/TaskLive";
import { ApiLive } from "@/shared/http";
import { ConsoleLoggerLive } from "@/shared/logger";
import { Layer } from "effect";
import { AppManager } from "./AppManager";


const AppLive = Layer.mergeAll(
    ApiLive,
    AuthLive,
    TaskLive,
    ConsoleLoggerLive
);

export const appManager = new AppManager(AppLive);
