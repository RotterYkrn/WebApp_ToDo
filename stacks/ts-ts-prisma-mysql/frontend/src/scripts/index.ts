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

window.addEventListener("DOMContentLoaded", async () => {
	// イベント設定
	document.getElementById("signout-button")?.addEventListener("click", () => {
		fetch("/api/signout", {
			method: "POST",
			credentials: "include", // クッキーを送るために必須！
		}).then(() => {
			window.location.href = "/signin";
		});
	});

	// メイン処理
	try {
		const res = await fetch("/api/check-session", {
			method: "GET",
			credentials: "include", // クッキーを送るために必須！
		});

		if (res.ok) {
			const data = await res.json();
			if (data.loggedIn) {
				document.body.style.display = "block";

				const taskList = document.getElementById("task-list");

				if (taskList) {
                    tasks.forEach((task) => {
                        const taskElem = document.createElement("article");
                        taskElem.className = "task";

                        const titleElem = document.createElement("button");
                        titleElem.className = "task-title";
                        titleElem.setAttribute("aria-expanded", "false");
                        titleElem.textContent = task.title;

                        const detailElem = document.createElement("p");
                        detailElem.className = "task-detail";
                        detailElem.textContent = task.detail;

                        titleElem.addEventListener("click", () => {
                            const isOpen = taskElem.classList.toggle("open");
                            titleElem.setAttribute("aria-expanded", isOpen.toString());
                        });

                        taskElem.appendChild(titleElem);
                        taskElem.appendChild(detailElem);
                        taskList.appendChild(taskElem);
                    });
				}
			} else {
				console.log("未ログイン");
				window.location.href = "/signin";
			}
		} else {
			console.error("セッション確認失敗");
			window.location.href = "/signin";
		}
	} catch (err) {
		console.error("通信エラー", err);
		window.location.href = "/signin";
	}
});
