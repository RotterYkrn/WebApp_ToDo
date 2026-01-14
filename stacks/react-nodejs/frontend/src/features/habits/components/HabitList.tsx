import { HabitCreateEncoded, HabitUpdateEncoded } from "@1day-todo/shared";

import { useHabit } from "../hooks/useHabit";

import Tasks from "@/shared/components/Tasks";

export const HabitList = () => {
    const { data, isError, isLoading, createHabit, updateHabit, deleteHabit } = useHabit();

    const onCreate = async (newHabit: HabitCreateEncoded) => {
        await createHabit(newHabit);
    };

    const onSave = async (id: number, updatedTask: HabitUpdateEncoded) => {
        await updateHabit({
            id,
            input: updatedTask,
        });
    };

    const onDelete = async (id: number) => {
        await deleteHabit(id);
    };

    if (isLoading) {
        return <div>Habitリストを読み込み中...</div>;
    }

    if (isError) {
        return <div>Habitリストの読み込み中にエラーが発生しました。</div>;
    }

    if (!data) {
        return <div>Habitリストがありません。</div>;
    }

    return (
        <Tasks>
            <Tasks.List>
                <Tasks.Create onCreate={onCreate}>
                    <Tasks.Title>新しい習慣</Tasks.Title>
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

                {data.map((task) => (
                    <Tasks.Item
                        key={task.id}
                        id={task.id}
                        task={task}
                        onSave={onSave}
                        onDelete={onDelete}
                    >
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
};

export default HabitList;
