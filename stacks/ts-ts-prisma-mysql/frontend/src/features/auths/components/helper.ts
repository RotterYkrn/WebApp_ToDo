import { SignInError, SignUpError } from "@/errors";
import { Effect } from "effect";

export const handleSignUpError = (
    errorMessageDiv: HTMLDivElement
): (e: SignUpError) => Effect.Effect<void> =>
    (_: SignUpError) => displayErrorMessage(
        errorMessageDiv,
        "予期せぬエラーが発生しました。"
    );

export const handleSignInError = (
    errorMessageDiv: HTMLDivElement
): (e: SignInError) => Effect.Effect<void> =>
    (e) =>
        e.originalError._tag === "UnauthorizedError"
            ? displayErrorMessage(
                errorMessageDiv,
                "メールアドレスまたはパスワードが違います。"
            )
            : displayErrorMessage(
                errorMessageDiv,
                "予期せぬエラーが発生しました。"
            );

export const displayErrorMessage = (errorMessageDiv: HTMLDivElement, message: string): Effect.Effect<void> =>
    Effect.sync(() => {
        errorMessageDiv.textContent = message;
        errorMessageDiv.style.display = "block";
    });
