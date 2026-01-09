import { constants } from "http2";

import { Router } from "express";

const router = Router();

const tasks: { id: number; title: string; description: string }[] = [
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
    res.json(tasks);
});

router.post("/", (req, res) => {
    const { title, description } = req.body;
    const id = tasks.length + 1;
    tasks.push({ id, title, description });
    res.status(constants.HTTP_STATUS_CREATED).json({ id, title, description });
});

router.patch("/:id", (req, res) => {
    const id = Number(req.params.id);
    const { title, description } = req.body;

    const task = tasks.find((t) => t.id === id);
    if (!task) {
        res.status(constants.HTTP_STATUS_NOT_FOUND).end();
        console.error(`Task with id ${id} not found.`);
        return;
    }

    // if (title !== undefined) {
    //     task.title = title;
    // }
    // if (description !== undefined) {
    //     task.description = description;
    // }

    res.status(constants.HTTP_STATUS_OK).json({
        ...task,
        title: title ?? task.title,
        description: description ?? task.description,
    });
});

router.delete("/:id", (req, res) => {
    const id = Number(req.params.id);
    const index = tasks.findIndex((t) => t.id === id);
    if (index === -1) {
        res.status(constants.HTTP_STATUS_NOT_FOUND).end();
        console.error(`Task with id ${id} not found.`);
        return;
    }

    tasks.splice(index, 1);
    res.status(constants.HTTP_STATUS_OK).json(id);
});

export default router;
