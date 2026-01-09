import { PagePath } from "@1day-todo/shared";
import { Chunk, Effect } from "effect";

import { AppendElementsError, UIUnknownError } from "@/errors";

interface IUIService {
    readonly getElementById: (id: string) => Effect.Effect<HTMLElement, UIUnknownError>;
    readonly appendElements: (
        parent: HTMLElement,
        children: Chunk.Chunk<HTMLElement>,
    ) => Effect.Effect<void, AppendElementsError>;
    readonly redirectTo: (path: PagePath) => Effect.Effect<void>;
}

export class UIService extends Effect.Tag("UIService")<UIService, IUIService>() {}
