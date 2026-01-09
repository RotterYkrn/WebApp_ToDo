import { AuthError, SettingError, TaskError } from "./features";
import { SharedError } from "./shared";

export type AppError = SharedError | AuthError | SettingError | TaskError;
