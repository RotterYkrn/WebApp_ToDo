import { PagePath } from "@1day-todo/shared";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const SignOutButton: React.FC = () => {
    const { signOut } = useAuth();
    const navigate = useNavigate();

    const onClick = async () => {
        await signOut();
        navigate(PagePath.SIGN_IN, { replace: true });
    };

    return <button onClick={onClick}>サインアウト</button>;
};

export default SignOutButton;
