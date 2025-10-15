import AuthRoute from "@/features/auths/components/AuthRoute";
import SignOutButton from "@/features/auths/components/SignOutButton";
import { PagePath } from "@app/shared";
import { Route, Routes } from "react-router-dom";
import AuthenticatedLayout from "./AuthenticatedLayout";
import SignInPage from "./SignInPage";

const App: React.FC = () => {
    return (
        <Routes>
            <Route path={PagePath.SIGN_IN} element={<SignInPage />} />

            <Route element={<AuthRoute />}>
                <Route element={<AuthenticatedLayout />}>
                    <Route path="*" element={<SignOutButton />} />
                </Route>
            </Route>

            <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
    );
};

export default App;
