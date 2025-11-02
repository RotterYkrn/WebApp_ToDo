import { PagePath } from "@app/shared";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const AuthRoute: React.FC = () => {
    const { isAuthenticated, isLoading } = useAuth();
    const location = useLocation();

    if (isLoading) {
        return <div>認証を確認中...</div>;
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
