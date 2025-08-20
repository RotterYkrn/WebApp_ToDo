import { IAppManager } from "@/shared/app";
import { createButton } from "@/shared/ui";
import { AuthDependentServices } from "../services/AuthService";
import { performSignOut } from "../services/use-cases";

export const createSignoutButton = (appManager: IAppManager<AuthDependentServices>): HTMLButtonElement =>
    createButton(
        {
            id: "signout-button",
            textContent: "サインアウト",
        },
        () => appManager.runPromise(performSignOut())
    );
