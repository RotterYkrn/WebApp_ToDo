import { SignUpInputEncoded } from "@1day-todo/shared";
import { useMutation } from "@tanstack/react-query";
import { Exit } from "effect";

import { signUpUseCase } from "../services/use-cases";

import { CriticalError, InternalServerError, ValidationError } from "@/errors";
import { useAppManager } from "@/shared/app/useAppManager";
import { handleCause } from "@/shared/utils";

export const useSignUp = () => {
    const { runPromise } = useAppManager();

    const signUpMutation = useMutation<
        void,
        ValidationError | InternalServerError | CriticalError,
        SignUpInputEncoded
    >({
        mutationFn: async (input: SignUpInputEncoded) => {
            const result = await runPromise(signUpUseCase(input));
            if (Exit.isFailure(result)) {
                throw handleCause(result.cause, "Sign up failed due to an unknown error.");
            }
        },
    });

    return {
        isSuccess: signUpMutation.isSuccess,
        isLoading: signUpMutation.isPending,
        isError: signUpMutation.isError,
        error: signUpMutation.error,
        signUp: signUpMutation.mutate,
    };
};
