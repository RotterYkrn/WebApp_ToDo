import { ApiAuthPathLocal } from "@1day-todo/shared";
import { Router } from "express";
import { constants } from "http2";

const router = Router();

router.get(ApiAuthPathLocal.CHECK_SESSION, (req, res) => {
    const sessionToken = req.cookies?.sessionToken;

    if (sessionToken === "true") {
        // TODO: ユーザー情報を返す
        res
            .json(1)
            .status(constants.HTTP_STATUS_OK)
            .end();
    } else {
        // TODO: reasonとして、なぜ認証されなかったのかを返す
        res
            .status(constants.HTTP_STATUS_UNAUTHORIZED)
            .end();
    }
});

router.post(ApiAuthPathLocal.SIGN_IN, (req, res) => {
    const { email, password } = req.body;

    if (email === "a@a" && password === "a") {
        res
            .cookie("sessionToken", "true", {
                secure: true,
                sameSite: "none",
                httpOnly: true,
                maxAge: 1000 * 60 * 60,
            })
            .status(constants.HTTP_STATUS_NO_CONTENT)
            .end();
        console.log(`signed in as ${email} (${password})`);
    } else {
        res.status(constants.HTTP_STATUS_UNAUTHORIZED).end();
        console.log(`no signed in as ${email} (${password})`);
    }
});

router.post(ApiAuthPathLocal.SIGN_OUT, (_req, res) => {
    console.log("signed out");
    res
        .clearCookie("sessionToken", {
            secure: true,
            sameSite: "none",
            httpOnly: true,
            path: "/",
        })
        .status(constants.HTTP_STATUS_NO_CONTENT)
        .end();
});

router.post(ApiAuthPathLocal.SIGN_UP, (req, res) => {
    const { email, password } = req.body;

    res
        .status(constants.HTTP_STATUS_CREATED)
        .json({ email, password })
        .end();
    
    console.log(`signed up as ${email}: ${password}`);
});

export default router;
