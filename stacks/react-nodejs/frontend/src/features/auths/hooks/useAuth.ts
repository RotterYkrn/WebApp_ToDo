import { UserId } from "@1day-todo/shared";
import { MutateOptions, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Exit } from "effect";

import { checkSessionUseCase, signInUseCase, signOutUseCase } from "../services/use-cases";

import {
    CriticalError,
    InternalServerError,
    InvalidCredentialsError,
    InvalidSessionError,
    ValidationError,
} from "@/errors";
import { useAppManager } from "@/shared/app";
import { handleCause } from "@/shared/utils";

const AUTH_SESSION_QUERY_KEY = ["authSession"];

export function useAuth() {
    const queryClient = useQueryClient();
    const { runPromise } = useAppManager();

    const checkSessionQuery = useQuery<
        UserId,
        InvalidSessionError | InternalServerError | CriticalError
    >({
        queryKey: AUTH_SESSION_QUERY_KEY,
        queryFn: async () => {
            const result = await runPromise(checkSessionUseCase());
            if (Exit.isFailure(result)) {
                throw handleCause(result.cause, "Check session failed due to an unknown error.");
            }

            return result.value;
        },
        staleTime: 5 * 60 * 1000,
        retry: false,
    });

    const signInMutation = useMutation<
        void,
        InvalidCredentialsError | ValidationError | InternalServerError | CriticalError,
        { email: string; password: string }
    >({
        mutationFn: async (input: { email: string; password: string }) => {
            const result = await runPromise(signInUseCase(input));
            if (Exit.isFailure(result)) {
                throw handleCause(result.cause, "Sign in failed due to an unknown error.");
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
        options?:
            | MutateOptions<Exit.Exit<void, InternalServerError>, Error, void, unknown>
            | undefined,
    ) => {
        signOutMutation.mutate(undefined, options);
    };

    return {
        checkSessionQuery,
        signInMutation,
        signOut,
    };
}
