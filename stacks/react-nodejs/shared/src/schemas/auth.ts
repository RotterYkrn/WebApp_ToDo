import { Schema } from "effect";

import { EmailAddress, Password } from "./user.js";
import type { SchemaEncode, SchemaType } from "./utils.js";

export const SignInInput = Schema.Struct({
    email: EmailAddress,
    password: Password,
});
export type SignInInput = SchemaType<typeof SignInInput>;
export type SignInInputEncoded = SchemaEncode<typeof SignInInput>;

export const SignUpInput = Schema.Struct({
    email: EmailAddress,
    password: Password,
});
export type SignUpInput = SchemaType<typeof SignUpInput>;
export type SignUpInputEncoded = SchemaEncode<typeof SignUpInput>;
