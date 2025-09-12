import { AuthComponent } from "@/features/auths";
import { UIService } from "@/shared/ui";
import { appendElementsWrapper } from "@/shared/ui/services/use-case";
import { PagePath } from "@app/shared";
import { Effect } from "effect";
import { appManager } from "./app";

window.addEventListener("DOMContentLoaded", async () => {
	appManager.runSync(Effect.gen(function* () {
		yield* appendElementsWrapper(
			yield* UIService.getElementById("app-root"),
			yield* buildSignInFormSection()
		);
	}));
});

export const buildSignInFormSection = (): Effect.Effect<HTMLElement> =>
	Effect.gen(function* () {
		const authComponent = new AuthComponent(appManager);
		const section = document.createElement("section");
		section.id = "sign-in-form-section";

		section.append(
			yield* buildSignInFormSectionTitle(),
			yield* authComponent.buildSignInForm(),
			yield* buildToSignUpLinkParagraph()
		);

		return section;
	});

export const buildSignInFormSectionTitle = (): Effect.Effect<HTMLHeadingElement> => {
	const title = document.createElement("h2");
	title.id = "sign-in-form-title";
	title.textContent = "サインイン";
	return Effect.succeed(title);
};

export const buildToSignUpLinkParagraph = (): Effect.Effect<HTMLParagraphElement> => {
	const link = document.createElement("a");
	link.href = PagePath.SIGN_UP;
	link.textContent = "アカウントをお持ちでない方はこちら";

	const linkParagraph = document.createElement("p");
	linkParagraph.appendChild(link);

	return Effect.succeed(linkParagraph);
};
