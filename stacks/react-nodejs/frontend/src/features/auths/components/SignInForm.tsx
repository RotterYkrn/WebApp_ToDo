import { PagePath, SignInInputEncoded } from "@1day-todo/shared";
import { FormProvider, useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";

import { useAuth } from "../hooks/useAuth";

import { InvalidCredentialsError } from "@/errors/types/features/AuthError";
import {
    CriticalError,
    InternalServerError,
    ValidationError,
} from "@/errors/types/features/DomainUtilError";

const SignInForm: React.FC = () => {
    const methods = useForm<{ email: string; password: string }>();
    const { signInMutation } = useAuth();
    const { isPending, isError, error, mutate: signIn } = signInMutation;
    const navigate = useNavigate();
    const location = useLocation();

    const from = (location.state as { from?: Location })?.from?.pathname ?? PagePath.INDEX;

    const handleSignIn = (input: SignInInputEncoded) => {
        signIn(input, {
            onSuccess: () => {
                navigate(from, { replace: true });
            },
        });
    };

    const errorMessage = isError ? mapErrorMessage(error!) : "";

    return (
        <>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(handleSignIn)}>
                    <label>
                        メールアドレス:
                        <input
                            type="email"
                            {...methods.register("email", { required: "メールアドレスは必須です" })}
                        />
                    </label>

                    <label>
                        パスワード:
                        <input
                            type="password"
                            {...methods.register("password", { required: "パスワードは必須です" })}
                        />
                    </label>

                    {isError && <div id="error-message">{errorMessage}</div>}

                    <button
                        type="submit"
                        disabled={isPending}
                    >
                        サインイン
                    </button>
                </form>
            </FormProvider>
        </>
    );
};

const mapErrorMessage = (
    error: InvalidCredentialsError | ValidationError | InternalServerError | CriticalError,
): string => {
    switch (error._tag) {
        case "InvalidCredentialsError":
            return "メールアドレスまたはパスワードが正しくありません。";
        case "ValidationError":
            return "メールアドレスとパスワードを正しく入力してください。";
        default:
            return "処理中にエラーが発生しました。時間をおいて再度お試しください。";
    }
};

export default SignInForm;
