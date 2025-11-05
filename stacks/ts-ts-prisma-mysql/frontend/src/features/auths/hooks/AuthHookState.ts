export type AuthHookState = 
    | 'succeed'            // エラーなし
    | "loading"            // 認証状態確認中
    | 'unauthenticated'    // トークンなしの未ログイン状態
    | 'expired'            // トークン期限切れ (セッション切れ)
    | 'invalid_credential' // ログイン情報不正
    | 'system_error';      // サーバーやネットワークの予期せぬエラー
