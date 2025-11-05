import { AppManagerProvider } from "@/contexts/AppManager/AppManagerProvider";
import AuthRoute from "@/features/auths/components/AuthRoute";
import SignOutButton from "@/features/auths/components/SignOutButton";
import { PagePath } from "@app/shared";
import { Route, Routes } from "react-router-dom";
import AuthenticatedLayout from "./AuthenticatedLayout";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";

const App: React.FC = () => {
    return (
        <AppManagerProvider>
            <Routes>
                <Route path={PagePath.SIGN_IN} element={<SignInPage />} />
                <Route path={PagePath.SIGN_UP} element={<SignUpPage />} />

                <Route element={<AuthRoute />}>
                    <Route element={<AuthenticatedLayout />}>
                        <Route path="*" element={<SignOutButton />} />
                    </Route>
                </Route>

                <Route path="*" element={<h1>404 Not Found</h1>} />
            </Routes>
        </AppManagerProvider>
    );
};

export default App;
