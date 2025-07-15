import express from "express";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(cookieParser());

app.get("/api/check-session", (req, res) => {
    const sessionToken = req.cookies?.sessionToken;

    if (sessionToken === "true") {
        res.json({ loggedIn: true });
    } else {
        res.json({ loggedIn: false });
    }
});

app.post("/api/signin", (req, res) => {
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

app.post("/api/signout", (req, res) => {
    res.clearCookie("sessionToken");
    res.json({ success: true });
});

app.post("/api/signup", (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    res.json({ success: true });
}); 

app.listen(3000, () => {
    console.log("http://localhost:3000 started.");
});
