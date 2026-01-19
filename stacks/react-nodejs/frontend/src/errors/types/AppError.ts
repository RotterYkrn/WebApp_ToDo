import { AuthError } from "./features/AuthError";
import { DomainUtilError } from "./features/DomainUtilError";
import { SettingError } from "./features/SettingError";
import { TaskError } from "./features/TaskError";
import { SharedError } from "./shared/SharedError";

export type AppError = SharedError | AuthError | SettingError | TaskError | DomainUtilError;
