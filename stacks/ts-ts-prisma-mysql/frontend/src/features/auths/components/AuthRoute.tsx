import { appManager } from "@/app/app";
import { PagePath } from "@app/shared";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { AuthService } from "../services/AuthService";

const AuthRoute: React.FC = () => {
    const isAuthenticated = appManager.runPromise(AuthService.checkSession());
    const location = useLocation();

    if (!isAuthenticated) {
        return <Navigate to={PagePath.SIGN_IN} state={{ from: location }} replace />;
    }

    return <Outlet />;
};

export default AuthRoute;
