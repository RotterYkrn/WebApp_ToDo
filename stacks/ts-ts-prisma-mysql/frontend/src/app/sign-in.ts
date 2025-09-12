import { AuthComponent } from "@/features/auths";
import { appendElementsWrapper, UIService } from "@/shared/ui";
import { PagePath } from "@app/shared";
import { Effect } from "effect";
import { appManager } from "./app";

window.addEventListener("DOMContentLoaded", async () => {
	appManager.runSync(Effect.gen(function* () {
		yield* appendElementsWrapper(
			yield* UIService.getElementById("app-root"),
			buildSignInFormSection()
		);
	}));
});

export const buildSignInFormSection = (): HTMLElement => {
	const authComponent = new AuthComponent(appManager);
	const section = document.createElement("section");
	section.id = "sign-in-form-section";

	section.append(
		buildSignInFormSectionTitle(),
		authComponent.buildSignInForm(),
		buildToSignUpLinkParagraph()
	);

	return section;
};

export const buildSignInFormSectionTitle = (): HTMLHeadingElement => {
	const title = document.createElement("h2");
	title.id = "sign-in-form-title";
	title.textContent = "サインイン";
	return title;
};

export const buildToSignUpLinkParagraph = (): HTMLParagraphElement => {
	const link = document.createElement("a");
	link.href = PagePath.SIGN_UP;
	link.textContent = "アカウントをお持ちでない方はこちら";

	const linkParagraph = document.createElement("p");
	linkParagraph.appendChild(link);

	return linkParagraph;
};
