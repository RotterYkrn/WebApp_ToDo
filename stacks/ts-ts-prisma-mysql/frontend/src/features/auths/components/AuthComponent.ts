import { IAppManager } from "@/shared/app";
import { ApiService } from "@/shared/http";
import { createButton, UIService } from "@/shared/ui";
import { Effect, pipe } from "effect";
import { AuthService } from "../services/AuthService";
import { performSignIn, performSignOut, performSignUp } from "../services/use-cases";
import { handleSignInError, handleSignUpError } from "./helper";

export class AuthComponent {
    constructor(
        private appManager: IAppManager<AuthService | ApiService | UIService>
    ) { }

    public readonly buildSignUpForm = (): Effect.Effect<HTMLFormElement> => {
        const form = document.createElement("form");
        form.id = "sign-up-form";

        const emailDiv = document.createElement("div");
        const emailLabel = document.createElement("label");
        emailLabel.id = "email-input-label";
        emailLabel.htmlFor = "email-input";
        emailLabel.textContent = "メールアドレス:";
        const emailInput = document.createElement("input");
        emailInput.id = "email-input";
        emailInput.name = "email";
        emailInput.type = "email";
        emailInput.required = true;
        emailDiv.append(emailLabel, emailInput);

        const passwordDiv = document.createElement("div");
        const passwordLabel = document.createElement("label");
        passwordLabel.id = "password-input-label";
        passwordLabel.htmlFor = "password-input";
        passwordLabel.textContent = "パスワード:";
        const passwordInput = document.createElement("input");
        passwordInput.id = "password-input";
        passwordInput.name = "password";
        passwordInput.type = "password";
        passwordInput.required = true;
        passwordDiv.append(passwordLabel, passwordInput);

        const errorMessageDiv = document.createElement("div");
        errorMessageDiv.id = "error-message";
        errorMessageDiv.textContent = "サインインに失敗しました";
        errorMessageDiv.style.display = "none";

        const submitButton = document.createElement("button");
        submitButton.id = "sign-up-button";
        submitButton.type = "submit";
        submitButton.textContent = "サインアップ";

        form.append(
            emailDiv,
            passwordDiv,
            errorMessageDiv,
            submitButton
        );

        form.addEventListener("submit", (e) => {
            e.preventDefault();

            this.appManager.runPromise(pipe(
                Effect.sync(() => new FormData(form)),
                Effect.map(Object.fromEntries),
                Effect.flatMap(performSignUp),
                Effect.tapError(
                    handleSignUpError(errorMessageDiv)
                ),
            ))
        });

        return Effect.succeed(form);
    }

    public readonly buildSignInForm = (): Effect.Effect<HTMLFormElement> => {
        const form = document.createElement("form");
        form.id = "sign-in-form";

        const emailDiv = document.createElement("div");
        const emailLabel = document.createElement("label");
        emailLabel.id = "email-input-label";
        emailLabel.htmlFor = "email-input";
        emailLabel.textContent = "メールアドレス:";
        const emailInput = document.createElement("input");
        emailInput.id = "email-input";
        emailInput.name = "email";
        emailInput.type = "email";
        emailInput.required = true;
        emailDiv.append(emailLabel, emailInput);

        const passwordDiv = document.createElement("div");
        const passwordLabel = document.createElement("label");
        passwordLabel.id = "password-input-label";
        passwordLabel.htmlFor = "password-input";
        passwordLabel.textContent = "パスワード:";
        const passwordInput = document.createElement("input");
        passwordInput.id = "password-input";
        passwordInput.name = "password";
        passwordInput.type = "password";
        passwordInput.required = true;
        passwordDiv.append(passwordLabel, passwordInput);

        const errorMessageDiv = document.createElement("div");
        errorMessageDiv.id = "error-message";
        errorMessageDiv.textContent = "サインインに失敗しました";
        errorMessageDiv.style.display = "none";

        const submitButton = document.createElement("button");
        submitButton.id = "sign-in-button";
        submitButton.type = "submit";
        submitButton.textContent = "サインイン";
        
        form.append(
            emailDiv,
            passwordDiv,
            errorMessageDiv,
            submitButton
        );

        form.addEventListener("submit", (e) => {
            e.preventDefault();

            this.appManager.runPromise(pipe(
                Effect.sync(() => new FormData(form)),
                Effect.map(Object.fromEntries),
                Effect.flatMap(performSignIn),
                Effect.tapError(
                    handleSignInError(errorMessageDiv)
                ),
            ))
        });

        return Effect.succeed(form);
    };

    public readonly buildSignOutButton = (): Effect.Effect<HTMLButtonElement> =>
        createButton(
            {
                id: "sign-out-button",
                textContent: "サインアウト",
            },
            () => this.appManager.runPromise(
                performSignOut().pipe(
                    Effect.tapError((e) => Effect.sync(() => {
                        console.error("Sign out failed:", e);
                    }))
                )
            )
        );
}
