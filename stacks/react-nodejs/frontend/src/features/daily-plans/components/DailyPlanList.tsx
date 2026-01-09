import { DailyPlanChunk } from "@1day-todo/shared";
import { useQuery } from "@tanstack/react-query";
import { Cause, Exit, Option } from "effect";

import { getAllDailyPlansUseCase } from "../services/use-cases";

import { TaskUnknownError } from "@/errors";
import { useAppManager } from "@/shared/app";
import Tasks from "@/shared/components/Tasks";

export const DailyPlanList = () => {
    const { runPromise } = useAppManager();

    const { data, isError, isLoading } = useQuery<DailyPlanChunk, TaskUnknownError>({
        queryKey: ["dailyPlanChunk"],
        queryFn: async () => {
            const result = await runPromise(getAllDailyPlansUseCase());
            if (Exit.isFailure(result)) {
                const cause = result.cause;
                const error = Cause.failureOption(cause);
                if (Option.isSome(error)) {
                    console.error(error.value.message, error.value.originalError);
                    throw error.value;
                } else {
                    console.error(cause);
                    throw new TaskUnknownError({
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

    if (isLoading) {
        return <div>今日のプランを読み込み中...</div>;
    }

    if (isError) {
        return <div>今日のプランの読み込み中にエラーが発生しました。</div>;
    }

    if (!data) {
        return <div>今日のプランがありません。</div>;
    }

    return (
        <Tasks>
            <Tasks.List>
                {/* {Chunk.map(data, (task) => (
                    <Tasks.Item key={task.id} id={task.id} onSave={}>
                        <Tasks.Title>{task.title}</Tasks.Title>
                        <Tasks.Detail>
                            <Tasks.Description>{task.description}</Tasks.Description>
                        </Tasks.Detail>
                    </Tasks.Item>
                ))} */}
                <>ダミー</>
            </Tasks.List>
        </Tasks>
    );
};

export default DailyPlanList;
