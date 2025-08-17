import { Router } from "express";
import { constants } from "http2";

const router = Router();

let tasks = [
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

router.post("/", (req, res) => {
    const { title, detail } = req.body;
    if (title && detail) {
        tasks.push({ title, detail });
        res.status(constants.HTTP_STATUS_CREATED).json({ title, detail });
    } else {
        res.status(constants.HTTP_STATUS_BAD_REQUEST).json({ error: "タイトルと詳細は必須です。" });
    }
});

export default router;
