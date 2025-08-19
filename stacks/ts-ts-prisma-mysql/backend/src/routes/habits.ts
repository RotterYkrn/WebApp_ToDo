import { Router } from "express";
import { ApiHabitPath } from "@app/shared";

const router = Router();

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

router.get("/", (req, res) => {
    res.json(tasks);
});

export default router;
