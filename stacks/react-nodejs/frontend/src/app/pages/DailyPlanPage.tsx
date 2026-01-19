import SignOutButton from "@/features/auths/components/SignOutButton";
import DailyPlanList from "@/features/daily-plans/components/DailyPlanList";

const DailyPlanPage = () => {
    return (
        <>
            <h2>今日の予定</h2>
            <SignOutButton />
            <DailyPlanList />
        </>
    );
};

export default DailyPlanPage;
