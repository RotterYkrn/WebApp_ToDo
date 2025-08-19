import { createButton } from "@/shared/ui";
import { performSignOut } from "../services/AuthUseCase";
import { AuthService } from "../services/AuthService";
import { ApiService } from "@/shared/http";
import { IAppManager } from "@/shared/app";

type AuthManagerServices = AuthService | ApiService;

export class AuthComponent {
    constructor(
        private readonly appManager: IAppManager<AuthManagerServices>
    ) { }

    public readonly createSignoutButton = (): HTMLButtonElement =>
        createButton(
            {
                id: "signout-button",
                textContent: "サインアウト",
            },
            () => this.appManager.runPromise(performSignOut())
        );
}
