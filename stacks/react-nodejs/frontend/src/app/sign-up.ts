import { AuthComponent } from "@/features/auths";
import { appendElementsWrapper, UIService } from "@/shared/ui";
import { PagePath } from "@1day-todo/shared";
import { Effect } from "effect";
import { appManager } from "./app";

window.addEventListener("DOMContentLoaded", async () => {
	appManager.runSync(
		Effect.gen(function* () {
			yield* appendElementsWrapper(
				yield* UIService.getElementById("app-root"),
				buildSignUpFormSection(),
			);
		}),
	);
});

export const buildSignUpFormSection = (): HTMLElement => {
	const authComponent = new AuthComponent(appManager);
	const section = document.createElement("section");
	section.id = "sign-up-form-section";

	section.append(
		buildSignUpFormSectionTitle(),
		authComponent.buildSignUpForm(),
		buildToSignUpLinkParagraph(),
	);

	return section;
};

export const buildSignUpFormSectionTitle = (): HTMLHeadingElement => {
	const title = document.createElement("h2");
	title.id = "sign-up-form-title";
	title.textContent = "サインアップ";
	return title;
};

export const buildToSignUpLinkParagraph = (): HTMLParagraphElement => {
	const link = document.createElement("a");
	link.href = PagePath.SIGN_IN;
	link.textContent = "既にアカウントをお持ちの方はこちら";

	const linkParagraph = document.createElement("p");
	linkParagraph.appendChild(link);

	return linkParagraph;
};
