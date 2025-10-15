import { appManager } from "@/app/app";
import { UIService } from "@/shared/ui";
import { PagePath } from "@app/shared";
import { Effect, pipe } from "effect";
import { performSignOut } from "../services/use-cases";

const SignOutButton: React.FC = () => {
    const signOut = () =>
        appManager.runPromise(
            pipe(
                performSignOut(),
                Effect.tap(() => UIService.redirectTo(PagePath.SIGN_IN)),
                Effect.tapError((e) =>
                    Effect.sync(() => {
                        console.error("Sign out failed:", e);
                    })
                )
            )
        );

    return <button onClick={signOut}>サインアウト</button>;
};

export default SignOutButton;
