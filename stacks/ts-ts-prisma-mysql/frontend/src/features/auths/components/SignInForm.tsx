import { appManager } from "@/app/app";
import { UIService } from "@/shared/ui";
import { PagePath } from "@app/shared";
import { Effect, pipe } from "effect";
import { useRef, useState } from "react";
import { performSignIn } from "../services/use-cases";
import { handleSignInError } from "./helper";

const SignInForm: React.FC = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const formRef = useRef<HTMLFormElement>(null);
    const errorMessageDivRef = useRef<HTMLDivElement>(null);

    const signIn = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        appManager.runPromise(
            pipe(
                Effect.sync(() => new FormData(formRef.current!)),
                Effect.map(Object.fromEntries),
                Effect.flatMap(performSignIn),
                Effect.tap(() => UIService.redirectTo(PagePath.INDEX)),
                Effect.tapError(handleSignInError(errorMessageDivRef.current!))
            )
        );
    };

    return (
        <form ref={formRef} onSubmit={signIn}>
            <label>
                メールアドレス:
                <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label>
                パスワード:
                <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <div id="error-message" ref={errorMessageDivRef} style={{ display: "none" }}></div>
            <button type="submit">サインイン</button>
        </form>
    );
};

export default SignInForm;
