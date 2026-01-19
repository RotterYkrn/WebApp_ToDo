import { Cause, Option } from "effect";
import { YieldableError } from "effect/Cause";

import { CriticalError } from "@/errors/types/features/DomainUtilError";

export const handleCause = <E1 extends YieldableError>(
    cause: Cause.Cause<E1>,
    diedMessage: string,
): E1 | CriticalError => {
    const error = Cause.failureOption(cause);
    if (Option.isSome(error)) {
        console.error(error.value.toJSON());
        return error.value;
    } else {
        console.error(cause.toJSON());
        return new CriticalError({
            message: diedMessage,
            cause,
        });
    }
};
