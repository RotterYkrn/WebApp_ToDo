import { TaskUnknownError } from "@/errors";
import { useAppManager } from "@/shared/app";
import Tasks from "@/shared/components/Tasks";
import { TodoChunk } from "@1day-todo/shared";
import { useQuery } from "@tanstack/react-query";
import { Cause, Chunk, Exit, Option } from "effect";
import { useTodo } from "../hooks/useTodo";
import { getAllTodosUseCase } from "../services/use-cases";

export const TodoList = () => {
    const { runPromise } = useAppManager();

    const { data, isError, isLoading } = useQuery<
        TodoChunk,
        TaskUnknownError
    >({
        queryKey: ["todoChunk"],
        queryFn: async () => {
            const result = await runPromise(getAllTodosUseCase());
            if (Exit.isFailure(result)) {
                const cause = result.cause;
                const error = Cause.failureOption(cause);
                if (Option.isSome(error)) {
                    console.error(error.value.toJSON());
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

    const { createTodo, updateTodo, deleteTodo } = useTodo();

    const onCreate = (newTodo: {
        title: string;
        description?: string | null;
    }) => {
        createTodo(newTodo);
    };
    
    const onSave = (
        id: number,
        updatedTask: {
            title?: string;
            description?: string | null;
        }
    ) => {
        updateTodo({
            id,
            input: updatedTask
        });
    };

    
    
    if (isLoading) {
        return <div>ToDoリストを読み込み中...</div>;
    }

    if (isError) {
        return <div>ToDoリストの読み込み中にエラーが発生しました。</div>;
    }

    if (!data) {
        return <div>ToDoリストがありません。</div>;
    }
    
    return (
        <Tasks>
            <Tasks.List>
                <Tasks.Create onCreate={onCreate}>
                    <Tasks.Title>新しいToDo</Tasks.Title>
                    <Tasks.Detail>
                        <Tasks.Form>
                            <Tasks.TitleInput placeholder="タイトル" />
                            <Tasks.DescriptionInput placeholder="説明" />
                            <div className="actions">
                                <Tasks.SaveButton>新規作成</Tasks.SaveButton>
                                <Tasks.CancelButton>キャンセル</Tasks.CancelButton>
                            </div>
                        </Tasks.Form>
                    </Tasks.Detail>
                </Tasks.Create>

                {Chunk.map(data, (task) => (
                    <Tasks.Item key={task.id} id={task.id} task={task} onSave={onSave} onDelete={deleteTodo}>
                        <Tasks.Title>{task.title}</Tasks.Title>
                        <Tasks.View>
                            <Tasks.Detail>
                                <Tasks.EditButton>編集</Tasks.EditButton>
                                <Tasks.DeleteButton>削除</Tasks.DeleteButton>
                                <Tasks.Description>{task.description}</Tasks.Description>
                            </Tasks.Detail>
                        </Tasks.View>

                        <Tasks.Form>
                            <Tasks.TitleInput />
                            <Tasks.DescriptionInput />
                            <div className="actions">
                                <Tasks.SaveButton>保存</Tasks.SaveButton>
                                <Tasks.CancelButton>キャンセル</Tasks.CancelButton>
                            </div>
                        </Tasks.Form>
                    </Tasks.Item>
                ))}
            </Tasks.List>
        </Tasks>
    );
}

export default TodoList;
