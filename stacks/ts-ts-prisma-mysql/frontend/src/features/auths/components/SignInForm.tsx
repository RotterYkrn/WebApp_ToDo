import { InvalidCredentialsError, UnknownAuthError, ValidationError } from "@/errors";
import { PagePath } from "@app/shared";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const SignInForm: React.FC = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const { signInMutation } = useAuth();
    const { isPending, isError, error, mutate: signIn } = signInMutation;
    const navigate = useNavigate();
    const location = useLocation();

    const from = (location.state as { from?: Location })?.from?.pathname ?? PagePath.INDEX;

    const handleSignIn = (e: React.FormEvent) => {
        e.preventDefault();
        
        signIn(
            { email, password },
            {
                onSuccess: () => {
                    navigate(from, { replace: true });
                }
            }
        );
    };

    const errorMessage = 
        isError
            ? mapErrorMessage(error!)
            : "";

    return (
        <form onSubmit={handleSignIn}>
            <label>
                メールアドレス:
                <input
                    type="email"
                    name="email"
                    value={email} onChange={(e) => setEmail(e.target.value)}
                />
            </label>

            <label>
                パスワード:
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </label>

            {errorMessage && <div id="error-message">{errorMessage}</div>}
            
            <button
                type="submit"
                disabled={isPending}
            >
                サインイン
            </button>
        </form>
    );
};

const mapErrorMessage = (
    error: InvalidCredentialsError | ValidationError | UnknownAuthError
): string => {
    switch (error._tag) {
        case "InvalidCredentialsError":
            return "メールアドレスまたはパスワードが正しくありません。";
        case "ValidationError":
            return "メールアドレスとパスワードを正しく入力してください。";
        case "UnknownAuthError":
        default:
            return "処理中にエラーが発生しました。時間をおいて再度お試しください。";
    }
}

export default SignInForm;
