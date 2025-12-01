import { AppError } from "@/errors";
import { Cause, Exit } from "effect";

type ExtractByTag<E extends { _tag: string }, T extends string> = E extends { _tag: T } ? E : never;

export const validateAppError = <A, T extends AppError["_tag"]>(
    result: Exit.Exit<A, AppError>,
    expectedTag: T,
    expectedValues: (error: ExtractByTag<AppError, T>) => void
) => {
    expect(Exit.isFailure(result)).toBeTruthy();
    if (Exit.isFailure(result)) {
        const resultError = Cause.squash(result.cause) as AppError;
        expect(resultError._tag).toBe(expectedTag);
        if (resultError._tag === expectedTag) {
            expectedValues(resultError as ExtractByTag<AppError, T>);
        }
    }
};
