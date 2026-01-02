import SignOutButton from "@/features/auths/components/SignOutButton";
import TodoList from "@/features/todos/components/TodoList";

const TodoPage = () => {
    return (
        <>
            <h2>今日の予定</h2>
            <SignOutButton />
            <TodoList />
        </>
    );
}

export default TodoPage;
