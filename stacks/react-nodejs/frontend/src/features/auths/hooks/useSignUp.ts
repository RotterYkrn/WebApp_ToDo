import { UnknownAuthError, ValidationError } from "@/errors";
import { useAppManager } from "@/shared/app/useAppManager";
import { handleCause } from "@/shared/utils";
import { useMutation } from "@tanstack/react-query";
import { Exit } from "effect";
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
                throw handleCause(result.cause, (e) => {
                    return new UnknownAuthError({
                        message: "Sign up failed due to an unknown error.",
                        originalError: e,
                    });
                });
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
