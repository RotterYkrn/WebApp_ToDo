import {
    Habit,
    HabitChunk,
    HabitChunkEncoded,
    HabitCreateEncoded,
    HabitUpdateEncoded,
} from "@1day-todo/shared";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Chunk, Exit, Schema } from "effect";

import {
    createHabitUseCase,
    deleteHabitUseCase,
    getAllHabitsUseCase,
    updateHabitUseCase,
} from "../services/use-cases";

import { CriticalError, InternalServerError, ValidationError } from "@/errors";
import { useAppManager } from "@/shared/app";
import { handleCause } from "@/shared/utils";

const HABIT_QUERY_KEY = ["habitChunk"];

export const useHabit = () => {
    const queryClient = useQueryClient();
    const { runPromise } = useAppManager();

    const { data, isError, isLoading } = useQuery<
        HabitChunk,
        ValidationError | InternalServerError | CriticalError,
        HabitChunkEncoded
    >({
        queryKey: HABIT_QUERY_KEY,
        queryFn: async () => {
            const result = await runPromise(getAllHabitsUseCase());
            if (Exit.isFailure(result)) {
                throw handleCause(result.cause, "Get all habits failed due to an unknown error.");
            }

            return result.value;
        },
        select: (habitChunk) => {
            return Schema.encodeSync(HabitChunk)(habitChunk);
        },
        staleTime: 5 * 60 * 1000,
        retry: false,
    });

    const createMutation = useMutation<
        Habit,
        ValidationError | InternalServerError | CriticalError,
        HabitCreateEncoded
    >({
        mutationFn: async (newHabit: HabitCreateEncoded) => {
            const result = await runPromise(createHabitUseCase(newHabit));
            if (Exit.isFailure(result)) {
                throw handleCause(result.cause, "Create habit failed due to an unknown error.");
            }

            return result.value;
        },
        onSuccess: (createdHabit) => {
            queryClient.setQueryData<HabitChunk>(HABIT_QUERY_KEY, (old) => {
                return old ? Chunk.prepend(old, createdHabit) : Chunk.of(createdHabit);
            });
        },
    });

    const updateMutation = useMutation<
        Habit,
        ValidationError | InternalServerError | CriticalError,
        {
            id: number;
            input: HabitUpdateEncoded;
        }
    >({
        mutationFn: async ({ id, input }: { id: number; input: HabitUpdateEncoded }) => {
            const result = await runPromise(updateHabitUseCase(id, input));
            if (Exit.isFailure(result)) {
                throw handleCause(result.cause, "Update habit failed due to an unknown error.");
            }

            return result.value;
        },
        onSuccess: (updatedHabit) => {
            queryClient.setQueryData<HabitChunk>(HABIT_QUERY_KEY, (old) => {
                return (
                    old &&
                    Chunk.map(old, (todo) => (todo.id === updatedHabit.id ? updatedHabit : todo))
                );
            });
        },
    });

    const deleteMutation = useMutation<
        number,
        ValidationError | InternalServerError | CriticalError,
        number
    >({
        mutationFn: async (id: number) => {
            const result = await runPromise(deleteHabitUseCase(id));
            if (Exit.isFailure(result)) {
                throw handleCause(result.cause, "Delete habit failed due to an unknown error.");
            }

            return result.value;
        },
        onSuccess: (deletedHabitId) => {
            queryClient.setQueryData<HabitChunk>(HABIT_QUERY_KEY, (old) => {
                return old && Chunk.filter(old, (todo) => todo.id !== deletedHabitId);
            });
        },
    });

    return {
        data,
        isError,
        isLoading,

        createHabit: createMutation.mutateAsync,
        isCreating: createMutation.isPending,

        updateHabit: updateMutation.mutateAsync,
        isUpdating: updateMutation.isPending,

        deleteHabit: deleteMutation.mutateAsync,
        isDeleting: deleteMutation.isPending,
    };
};
