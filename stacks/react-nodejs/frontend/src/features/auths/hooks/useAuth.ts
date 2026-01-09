import { UserId } from "@1day-todo/shared";
import { MutateOptions, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Exit } from "effect";

import { checkSessionUseCase, signInUseCase, signOutUseCase } from "../services/use-cases";

import {
    InvalidCredentialsError,
    SignOutError,
    Unauthorized,
    UnknownAuthError,
    ValidationError,
} from "@/errors";
import { useAppManager } from "@/shared/app";
import { handleCause } from "@/shared/utils";

const AUTH_SESSION_QUERY_KEY = ["authSession"];

export function useAuth() {
    const queryClient = useQueryClient();
    const { runPromise } = useAppManager();

    const checkSessionQuery = useQuery<UserId, Unauthorized | UnknownAuthError>({
        queryKey: AUTH_SESSION_QUERY_KEY,
        queryFn: async () => {
            const result = await runPromise(checkSessionUseCase());
            if (Exit.isFailure(result)) {
                throw handleCause(result.cause, (e) => {
                    return new UnknownAuthError({
                        message: "Check session failed due to an unknown error.",
                        originalError: e,
                    });
                });
            }

            return result.value;
        },
        staleTime: 5 * 60 * 1000,
        retry: false,
    });

    const signInMutation = useMutation<
        void,
        InvalidCredentialsError | ValidationError | UnknownAuthError,
        { email: string; password: string }
    >({
        mutationFn: async (input: { email: string; password: string }) => {
            const result = await runPromise(signInUseCase(input));
            if (Exit.isFailure(result)) {
                throw handleCause(result.cause, (e) => {
                    return new UnknownAuthError({
                        message: "Sign in failed due to an unknown error.",
                        originalError: e,
                    });
                });
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: AUTH_SESSION_QUERY_KEY });
        },
    });

    const signOutMutation = useMutation({
        mutationFn: async () => await runPromise(signOutUseCase()),
        onSuccess: () => {
            queryClient.removeQueries({ queryKey: AUTH_SESSION_QUERY_KEY });
        },
    });

    const signOut = (
        options?: MutateOptions<Exit.Exit<void, SignOutError>, Error, void, unknown> | undefined,
    ) => {
        signOutMutation.mutate(undefined, options);
    };

    return {
        checkSessionQuery,
        signInMutation,
        signOut,
    };
}
