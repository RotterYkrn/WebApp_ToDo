import { PagePath } from "@app/shared";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthState, useAuth } from "../hooks/useAuth";

const SignInForm: React.FC = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const { signInState, signIn } = useAuth();
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

    const errorMessage = mapErrorMessage(signInState);

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
                disabled={signInState === "loading"}
            >
                サインイン
            </button>
        </form>
    );
};

const mapErrorMessage = (failedType: AuthState): string => {
    switch (failedType) {
        case "succeed":
        case "loading":
            return "";
        case "unauthenticated":
            return "メールアドレスまたはパスワードが正しくありません。";
        case "invalid_credential":
            return "メールアドレスとパスワードを正しく入力してください。";
        default:
            return "処理中にエラーが発生しました。時間をおいて再度お試しください。";
    }
}

export default SignInForm;
