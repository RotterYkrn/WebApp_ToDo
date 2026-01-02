import { SignOutButton } from "@/features/auths";
import { TodoList } from "@/features/todos";

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
