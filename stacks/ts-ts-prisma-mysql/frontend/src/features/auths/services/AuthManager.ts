import { IAppManager } from "@/shared/app";
import { Effect, pipe, Runtime } from "effect/index";
import { AuthService } from "./AuthService";
import { ApiService } from "@/shared/http";

type AuthManagerServices = AuthService | ApiService;

export class AuthManager {
    public constructor(
        private readonly appManager: IAppManager<AuthManagerServices>
    ) { }

    public readonly authenticated = <A, E>(callback: Effect.Effect<A, E>): Promise<A | void> =>
        Runtime.runPromise(this.appManager.appRuntime)(
            Effect.gen(function* () {
                const authService = yield* AuthService;
                const isAuth = yield* authService.checkSession();

                if (isAuth) {
                    return yield* callback;
                } else {
                    return yield* authService.redirectToSignIn();
                }
            })
        );

    public readonly performSignOut = (): Promise<void> =>
        Runtime.runPromise(this.appManager.appRuntime)(
            pipe(
                Effect.gen(function* () {
                    const authService = yield* AuthService;
                    yield* authService.signOutApi();
                    yield* authService.redirectToSignIn();
                }),
                Effect.mapError((e) => e),
            )
        );
}