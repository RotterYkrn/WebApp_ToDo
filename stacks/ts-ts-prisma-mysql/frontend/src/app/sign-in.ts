import { AuthComponent } from "@/features/auths";
import { Effect } from "effect";
import { appManager } from "./app";

window.addEventListener("DOMContentLoaded", async () => {
	const signinForm = appManager.runSync(buildSignInFormSection());
	const appRoot = document.getElementById("app-root");
	appRoot?.append(signinForm);
});

export const buildSignInFormSection = (): Effect.Effect<HTMLElement> =>
	Effect.gen(function* () {
		const authComponent = new AuthComponent(appManager);
		const section = document.createElement("section");
		section.id = "sign-in-form-section";

		section.append(
			yield* buildSignInFormSectionTitle(),
			yield* authComponent.buildSignInForm()
		);

		return section;
	});

export const buildSignInFormSectionTitle = (): Effect.Effect<HTMLHeadingElement> => {
	const title = document.createElement("h2");
	title.id = "sign-in-form-title";
	title.textContent = "サインイン";
	return Effect.succeed(title);
};
