import { Schema } from "effect";
import type { SchemaType } from "./utils.js";
export declare const Theme: Schema.brand<Schema.Union<[Schema.Literal<["system"]>, Schema.Literal<["light"]>, Schema.Literal<["dark"]>]>, "Theme">;
export type Theme = SchemaType<typeof Theme>;
export declare const SettingsOutput: Schema.Struct<{
    userName: Schema.brand<Schema.filter<Schema.filter<Schema.filter<typeof Schema.String>>>, "UserName">;
    password: Schema.brand<Schema.filter<typeof Schema.String>, "Password">;
    notifications: typeof Schema.Boolean;
    theme: Schema.brand<Schema.Union<[Schema.Literal<["system"]>, Schema.Literal<["light"]>, Schema.Literal<["dark"]>]>, "Theme">;
}>;
export type SettingsOutput = SchemaType<typeof SettingsOutput>;
export declare const SettingsInput: Schema.SchemaClass<{
    readonly password?: (string & import("effect/Brand").Brand<"Password">) | undefined;
    readonly userName?: (string & import("effect/Brand").Brand<"UserName">) | undefined;
    readonly notifications?: boolean | undefined;
    readonly theme?: (("system" | "light" | "dark") & import("effect/Brand").Brand<"Theme">) | undefined;
}, {
    readonly password?: string | undefined;
    readonly userName?: string | undefined;
    readonly notifications?: boolean | undefined;
    readonly theme?: "system" | "light" | "dark" | undefined;
}, never>;
export type SettingsInput = SchemaType<typeof SettingsInput>;
