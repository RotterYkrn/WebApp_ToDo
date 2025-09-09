import { UIError } from "@/errors";
import { PagePath } from "@app/shared";
import { Effect } from "effect";

interface IUIService {
    readonly getElementById: (id: string) => Effect.Effect<HTMLElement, UIError>;
    readonly redirectTo: (path: PagePath) => Effect.Effect<void>;
}

export class UIService extends Effect.Tag("UIService")<
    UIService,
    IUIService
>() { }
