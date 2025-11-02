import { Unauthorized, UnknownAuthError } from "@/errors";
import { useAppManager } from "@/shared/app/useAppManager";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Cause, Exit, Option } from "effect";
import { UserId } from "../../../../../shared/dist/schemas/user";
import { checkSessionUseCase, performSignOut, signInUseCase } from "../services/use-cases";

const AUTH_SESSION_QUERY_KEY = ["authSession"];

type AuthFailureType = 
    | 'unauthenticated'   // トークンなしの未ログイン状態
    | 'expired'           // トークン期限切れ (セッション切れ)
    | 'invalid_credential' // ログイン情報不正
    | 'system_error'      // サーバーやネットワークの予期せぬエラー
    | 'none';             // エラーなし

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

    const failedType: AuthFailureType = sessionQuery.isError
        ? mapErrorToAuthFailureType(sessionQuery.error)
        : "none";

    const signInMutation = useMutation<
        void,
        string,
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
                    switch (error.value._tag) {
                        case "InvalidCredentialsError":
                            throw "メールアドレスまたはパスワードが正しくありません。";
                        case "ValidationError":
                            throw "メールアドレスとパスワードを正しく入力してください。";
                        case "UnknownAuthError":
                        default:
                            console.error(error.value);
                            throw "処理中にエラーが発生しました。時間をおいて再度お試しください。";
                    }
                } else {
                    console.error(cause);
                    throw "予期せぬエラーが発生しました。時間をおいて再度お試しください。";
                }
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: AUTH_SESSION_QUERY_KEY });
        },
    });

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
        isError: sessionQuery.isError || signInMutation.isError || signOutMutation.isError,
        failedType,
        errorMessage: signInMutation.error,

        signIn: signInMutation.mutate,
        signOut: signOutMutation.mutate,
    };
}

const mapErrorToAuthFailureType = (error: Unauthorized | UnknownAuthError): AuthFailureType => {
    switch (error._tag) {
        case "Unauthorized":
            return "unauthenticated";
        case "UnknownAuthError":
        default:
            return "system_error";
    }
};
