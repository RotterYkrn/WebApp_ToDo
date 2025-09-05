import { SignInError } from "@/errors";
import { Effect } from "effect";

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
