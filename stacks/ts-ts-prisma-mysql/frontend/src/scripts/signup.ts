window.addEventListener("DOMContentLoaded", async () => {
	const form = document.getElementById("form");

	if (form) {
		form.addEventListener("submit", async (e) => {
			e.preventDefault(); // フォームの送信によるリロードを防ぐ

			const username = (document.getElementById("username") as HTMLInputElement)?.value ?? null;
			const email = (document.getElementById("email") as HTMLInputElement)?.value ?? null;
			const password = (document.getElementById("password") as HTMLInputElement)?.value ?? null;

			const res = await fetch("/api/signup", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				credentials: "include", // クッキー受け取りたい場合
				body: JSON.stringify({ username, email, password }),
			});

			if (res.ok) {
				const result = await res.json();
				if (result.success) {
					form.style.display = "none";
					const successMessage = document.getElementById("success-message");
					if (successMessage) {
						successMessage.style.display = "block";
					}
				} else {
					const errorMessage = document.getElementById("error-message");
					if (errorMessage) {
						errorMessage.textContent = "ユーザー作成に失敗しました";
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
