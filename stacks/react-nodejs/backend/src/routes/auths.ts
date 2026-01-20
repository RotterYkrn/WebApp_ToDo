import { constants } from "http2";

import { ApiAuthPathLocal } from "@1day-todo/shared";
import { Effect, Exit } from "effect";
import { Router } from "express";

import { AuthLive } from "@/features/auths/AuthLive.js";
import { signInUseCase, signUpUseCase } from "@/features/auths/use-case.js";
import { SessionLive } from "@/features/sessions/SessionLive.js";
import { signOutUseCase, verifySessionUseCase } from "@/features/sessions/use-case.js";

const router = Router();

router.get(ApiAuthPathLocal.CHECK_SESSION, async (req, res) => {
    const sessionId = req.cookies?.sessionId;

    const sessionExit = await Effect.runPromiseExit(
        verifySessionUseCase(sessionId).pipe(Effect.provide(SessionLive)),
    );

    if (Exit.isFailure(sessionExit)) {
        console.error("Failed to verify session:", sessionExit.cause);
        res.status(constants.HTTP_STATUS_UNAUTHORIZED).end();
        return;
    }

    if (sessionExit.value) {
        // TODO: ユーザー情報を返す
        res.status(constants.HTTP_STATUS_OK).json(1);
    } else {
        // TODO: reasonとして、なぜ認証されなかったのかを返す
        res.status(constants.HTTP_STATUS_UNAUTHORIZED).end();
    }
});

router.post(ApiAuthPathLocal.SIGN_UP, async (req, res) => {
    const signUpExit = await Effect.runPromiseExit(
        signUpUseCase(req.body).pipe(Effect.provide(AuthLive)),
    );

    if (Exit.isFailure(signUpExit)) {
        console.error("Failed to sign up:", signUpExit.cause);
        res.status(constants.HTTP_STATUS_BAD_REQUEST).end();
        return;
    }

    res.status(constants.HTTP_STATUS_CREATED).end();
});

router.post(ApiAuthPathLocal.SIGN_IN, async (req, res) => {
    const signInExit = await Effect.runPromiseExit(
        signInUseCase(req.body).pipe(Effect.provide(AuthLive), Effect.provide(SessionLive)),
    );

    if (Exit.isFailure(signInExit)) {
        console.error("Failed to sign in:", signInExit.cause);
        res.status(constants.HTTP_STATUS_UNAUTHORIZED).end();
        return;
    }

    res.cookie("sessionId", signInExit.value.sessionId, {
        secure: true,
        sameSite: "none",
        httpOnly: true,
        path: "/",
    })
        .status(constants.HTTP_STATUS_NO_CONTENT)
        .end();
});

router.post(ApiAuthPathLocal.SIGN_OUT, async (req, res) => {
    const sessionId = req.cookies?.sessionId;

    const signOutExit = await Effect.runPromiseExit(
        signOutUseCase(sessionId).pipe(Effect.provide(SessionLive)),
    );

    if (Exit.isFailure(signOutExit)) {
        console.error("Failed to sign out:", signOutExit.cause);
        res.status(constants.HTTP_STATUS_INTERNAL_SERVER_ERROR).end();
        return;
    }

    res.clearCookie("sessionId", {
        secure: true,
        sameSite: "none",
        httpOnly: true,
        path: "/",
    })
        .status(constants.HTTP_STATUS_NO_CONTENT)
        .end();
});

export default router;
