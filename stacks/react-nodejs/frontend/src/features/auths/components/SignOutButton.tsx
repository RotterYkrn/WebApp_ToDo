import { PagePath } from "@1day-todo/shared";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const SignOutButton: React.FC = () => {
    const { signOut } = useAuth();
    const navigate = useNavigate();

    const onClick = () => {
        signOut({
            onSuccess: () => {
                navigate(PagePath.SIGN_IN);
            }
        });
    };

    return <button onClick={onClick}>サインアウト</button>;
};

export default SignOutButton;
