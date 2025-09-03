import { IAppManager } from "@/shared/app";
import { ApiService } from "@/shared/http";
import { createButton } from "@/shared/ui";
import { Effect } from "effect";
import { AuthService } from "../services/AuthService";
import { performSignIn, performSignOut } from "../services/use-cases";

export class AuthComponent {
    constructor(
        private appManager: IAppManager<AuthService | ApiService>
    ) { }

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
        passwordInput.type = "password";
        passwordInput.required = true;
        passwordDiv.append(passwordLabel, passwordInput);

        const submitButton = document.createElement("button");
        submitButton.id = "sign-in-button";
        submitButton.type = "submit";
        submitButton.textContent = "サインイン";

        const errorMessage = document.createElement("div");
        errorMessage.id = "error-message";
        errorMessage.textContent = "サインインに失敗しました";
        errorMessage.style.display = "none";
        
        form.append(
            emailDiv,
            passwordDiv,
            errorMessage,
            submitButton
        );

        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const email = emailInput.value;
            const password = passwordInput.value;

            this.appManager.runPromise(
                performSignIn(email, password).pipe(
                    Effect.mapError((e) => {
                        Effect.sync(() => {
                            errorMessage.textContent = "メールアドレスもしくはパスワードが違います";
                            errorMessage.style.display = "block";
                        });
                        return e;
                    })
                )
            )
        });

        return Effect.succeed(form);
    };

    public readonly buildSignOutButton = (): Effect.Effect<HTMLButtonElement> =>
        createButton(
            {
                id: "sign-out-button",
                textContent: "サインアウト",
            },
            () => this.appManager.runPromise(performSignOut())
        );
}
