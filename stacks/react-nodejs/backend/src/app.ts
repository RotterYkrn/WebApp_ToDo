import express from "express";
import cookieParser from "cookie-parser";
import appRouter from "./routes/index.js";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(appRouter);

app.listen(3000, () => {
    console.log("http://localhost:3000 started.");
});
