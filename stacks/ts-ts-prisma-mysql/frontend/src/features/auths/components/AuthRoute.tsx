import { PagePath } from "@app/shared";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const AuthRoute: React.FC = () => {
    const { isAuthenticated, checkSessionState } = useAuth();
    const location = useLocation();

    if (checkSessionState === "loading") {
        return <div className="auth-loading">認証を確認中...</div>;
    }

    if (!isAuthenticated) {
        return <Navigate
            to={PagePath.SIGN_IN}
            state={{ from: location }}
            replace
        />;
    }

    return <Outlet />;
};

export default AuthRoute;
