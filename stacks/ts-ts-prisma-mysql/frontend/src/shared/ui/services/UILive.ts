import { AppendElementsError, UIUnknownError } from "@/errors";
import { Chunk, Effect, Layer, pipe } from "effect";
import { UIService } from "./UIService";

export const UILive = Layer.succeed(UIService, UIService.of({
    getElementById: (id: string) => pipe(
        Effect.sync(() => document.getElementById(id)),
        Effect.filterOrFail(
            (el): el is HTMLElement => el !== null,
            () => new UIUnknownError({
                message: `Element with id "${id}" not found`,
                originalError: null
            }),
        ),
    ),

    appendElements: (
        parent: HTMLElement,
        children: Chunk.Chunk<HTMLElement>
    ) => Effect.try({
        try: () => {
            parent.append(...children);
        },
        catch: (error) => new AppendElementsError({
            message: "Failed to append elements",
            parent,
            children,
            originalError: error
        }),
    }),
    
    redirectTo: (path) => Effect.sync(() => {
        window.location.href = path;
    }),
}));