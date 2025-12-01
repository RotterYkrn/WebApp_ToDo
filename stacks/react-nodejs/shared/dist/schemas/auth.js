import { Schema } from "effect";
import { EmailAddress, Password } from "./user.js";
export const SignInInput = Schema.Struct(({
    email: EmailAddress,
    password: Password,
}));
export const SignUpInput = Schema.Struct(({
    email: EmailAddress,
    password: Password
}));
