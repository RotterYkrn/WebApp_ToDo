import { runPromiseWithLayer } from "@/core/utils";
import { Effect, pipe } from "effect";
import { createFooter } from "@/core/ui";
import { ApiService, ApiLive, parseResponseJson } from "@/core/http";

interface Settings {
    notifications: boolean;
    theme: "light" | "dark" | "system";
    username: string;
    password: string;
}

const viewSettings = () => pipe(
    Effect.gen(function* () {
        const apiService = yield* ApiService;
        return yield* apiService.get("/api/settings");
    }),
    parseResponseJson<Settings>(),
    Effect.flatMap((data) => Effect.gen(function* () {
        yield* Effect.sync(() => {
            const curUsername = document.getElementById("display-username") as HTMLInputElement;
            curUsername.textContent = data.username;
        });

        yield* Effect.sync(() => {
            const curNotifications = document.getElementById("notifications") as HTMLInputElement;
            curNotifications.checked = data.notifications;
        });

        yield* Effect.sync(() => {
            const curTheme = document.getElementById("display-theme") as HTMLInputElement;
            curTheme.textContent = data.theme;
        });
    })),
    Effect.mapError((e) => e),
);

window.addEventListener("DOMContentLoaded", async () => {
    await runPromiseWithLayer(viewSettings(), ApiLive);

	document.body.appendChild(createFooter());

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
