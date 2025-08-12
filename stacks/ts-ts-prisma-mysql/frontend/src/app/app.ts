import { Layer } from "effect";
import { AuthServiceLive } from "@/features/auths";
import { ApiLive } from "@/shares/http";
import { ConsoleLoggerLive } from "@/shares/logger";
import { AppManager } from "./AppManager";


const AppLive = Layer.mergeAll(
    ApiLive,
    AuthServiceLive,
    ConsoleLoggerLive
);

const appManager = new AppManager(AppLive);
