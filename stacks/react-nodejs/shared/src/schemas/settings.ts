import { Schema } from "effect";

import { Password, UserName } from "./user.js";
import type { SchemaType } from "./utils.js";

export const Theme = Schema.Union(
    Schema.Literal("system"),
    Schema.Literal("light"),
    Schema.Literal("dark"),
).pipe(Schema.brand("Theme"));
export type Theme = SchemaType<typeof Theme>;

export const SettingsOutput = Schema.Struct({
    userName: UserName,
    password: Password,
    notifications: Schema.Boolean,
    theme: Theme,
});
export type SettingsOutput = SchemaType<typeof SettingsOutput>;

export const SettingsInput = Schema.partial(SettingsOutput);
export type SettingsInput = SchemaType<typeof SettingsInput>;
