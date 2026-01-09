import { PagePath } from "@1day-todo/shared";
import { Link } from "react-router-dom";

const SignUpSuccessMessage: React.FC = () => {
    return (
        <>
            <h2>サインアップ成功</h2>
            <p>アカウントの作成が成功しました。サインインしてください。</p>
            <Link to={PagePath.SIGN_IN}>サインインページ</Link>
        </>
    );
};

export default SignUpSuccessMessage;
