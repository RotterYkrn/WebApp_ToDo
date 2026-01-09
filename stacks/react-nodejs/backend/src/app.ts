import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";

import appRouter from "./routes/index.js";

const app = express();

app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true,
    }),
);
app.use(express.json());
app.use(cookieParser());
app.use(appRouter);

app.listen(3000, () => {
    console.log("http://localhost:3000 started.");
});
