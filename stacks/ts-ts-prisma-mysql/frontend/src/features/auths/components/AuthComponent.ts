import { IAppManager } from "@/shared/app";
import { ApiService } from "@/shared/http";
import { createButton } from "@/shared/ui";
import { Effect } from "effect";
import { AuthService } from "../services/AuthService";
import { performSignOut } from "../services/use-cases";

export class AuthComponent {
    constructor(
        private appManager: IAppManager<AuthService | ApiService>
    ) { }

    public readonly buildSignOutButton = (): Effect.Effect<HTMLButtonElement> =>
        createButton(
            {
                id: "sign-out-button",
                textContent: "サインアウト",
            },
            () => this.appManager.runPromise(performSignOut())
        );
}
