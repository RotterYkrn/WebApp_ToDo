import { IAppManager } from "@/shares/app";
import { Effect, pipe, Runtime } from "effect/index";
import { AuthService } from "./AuthService";
import { ApiService } from "@/shares/http";

type AuthManagerServices = AuthService | ApiService;

export class AuthManager {
    private readonly appManager: IAppManager<AuthManagerServices>;

    public constructor(appManager: IAppManager<AuthManagerServices>) {
        this.appManager = appManager;
    }

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

    public readonly signout = (): Promise<void> =>
        Runtime.runPromise(this.appManager.appRuntime)(
            pipe(
                Effect.gen(function* () {
                    const authService = yield* AuthService;
                    yield* authService.signout();
                    yield* authService.redirectToSignIn();
                }),
                Effect.mapError((e) => e),
            )
        );
}