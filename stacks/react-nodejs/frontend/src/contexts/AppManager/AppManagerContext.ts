import { createContext } from "react";

import { IAppManager } from "./IAppManager";

export const AppManagerContext = createContext<IAppManager | undefined>(undefined);
