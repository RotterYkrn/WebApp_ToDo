import { AuthComponent, AuthManager, AuthServiceLive } from "@/features/auths";
import { ApiLive } from "@/shares/http";
import { Layer } from "effect";
import { AppManager } from "./AppManager";
import { ConsoleLoggerLive } from "@/shares/logger";

const AppLive = Layer.mergeAll(
    ApiLive,
    AuthServiceLive,
    ConsoleLoggerLive
);

const appManager = new AppManager(AppLive);
const authManager = new AuthManager(appManager);
const authComponent = new AuthComponent(authManager);
