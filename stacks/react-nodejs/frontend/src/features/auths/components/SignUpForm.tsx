import { UnknownAuthError, ValidationError } from "@/errors";
import { useState } from "react";
import { Link } from "react-router-dom";
import { PagePath } from "../../../../../shared/dist/paths/pages";
import { useSignUp } from "../hooks/useSignUp";
import SignUpSuccessMessage from "./SignUpSuccessMessage";

const SignUpForm: React.FC = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const { isSuccess, isLoading, isError, error, signUp } = useSignUp();

    const handleSignUp = (e: React.FormEvent) => {
        e.preventDefault();

        signUp(
            { email, password },
        );
    };

    if (isSuccess) {
        return <SignUpSuccessMessage />;
    }

    const errorMessage = 
        isError
            ? mapErrorMessage(error!)
            : "";

    return (
        <>
            <form onSubmit={handleSignUp}>
                <label>
                    メールアドレス:
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                    サインアップ
                </button>
            </form>
            
            <Link to={PagePath.SIGN_IN}>アカウントをお持ちの方はこちら</Link>
        </>
    );
};

const mapErrorMessage = (
    error: ValidationError | UnknownAuthError
): string => {
    switch (error._tag) {
        case "ValidationError":
            return "メールアドレスとパスワードを正しく入力してください。";
        case "UnknownAuthError":
        default:
            return "処理中にエラーが発生しました。時間をおいて再度お試しください。";
    }
};

export default SignUpForm;
