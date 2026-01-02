import Tasks from "@/shared/components/Tasks";
import { Chunk } from "effect";
import { useTodo } from "../hooks/useTodo";

export const TodoList = () => {
    const { data, isError, isLoading, createTodo, updateTodo, deleteTodo } = useTodo();

    const onCreate = async (newTodo: {
        title: string;
        description?: string | null;
    }) => {
        await createTodo(newTodo);
    };
    
    const onSave = async (
        id: number,
        updatedTask: {
            title?: string;
            description?: string | null;
        }
    ) => {
        await updateTodo({
            id,
            input: updatedTask
        });
    };

    const onDelete = async (id: number) => {
        await deleteTodo(id);
    }    
    
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
                    <Tasks.Item key={task.id} id={task.id} task={task} onSave={onSave} onDelete={onDelete}>
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
