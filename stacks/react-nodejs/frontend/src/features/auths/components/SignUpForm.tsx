import { PagePath } from "@1day-todo/shared";
import { FormProvider, useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import { useSignUp } from "../hooks/useSignUp";

import SignUpSuccessMessage from "./SignUpSuccessMessage";

import { CriticalError, InternalServerError, ValidationError } from "@/errors";

const SignUpForm: React.FC = () => {
    const methods = useForm<{ email: string; password: string }>();
    const { isSuccess, isLoading, isError, error, signUp } = useSignUp();

    const onSubmit = ({ email, password }: { email: string; password: string }) => {
        signUp({ email, password });
    };

    if (isSuccess) {
        return <SignUpSuccessMessage />;
    }

    const errorMessage = isError ? mapErrorMessage(error!) : "";

    return (
        <>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
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
                        disabled={isLoading}
                    >
                        サインアップ
                    </button>
                </form>

                <Link to={PagePath.SIGN_IN}>アカウントをお持ちの方はこちら</Link>
            </FormProvider>
        </>
    );
};

const mapErrorMessage = (error: ValidationError | InternalServerError | CriticalError): string => {
    switch (error._tag) {
        case "ValidationError":
            return "メールアドレスとパスワードを正しく入力してください。";
        default:
            return "処理中にエラーが発生しました。時間をおいて再度お試しください。";
    }
};

export default SignUpForm;
