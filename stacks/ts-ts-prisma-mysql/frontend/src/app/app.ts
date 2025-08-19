import { AuthLive } from "@/features/auths";
import { ApiLive } from "@/shared/http";
import { ConsoleLoggerLive } from "@/shared/logger";
import { Layer } from "effect";
import { AppManager } from "./AppManager";


const AppLive = Layer.mergeAll(
    ApiLive,
    AuthLive,
    ConsoleLoggerLive
);

const appManager = new AppManager(AppLive);
