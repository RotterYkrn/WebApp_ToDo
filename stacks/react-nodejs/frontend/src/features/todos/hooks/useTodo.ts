import {
    Todo,
    TodoChunk,
    TodoChunkEncoded,
    TodoCreateEncoded,
    TodoUpdateEncoded,
} from "@1day-todo/shared";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Chunk, Exit, Schema } from "effect";

import {
    createTodoUseCase,
    deleteTodoUseCase,
    getAllTodosUseCase,
    updateTodoUseCase,
} from "../services/use-cases";

import { CriticalError, InternalServerError, ValidationError } from "@/errors";
import { useAppManager } from "@/shared/app";
import { handleCause } from "@/shared/utils";

const TODO_QUERY_KEY = ["todoChunk"];

export const useTodo = () => {
    const queryClient = useQueryClient();
    const { runPromise } = useAppManager();

    const { data, isError, isLoading } = useQuery<
        TodoChunk,
        InternalServerError | CriticalError,
        TodoChunkEncoded
    >({
        queryKey: TODO_QUERY_KEY,
        queryFn: async () => {
            const result = await runPromise(getAllTodosUseCase());
            if (Exit.isFailure(result)) {
                throw handleCause(result.cause, "Get all todos failed due to an unknown error.");
            }

            return result.value;
        },
        select: (todoChunk) => {
            return Schema.encodeSync(TodoChunk)(todoChunk);
        },
        staleTime: 5 * 60 * 1000,
        retry: false,
    });

    const createMutation = useMutation<
        Todo,
        ValidationError | InternalServerError | CriticalError,
        TodoCreateEncoded
    >({
        mutationFn: async (newTodo: TodoCreateEncoded) => {
            const result = await runPromise(createTodoUseCase(newTodo));
            if (Exit.isFailure(result)) {
                throw handleCause(result.cause, "Create todo failed due to an unknown error.");
            }

            return result.value;
        },
        onSuccess: (createdTodo) => {
            queryClient.setQueryData<TodoChunk>(TODO_QUERY_KEY, (old) => {
                return old ? Chunk.prepend(old, createdTodo) : Chunk.of(createdTodo);
            });
        },
    });

    const updateMutation = useMutation<
        Todo,
        ValidationError | InternalServerError | CriticalError,
        { id: number; input: TodoUpdateEncoded }
    >({
        mutationFn: async ({ id, input }: { id: number; input: TodoUpdateEncoded }) => {
            const result = await runPromise(updateTodoUseCase(id, input));
            if (Exit.isFailure(result)) {
                throw handleCause(result.cause, "Update todo failed due to an unknown error.");
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

    const deleteMutation = useMutation<number, InternalServerError | CriticalError, number>({
        mutationFn: async (id: number) => {
            const result = await runPromise(deleteTodoUseCase(id));
            if (Exit.isFailure(result)) {
                throw handleCause(result.cause, "Delete todo failed due to an unknown error.");
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
