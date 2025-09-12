import { Schema } from "effect";
import { Password, UserName } from "./user.js";
export const Theme = Schema.Union(Schema.Literal("system"), Schema.Literal("light"), Schema.Literal("dark")).pipe(Schema.brand("Theme"));
export const SettingsOutput = Schema.Struct({
    userName: UserName,
    password: Password,
    notifications: Schema.Boolean,
    theme: Theme,
});
export const SettingsInput = Schema.partial(SettingsOutput);
