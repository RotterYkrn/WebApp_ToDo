import { Router } from "express";
import { ApiUserSettingPath } from "@app/shared/app-paths";

const router = Router();

class Settings {
    notifications: boolean;
    theme: "light" | "dark" | "system";
    username: string;
    password: string;

    constructor(
        notifications: boolean,
        theme: "light" | "dark" | "system",
        username: string,
        password: string
    ) {
        this.notifications = notifications;
        this.theme = theme;
        this.username = username;
        this.password = password;
    }
};

let settings = new Settings(true, "dark", "dummy_username", "dummy_password");

router.get(ApiUserSettingPath.GET, (req, res) => {
    res.json(settings);
});

router.post(ApiUserSettingPath.UPDATE, (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const notifications = req.body.notifications;
    const theme = req.body.theme;
    
    settings = new Settings(notifications, theme, username, password);
    console.log(`updated settings: ${JSON.stringify(settings)}`);
    res.json({ success: true });
});

export default router;
