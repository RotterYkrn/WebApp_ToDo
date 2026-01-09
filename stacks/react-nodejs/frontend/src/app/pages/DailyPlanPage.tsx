import { SignOutButton } from "@/features/auths";
import { DailyPlanList } from "@/features/daily-plans";

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
