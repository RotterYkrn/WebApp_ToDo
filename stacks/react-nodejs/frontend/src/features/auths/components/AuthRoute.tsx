import { PagePath } from "@1day-todo/shared";
import { Navigate, Outlet, useLocation } from "react-router-dom";

import { useAuth } from "../hooks/useAuth";

const AuthRoute: React.FC = () => {
    const { checkSessionQuery } = useAuth();
    const { isLoading, data } = checkSessionQuery;
    const location = useLocation();

    if (isLoading) {
        return <div className="auth-loading">認証を確認中...</div>;
    }

    if (!data) {
        return (
            <Navigate
                to={PagePath.SIGN_IN}
                state={{ from: location }}
                replace
            />
        );
    }

    return <Outlet />;
};

export default AuthRoute;
