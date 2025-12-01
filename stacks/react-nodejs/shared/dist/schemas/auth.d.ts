import { Schema } from "effect";
import type { SchemaType } from "./utils.js";
export declare const SignInInput: Schema.Struct<{
    email: Schema.brand<typeof Schema.String, "EmailAddress">;
    password: Schema.brand<Schema.filter<typeof Schema.String>, "Password">;
}>;
export type SignInInput = SchemaType<typeof SignInInput>;
export declare const SignUpInput: Schema.Struct<{
    email: Schema.brand<typeof Schema.String, "EmailAddress">;
    password: Schema.brand<Schema.filter<typeof Schema.String>, "Password">;
}>;
export type SignUpInput = SchemaType<typeof SignUpInput>;
