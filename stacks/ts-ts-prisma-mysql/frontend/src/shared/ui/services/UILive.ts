import { UIError } from "@/errors";
import { Effect, Layer, pipe } from "effect";
import { UIService } from "./UIService";

export const UILive = Layer.succeed(UIService, UIService.of({
    getElementById: (id: string) => pipe(
        Effect.sync(() => document.getElementById(id)),
        Effect.filterOrFail(
            (el): el is HTMLElement => el !== null,
            () => new UIError({
                message: `Element with id "${id}" not found`,
                originalError: null
            }),
        ),
    ),
    redirectTo: (path) => Effect.sync(() => {
        window.location.href = path;
    }),
}));