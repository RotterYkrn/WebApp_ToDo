import { SignInError } from "@/errors";
import { Effect } from "effect";

export const handleSignInError = (
    errorMessageDiv: HTMLDivElement
): (e: SignInError) => Effect.Effect<void> =>
    (e) => {
        if (e._tag === "SignInError"
            && e.originalError._tag === "UnauthorizedError"
        ) {
            return Effect.sync(() => {
                errorMessageDiv.textContent = "メールアドレスもしくはパスワードが違います";
                errorMessageDiv.style.display = "block";
            });
        } else {
            return Effect.sync(() => {
                errorMessageDiv.textContent = "予期せぬエラーが発生しました";
                errorMessageDiv.style.display = "block";
            });
        }
    };