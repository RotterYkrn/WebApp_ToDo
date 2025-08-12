import { createButton } from "@/shares/ui";
import { AuthManager } from "../services/AuthManager";

export class AuthComponent {
    constructor(
        private readonly authManager: AuthManager
    ) { }

    public readonly createSignoutButton = (): HTMLButtonElement =>
        createButton(
            "signout-button",
            "サインアウト",
            this.authManager.performSignOut
        );
}
