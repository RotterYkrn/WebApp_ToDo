import { Router } from "express";
import { ApiAuthPathLocal } from "@app/shared/app-paths";
import { constants } from "http2";

const router = Router();

router.get(ApiAuthPathLocal.CHECK_SESSION, (req, res) => {
    const sessionToken = req.cookies?.sessionToken;

    if (sessionToken === "true") {
        res.json({ loggedIn: true });
    } else {
        res.json({ loggedIn: false });
    }
});

router.post(ApiAuthPathLocal.SIGN_IN, (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    if (email === "a@a" && password === "a") {
        res.cookie("sessionToken", "true", {
            httpOnly: true,
            maxAge: 1000 * 60 * 60,
        });
        res.json({ success: true });
        console.log(`signed in as ${email} (${password})`);
    } else {
        res.json({ success: false });
        console.log(`no signed in as ${email} (${password})`);
    }
});

router.post(ApiAuthPathLocal.SIGN_OUT, (req, res) => {
    console.log("signed out");
    res.clearCookie("sessionToken");
    res.status(constants.HTTP_STATUS_NO_CONTENT).end();
});

router.post(ApiAuthPathLocal.SIGN_UP, (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    console.log(`signed up as ${username} (${email}): ${password}`);
    res.json({ success: true });
});

export default router;
