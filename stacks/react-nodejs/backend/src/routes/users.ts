import { constants } from "http2";

import { ApiUserSettingsPath, SettingsInput, SettingsOutput } from "@1day-todo/shared";
import { Effect, Schema } from "effect";
import { Router } from "express";

const router = Router();

const settings = Effect.runSync(
    Schema.decode(SettingsOutput)({
        userName: "dummy_username",
        password: "dummy_password",
        notifications: true,
        theme: "dark",
    }),
);

router.get(ApiUserSettingsPath.GET, (_req, res) => {
    res.status(constants.HTTP_STATUS_OK).json(settings);
});

router.post(ApiUserSettingsPath.UPDATE, (req, res) => {
    const input = Effect.runSync(Schema.decode(SettingsInput)(req.body));
    Object.assign(settings, input);
    res.status(constants.HTTP_STATUS_OK).json(settings);
    console.log(`updated settings: ${JSON.stringify(settings)}`);
});

export default router;
