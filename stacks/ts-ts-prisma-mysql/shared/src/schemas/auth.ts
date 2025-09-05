import { Schema } from "effect";
import { EmailAddress, Password } from "./user.js";
import type { SchemaType } from "./utils.js";

export const SignInInput = Schema.Struct(({
    email: EmailAddress,
    password: Password,
}));
export type SignInInput = SchemaType<typeof SignInInput>;

export const SignUpInput = Schema.Struct(({
    email: EmailAddress,
    password: Password
}));
export type SignUpInput = SchemaType<typeof SignUpInput>;
