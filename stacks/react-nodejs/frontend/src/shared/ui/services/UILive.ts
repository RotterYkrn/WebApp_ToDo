import { Chunk, Effect, Either, Layer, Option, pipe } from "effect";

import { UIService } from "./UIService";

import { AppendElementsError, UIUnknownError } from "@/errors";

export const UILive = Layer.succeed(
    UIService,
    UIService.of({
        getElementById: (id: string) =>
            pipe(
                Effect.sync(() => Option.fromNullable(document.getElementById(id))),
                Effect.flatMap(
                    Option.match({
                        onNone: () =>
                            Either.left(
                                new UIUnknownError({
                                    message: `Element with ID "${id}" not found.`,
                                }),
                            ),
                        onSome: (el) => Either.right(el),
                    }),
                ),
            ),

        appendElements: (parent: HTMLElement, children: Chunk.Chunk<HTMLElement>) =>
            Effect.try({
                try: () => {
                    parent.append(...children);
                },
                catch: (error) =>
                    new AppendElementsError({
                        message: "Failed to append elements",
                        parent,
                        children,
                        originalError: error,
                    }),
            }),

        redirectTo: (path) =>
            Effect.sync(() => {
                window.location.href = path;
            }),
    }),
);
