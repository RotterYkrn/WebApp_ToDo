import { InvalidCredentialsError, Unauthorized, UnknownAuthError, ValidationError } from "@/errors";
import { useAppManager } from "@/shared/app";
import { UserId } from "@app/shared";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Cause, Exit, Option } from "effect";
import { checkSessionUseCase, performSignOut, signInUseCase } from "../services/use-cases";

const AUTH_SESSION_QUERY_KEY = ["authSession"];

export function useAuth() {
    const queryClient = useQueryClient();
    const { runPromise } = useAppManager();

    const checkSessionQuery = useQuery<
        UserId,
        Unauthorized | UnknownAuthError
    >({
        queryKey: AUTH_SESSION_QUERY_KEY,
        queryFn: async () => {
            const result = await runPromise(checkSessionUseCase());
            if (Exit.isFailure(result)) {
                const cause = result.cause;
                const error = Cause.failureOption(cause);
                if (Option.isSome(error)) {
                    throw error.value;
                } else {
                    console.error(cause);
                    throw new UnknownAuthError({
                        message: "Check session failed due to an unknown error.",
                        originalError: cause,
                    });
                }
            }

            return result.value;
        },
        staleTime: 5 * 60 * 1000,
        retry: false,
    });

    const signInMutation = useMutation<
        void,
        InvalidCredentialsError | ValidationError | UnknownAuthError,
        { email: string; password: string; }
    >({
        mutationFn: async (input: {
            email: string;
            password: string;
        }) => {
            const result = await runPromise(signInUseCase(input));
            if (Exit.isFailure(result)) {
                const cause = result.cause;
                const error = Cause.failureOption(cause);
                if (Option.isSome(error)) {
                    console.error("Sign in failed:", error.value);
                    throw error.value;
                } else {
                    console.error(cause);
                    throw new UnknownAuthError({
                        message: "Sign in failed due to an unknown error.",
                        originalError: cause,
                    });
                }
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: AUTH_SESSION_QUERY_KEY });
        },
    });

    const signOutMutation = useMutation({
        mutationFn: async () => await runPromise(performSignOut()),
        onSuccess: () => {
            queryClient.removeQueries({ queryKey: AUTH_SESSION_QUERY_KEY });
        },
    });

    return {
        checkSessionQuery,
        signInMutation,
        signOut: signOutMutation.mutate,
    };
}
