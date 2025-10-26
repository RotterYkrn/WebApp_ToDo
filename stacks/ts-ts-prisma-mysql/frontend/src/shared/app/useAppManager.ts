import { AppManagerContext, IAppManager } from "@/contexts/AppManager";
import { useContext } from "react";

export const useAppManager = (): IAppManager => {
    const context = useContext(AppManagerContext);

    if (!context) {
        // Providerで囲まれていない場合はエラーをスロー
        throw new Error(
            "useAppManager は AppManagerProvider 内でのみ使用できます。",
        );
    }

    return context;
};
