import { PagePath } from "@app/shared";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const SignInForm: React.FC = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const { isLoading, isError, errorMessage, signIn } = useAuth();
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

            {isError && <div id="error-message">{errorMessage}</div>}
            
            <button
                type="submit"
                disabled={isLoading}
            >
                サインイン
            </button>
        </form>
    );
};

export default SignInForm;
