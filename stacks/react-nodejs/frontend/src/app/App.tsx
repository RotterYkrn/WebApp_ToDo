import { AppManagerProvider } from "@/contexts/AppManager";
import { AuthRoute, SignOutButton } from "@/features/auths";
import { PagePath } from "@1day-todo/shared";
import { Route, Routes } from "react-router-dom";
import AuthenticatedLayout from "./AuthenticatedLayout";
import DailyPlanPage from "./pages/DailyPlanPage";
import HabitPage from "./pages/HabitPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import TodoPage from "./pages/TodoPage";


const App: React.FC = () => {
    return (
        <AppManagerProvider>
            <Routes>
                <Route path={PagePath.SIGN_IN} element={<SignInPage />} />
                <Route path={PagePath.SIGN_UP} element={<SignUpPage />} />

                <Route element={<AuthRoute />}>
                    <Route element={<AuthenticatedLayout />}>
                        <Route path={PagePath.INDEX} element={<DailyPlanPage />} />
                        <Route path={PagePath.TODO} element={<TodoPage />} />
                        <Route path={PagePath.HABIT} element={<HabitPage />} />
                        <Route path="*" element={<SignOutButton />} />
                    </Route>
                </Route>

                <Route path="*" element={<h1>404 Not Found</h1>} />
            </Routes>
        </AppManagerProvider>
    );
};

export default App;
