import { UIError } from "@/errors";
import { Chunk, Effect, pipe } from "effect";
import { UIService } from "./UIService";

export const appendElementByIdWrapper = (
    id: string,
    ...elements: HTMLElement[]
): Effect.Effect<void, UIError, UIService> => pipe(
    Effect.succeed(Chunk.fromIterable(elements)),
    Effect.flatMap(appendElementById(id)),
);

export const appendElementById = (
    id: string
): (children: Chunk.Chunk<HTMLElement>) => Effect.Effect<void, UIError, UIService> =>
    (children: Chunk.Chunk<HTMLElement>) => pipe(
        UIService.getElementById(id),
        Effect.flatMap((parent) =>
            Effect.sync(() => {
                parent.append(...children);
            })
        ),
    );
