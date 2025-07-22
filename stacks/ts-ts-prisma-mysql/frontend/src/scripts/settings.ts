import { getHttpResponseObjectWithHandle, runPromiseWithLayer } from "./utils";
import { Effect, Layer } from "effect";
import { ConsoleLoggerLive, FetchLive } from "./layers";

interface Settings {
    notifications: boolean;
    theme: "light" | "dark" | "system";
    username: string;
    password: string;
}

const viewSettings = () => getHttpResponseObjectWithHandle<Settings, void>(
    "/api/settings",
    {},
    (data) => {
        const curUsername = (document.getElementById("display-username") as HTMLInputElement);
        const curNotifications = (document.getElementById("notifications") as HTMLInputElement);
        const curTheme = (document.getElementById("display-theme") as HTMLInputElement);

        curUsername.textContent = data.username;
        curNotifications.checked = data.notifications;
        curTheme.textContent = data.theme;

        return Effect.succeed(void 0);
    },
    (error) => {
        console.error(error);
        return Effect.succeed(void 0);
    },
);

window.addEventListener("DOMContentLoaded", async () => {
    await runPromiseWithLayer(viewSettings(), Layer.mergeAll(FetchLive, ConsoleLoggerLive));

    const form = document.getElementById("form");

    if (form) {
        form.addEventListener("submit", async (e) => {
            e.preventDefault(); // フォームの送信によるリロードを防ぐ

            const username = (document.getElementById("username") as HTMLInputElement)?.value ?? null;
            const password = (document.getElementById("password") as HTMLInputElement)?.value ?? null;
            const notifications = (document.getElementById("notifications") as HTMLInputElement)?.checked ?? false;
            const theme = (document.getElementById("theme") as HTMLInputElement)?.value ?? null;

            const res = await fetch("/api/settings", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include", // クッキー受け取りたい場合
                body: JSON.stringify({ username, password, notifications, theme }),
            });

            if (res.ok) {
                const result = await res.json();
                if (result.success) {
                    window.location.reload();
                } else {
                    const errorMessage = document.getElementById("error-message");
                    if (errorMessage) {
                        errorMessage.textContent = "認証に失敗しました";
                    }
                }
            } else {
                const errorMessage = document.getElementById("error-message");
                if (errorMessage) {
                    errorMessage.textContent = "通信エラー";
                }
            }
        });
    }
});
