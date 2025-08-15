import express from "express";
import cookieParser from "cookie-parser";
import { constants } from "http2";
import { ApiAuthPath, ApiDailyPlanPath, ApiHabitPath, ApiTodoPath, ApiUserSettingPath } from "@app/shared/app-paths";

const app = express();

app.use(express.json());
app.use(cookieParser());

app.get(ApiAuthPath.CHECK_SESSION, (req, res) => {
    const sessionToken = req.cookies?.sessionToken;

    if (sessionToken === "true") {
        res.json({ loggedIn: true });
    } else {
        res.json({ loggedIn: false });
    }
});

app.post(ApiAuthPath.SIGN_IN, (req, res) => {
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

app.post(ApiAuthPath.SIGN_OUT, (req, res) => {
    console.log("signed out");
    res.clearCookie("sessionToken");
    res.status(constants.HTTP_STATUS_NO_CONTENT).end();
});

app.post(ApiAuthPath.SIGN_UP, (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    console.log(`signed up as ${username} (${email}): ${password}`);
    res.json({ success: true });
});

const tasks = [
	{
		title: "🛒 買い物に行く",
		detail: "スーパーで牛乳・パン・卵を購入する。ついでに日用品もチェック。",
	},
	{
		title: "🧹 部屋の掃除",
		detail: "リビングとキッチンを中心に掃除機をかけて片付ける。",
	},
	{
		title: "📧 メール確認",
		detail: "クライアントからの返信を確認し、返事を書く。",
	},
];

app.get(ApiDailyPlanPath.GET_ALL, (req, res) => {
    res.json(tasks);
});

app.get(ApiTodoPath.GET_ALL, (req, res) => {
    res.json(tasks);
});

app.get(ApiHabitPath.GET_ALL, (req, res) => {
    res.json(tasks);
});

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

app.get(ApiUserSettingPath.GET, (req, res) => {
    res.json(settings);
});

app.post(ApiUserSettingPath.UPDATE, (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const notifications = req.body.notifications;
    const theme = req.body.theme;
    
    settings = new Settings(notifications, theme, username, password);
    console.log(`updated settings: ${JSON.stringify(settings)}`);
    res.json({ success: true });
});

app.listen(3000, () => {
    console.log("http://localhost:3000 started.");
});
