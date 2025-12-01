import { UnknownAuthError, ValidationError } from "@/errors";
import { useAppManager } from "@/shared/app/useAppManager";
import { useMutation } from "@tanstack/react-query";
import { Cause, Exit, Option } from "effect";
import { signUpUseCase } from "../services/use-cases";

export const useSignUp = () => {
    const { runPromise } = useAppManager();

    const signUpMutation = useMutation<
        void,
        ValidationError | UnknownAuthError,
        { email: string; password: string; }
    >({
        mutationFn: async (input: {
            email: string;
            password: string;
        }) => {
            const result = await runPromise(signUpUseCase(input));
            if (Exit.isFailure(result)) {
                const cause = result.cause;
                const error = Cause.failureOption(cause);
                if (Option.isSome(error)) {
                    throw error.value;
                } else {
                    console.error(cause);
                    throw new UnknownAuthError({
                        message: "An unknown error occurred during sign up.",
                        originalError: cause,
                    });
                }
            }
        },
    })

    return {
        isSuccess: signUpMutation.isSuccess,
        isLoading: signUpMutation.isPending,
        isError: signUpMutation.isError,
        error: signUpMutation.error,
        signUp: signUpMutation.mutate,
    }
};
