import { useContext } from "react";

import { AppManagerContext } from "@/contexts/AppManager/AppManagerContext";
import { IAppManager } from "@/contexts/AppManager/IAppManager";

export const useAppManager = (): IAppManager => {
    const context = useContext(AppManagerContext);

    if (!context) {
        // Providerで囲まれていない場合はエラーをスロー
        throw new Error("useAppManager は AppManagerProvider 内でのみ使用できます。");
    }

    return context;
};
