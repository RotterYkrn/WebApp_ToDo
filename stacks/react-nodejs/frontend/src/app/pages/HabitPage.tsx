import SignOutButton from "@/features/auths/components/SignOutButton";
import HabitList from "@/features/habits/components/HabitList";

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
