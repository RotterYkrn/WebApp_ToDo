import { Chunk, Effect } from "effect";

import { UIService } from "./UIService";

import { AppendElementsError } from "@/errors";

export const appendElementsWrapper = (
    parent: HTMLElement,
    ...children: HTMLElement[]
): Effect.Effect<void, AppendElementsError, UIService> =>
    UIService.appendElements(parent, Chunk.fromIterable(children));
