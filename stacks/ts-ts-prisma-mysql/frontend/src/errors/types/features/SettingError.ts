import { Data } from "effect";

export class SettingUpdateFailedError<T> extends Data.TaggedError("SettingUpdateFailedError")<{
    readonly message: string;
    readonly type: "Checkbox" | "Number" | "Text" | "Select";
    readonly oldValue: T;
    readonly newValue: T;
    readonly originalError: unknown;
}> { }

export type SettingError =
    | SettingUpdateFailedError<unknown>;
