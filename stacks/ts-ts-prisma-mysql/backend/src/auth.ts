import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();
const saltRounds = 10; // bcryptのソルト生成ラウンド数

/**
 * ユーザーを登録する
 * @param email - ユーザーのメールアドレス
 * @param password - ユーザーのパスワード (平文)
 * @returns 作成されたユーザーオブジェクト
 * @throws {Error} ユーザー登録に失敗した場合
 */
export const signupUser = async (email: string, password: string) => {
    try {
        // パスワードのハッシュ化
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // ユーザーをデータベースに作成
        const user = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
            },
        });
        return user;
    } catch (error: unknown) {
        console.error("Error signing up user:", error);
        // Prismaエラーなど、より詳細なエラーハンドリングが必要になる場合があります
        throw new Error("Failed to sign up user");
    }
};

/**
 * ユーザーをログインさせる
 * @param email - ユーザーのメールアドレス
 * @param password - ユーザーのパスワード (平文)
 * @returns 認証されたユーザーオブジェクト、またはnull (認証失敗の場合)
 * @throws {Error} ログイン処理中にエラーが発生した場合
 */
export const loginUser = async (email: string, password: string) => {
    try {
        // メールアドレスでユーザーを検索
        const user = await prisma.user.findUnique({
            where: { email },
        });

        // ユーザーが見つからない場合
        if (!user) {
            return null;
        }

        // パスワードの比較
        const passwordMatch = await bcrypt.compare(password, user.password);

        // パスワードが一致しない場合
        if (!passwordMatch) {
            return null;
        }

        // 認証成功
        return user;
    } catch (error: unknown) {
        console.error("Error logging in user:", error);
        throw new Error("Failed to log in user");
    }
};

// 今後の拡張として、ログアウトや認証状態チェックのロジックもここに追加できます。
// 例:
// export const logoutUser = async (sessionId: string) => { ... };
// export const checkAuthStatus = async (sessionId: string) => { ... };
