import { TodoChunk } from "@1day-todo/shared";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Chunk, Exit } from "effect";

import {
    createTodoUseCase,
    deleteTodoUseCase,
    getAllTodosUseCase,
    updateTodoUseCase,
} from "../services/use-cases";

import { TaskUnknownError } from "@/errors";
import { useAppManager } from "@/shared/app";
import { handleCause } from "@/shared/utils";

const TODO_QUERY_KEY = ["todoChunk"];

export const useTodo = () => {
    const queryClient = useQueryClient();
    const { runPromise } = useAppManager();

    const { data, isError, isLoading } = useQuery<TodoChunk, TaskUnknownError>({
        queryKey: TODO_QUERY_KEY,
        queryFn: async () => {
            const result = await runPromise(getAllTodosUseCase());
            if (Exit.isFailure(result)) {
                throw handleCause(
                    result.cause,
                    (e) =>
                        new TaskUnknownError({
                            message: "Get all todos failed due to an unknown error.",
                            originalError: e,
                        }),
                );
            }

            return result.value;
        },
        staleTime: 5 * 60 * 1000,
        retry: false,
    });

    const createMutation = useMutation({
        mutationFn: async (newTodo: { title: string; description?: string | null }) => {
            const result = await runPromise(createTodoUseCase(newTodo));
            if (Exit.isFailure(result)) {
                throw handleCause(
                    result.cause,
                    (e) =>
                        new TaskUnknownError({
                            message: "Get all todos failed due to an unknown error.",
                            originalError: e,
                        }),
                );
            }

            return result.value;
        },
        onSuccess: (createdTodo) => {
            queryClient.setQueryData<TodoChunk>(TODO_QUERY_KEY, (old) => {
                return old ? Chunk.prepend(old, createdTodo) : Chunk.of(createdTodo);
            });
        },
    });

    const updateMutation = useMutation({
        mutationFn: async ({
            id,
            input,
        }: {
            id: number;
            input: {
                title?: string;
                description?: string | null;
            };
        }) => {
            const result = await runPromise(updateTodoUseCase(id, input));
            if (Exit.isFailure(result)) {
                throw handleCause(
                    result.cause,
                    (e) =>
                        new TaskUnknownError({
                            message: "Get all todos failed due to an unknown error.",
                            originalError: e,
                        }),
                );
            }

            return result.value;
        },
        onSuccess: (updatedTodo) => {
            queryClient.setQueryData<TodoChunk>(TODO_QUERY_KEY, (old) => {
                return (
                    old &&
                    Chunk.map(old, (todo) => (todo.id === updatedTodo.id ? updatedTodo : todo))
                );
            });
        },
    });

    const deleteMutation = useMutation({
        mutationFn: async (id: number) => {
            const result = await runPromise(deleteTodoUseCase(id));
            if (Exit.isFailure(result)) {
                throw handleCause(
                    result.cause,
                    (e) =>
                        new TaskUnknownError({
                            message: "Delete todo failed due to an unknown error.",
                            originalError: e,
                        }),
                );
            }

            return result.value;
        },
        onSuccess: (deletedTodoId) => {
            queryClient.setQueryData<TodoChunk>(TODO_QUERY_KEY, (old) => {
                return old && Chunk.filter(old, (todo) => todo.id !== deletedTodoId);
            });
        },
    });

    return {
        data,
        isError,
        isLoading,

        createTodo: createMutation.mutateAsync,
        isCreating: createMutation.isPending,

        updateTodo: updateMutation.mutateAsync,
        isUpdating: updateMutation.isPending,

        deleteTodo: deleteMutation.mutateAsync,
        isDeleting: deleteMutation.isPending,
    };
};
