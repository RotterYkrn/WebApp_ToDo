import { AppError } from "@/errors";
import { ApiService } from "@/shared/http";
import { parseToSchema } from "@/shared/utils";
import { EmailAddress, Password } from "@app/shared";
import { Effect, pipe } from "effect/index";
import { AuthService } from "./AuthService";

export const performSignIn = (email: string, password: string) =>
    pipe(
        Effect.gen(function* () {
            const validEmail = yield* parseToSchema(EmailAddress)(email);
            const validPassword = yield* parseToSchema(Password)(password);

            const authService = yield* AuthService;
            return yield* authService.signInApi(validEmail, validPassword);
        }),
        Effect.flatMap((_) => {
            window.location.href = "/";
            return Effect.void;
        }),
        Effect.mapError((e) => {
            console.log(e.toJSON());
            return e;
        }),
    );

export const performSignOut = (): Effect.Effect<void, AppError, AuthService | ApiService> =>
    pipe(
        Effect.gen(function* () {
            const authService = yield* AuthService;
            yield* authService.signOutApi();
            yield* authService.redirectToSignIn();
        }),
        Effect.mapError((e) => e),
    );
