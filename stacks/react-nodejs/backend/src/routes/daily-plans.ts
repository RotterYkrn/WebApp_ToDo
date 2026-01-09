import { constants } from "http2";

import { DailyPlan } from "@1day-todo/shared";
import { Router } from "express";

const router = Router();

const tasks: DailyPlan[] = [
    {
        id: 1,
        title: "🛒 買い物に行く",
        description: "スーパーで牛乳・パン・卵を購入する。ついでに日用品もチェック。",
    },
    {
        id: 2,
        title: "🧹 部屋の掃除",
        description: "リビングとキッチンを中心に掃除機をかけて片付ける。",
    },
    {
        id: 3,
        title: "📧 メール確認",
        description: "クライアントからの返信を確認し、返事を書く。",
    },
];

router.get("/", (_req, res) => {
    res.json(tasks).status(constants.HTTP_STATUS_OK).end();
});

router.post("/", (req, res) => {
    const { title, description } = req.body;
    if (title && description) {
        tasks.push({ id: tasks.length + 1, title, description });
        res.status(constants.HTTP_STATUS_CREATED).json({
            id: tasks.length + 1,
            title,
            description,
        });
    } else {
        res.status(constants.HTTP_STATUS_BAD_REQUEST).json({ error: "タイトルと詳細は必須です。" });
    }
});

export default router;
