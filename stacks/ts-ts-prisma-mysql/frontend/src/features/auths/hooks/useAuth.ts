import { useAppManager } from "@/shared/app/useAppManager";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AuthService } from "../services/AuthService";
import { performSignOut, signInUseCase } from "../services/use-cases";

const AUTH_SESSION_QUERY_KEY = ["authSession"];

export function useAuth() {
    const queryClient = useQueryClient();
    const { runPromise } = useAppManager();

    const sessionQuery = useQuery({
        queryKey: AUTH_SESSION_QUERY_KEY,
        queryFn: async () => await runPromise(AuthService.checkSession()),
        staleTime: 5 * 60 * 1000,
        retry: false,
    });

    const signInMutation = useMutation({
        mutationFn: async (input: {
            email: string;
            password: string;
        }) => await runPromise(signInUseCase(input)),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: AUTH_SESSION_QUERY_KEY });
        },
    });

    // 3️⃣ サインアウトのミューテーション
    const signOutMutation = useMutation({
        mutationFn: async () => await runPromise(performSignOut()),
        onSuccess: () => {
            queryClient.removeQueries({ queryKey: AUTH_SESSION_QUERY_KEY }); // セッション情報をクリア
        },
    });

    return {
        user: sessionQuery.data,
        isAuthenticated: !!sessionQuery.data,
        isLoading: sessionQuery.isLoading || signInMutation.isPending || signOutMutation.isPending,
        isError: sessionQuery.isError || signInMutation.isError || signOutMutation.isError,
        errorMessage: signInMutation.error?.message,

        signIn: signInMutation.mutate,
        signOut: signOutMutation.mutate,
    };
}
