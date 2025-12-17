import SignOutButton from "@/features/auths/components/SignOutButton";
import TodayPlanList from "@/features/daily-plans/components/TodayPlanList";

const TodayPlanPage = () => {
    return (
        <>
            <h2>今日の予定</h2>
            <SignOutButton />
            <TodayPlanList />
        </>
    );
}

export default TodayPlanPage;
