import { InvalidCredentialsError, Unauthorized, UnknownAuthError, ValidationError } from "@/errors";
import { useAppManager } from "@/shared/app/useAppManager";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Cause, Exit, Option } from "effect";
import { UserId } from "../../../../../shared/dist/schemas/user";
import { checkSessionUseCase, performSignOut, signInUseCase } from "../services/use-cases";

const AUTH_SESSION_QUERY_KEY = ["authSession"];

export type AuthState = 
    | 'succeed'            // エラーなし
    | "loading"            // 認証状態確認中
    | 'unauthenticated'    // トークンなしの未ログイン状態
    | 'expired'            // トークン期限切れ (セッション切れ)
    | 'invalid_credential' // ログイン情報不正
    | 'system_error';      // サーバーやネットワークの予期せぬエラー

export function useAuth() {
    const queryClient = useQueryClient();
    const { runPromise } = useAppManager();

    const sessionQuery = useQuery<
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

    const checkSessionState: AuthState = 
        sessionQuery.isLoading
            ? "loading"
            : sessionQuery.isError
                ? mapCheckSessionErrorState(sessionQuery.error)
                : "succeed";

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

    const signInState: AuthState = 
        signInMutation.isPending
            ? "loading"
            : signInMutation.isError
                ? mapSignInErrorState(signInMutation.error)
                : "succeed";

    // 3️⃣ サインアウトのミューテーション
    const signOutMutation = useMutation({
        mutationFn: async () => await runPromise(performSignOut()),
        onSuccess: () => {
            queryClient.removeQueries({ queryKey: AUTH_SESSION_QUERY_KEY });
        },
    });

    return {
        user: sessionQuery.data,
        isAuthenticated: !!sessionQuery.data,
        isLoading: sessionQuery.isLoading || signInMutation.isPending || signOutMutation.isPending,
        isError: signOutMutation.isError,
        checkSessionState,
        signInState,

        signIn: signInMutation.mutate,
        signOut: signOutMutation.mutate,
    };
}

const mapCheckSessionErrorState = (
    error: Unauthorized | UnknownAuthError
): AuthState => {
    switch (error._tag) {
        case "Unauthorized":
            return "unauthenticated";
        case "UnknownAuthError":
        default:
            return "system_error";
    }
};

const mapSignInErrorState = (
    error: InvalidCredentialsError | Unauthorized | ValidationError | UnknownAuthError
): AuthState => {
    switch (error._tag) {
        case "InvalidCredentialsError":
            return "unauthenticated";
        case "ValidationError":
            return "invalid_credential";
        case "UnknownAuthError":
        default:
            return "system_error";
    }
};
