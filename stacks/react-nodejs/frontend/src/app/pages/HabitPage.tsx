import { SignOutButton } from "@/features/auths";
import { HabitList } from "@/features/habits";

const HabitPage = () => {
    return (
        <>
            <h2>今日の予定</h2>
            <SignOutButton />
            <HabitList />
        </>
    );
};

export default HabitPage;
