import { ResponseJsonError } from "@/errors";
import { Effect } from "effect";

export const extractJsonBody = (): (
    res: Response
) => Effect.Effect<unknown, ResponseJsonError> =>
    (res) => Effect.tryPromise({
        try: () => res.json() as Promise<unknown>,
        catch: (e) => new ResponseJsonError({
            message: 'Failed to read response body as JSON.',
            originalError: e,
        }),
    });
