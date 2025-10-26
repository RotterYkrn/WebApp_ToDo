import SignInForm from "@/features/auths/components/SignInForm";
import { PagePath } from "@app/shared";
import { Link } from "react-router-dom";

const SignInPage: React.FC = () => {
    return (
        <>
            <h1>サインイン</h1>
            <SignInForm />
            <Link to={PagePath.SIGN_UP}>アカウントをお持ちでない方はこちら</Link>
        </>
    );
};

export default SignInPage;
