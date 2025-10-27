import { PagePath } from "@app/shared";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const AuthRoute: React.FC = () => {
    const { isAuthenticated, isLoading } = useAuth();
    const location = useLocation();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            {isAuthenticated ? (
                <Outlet />
            ) : (
                <Navigate
                    to={PagePath.SIGN_IN}
                    state={{ from: location }}
                    replace
                />
            )}
        </>
    );
};

export default AuthRoute;
