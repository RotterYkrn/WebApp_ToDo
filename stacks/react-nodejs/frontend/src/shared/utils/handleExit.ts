import { Cause, Option } from "effect";
import { YieldableError } from "effect/Cause";

export const handleCause = <E1 extends YieldableError, E2>(
    cause: Cause.Cause<E1>,
    handleUnknown: (e: unknown) => E2,
): E1 | E2 => {
    const error = Cause.failureOption(cause);
    if (Option.isSome(error)) {
        console.error(error.value.toJSON());
        return error.value;
    } else {
        console.error(cause.toJSON());
        return handleUnknown(cause);
    }
};
