import { Schema } from "effect";
export const UserId = Schema.Number.pipe(Schema.brand("UserId"));
// const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const EmailAddress = Schema.String.pipe(
// Schema.filter((s) => emailRegex.test(s), {
//     message: () => "Invalid email address format.",
// }),
Schema.brand('EmailAddress'));
export const Password = Schema.String.pipe(
// Schema.minLength(8, {
//     message: () => "Password must be at least 8 characters long.",
// }),
Schema.maxLength(64, {
    message: () => "Password must not exceed 64 characters.",
}), Schema.brand('Password') // 型を区別するためのブランド
);
