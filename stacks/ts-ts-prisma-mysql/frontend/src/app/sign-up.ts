import { AuthComponent } from "@/features/auths";
import { appendElementByIdWrapper } from "@/shared/ui/services/use-case";
import { PagePath } from "@app/shared";
import { Effect } from "effect";
import { appManager } from "./app";

window.addEventListener("DOMContentLoaded", async () => {
	const signupForm = appManager.runSync(buildSignUpFormSection());
	appManager.runSync(
		appendElementByIdWrapper(
			"app-root",
			signupForm
		)
	);
});

export const buildSignUpFormSection = (): Effect.Effect<HTMLElement> =>
	Effect.gen(function* () {
		const authComponent = new AuthComponent(appManager);
		const section = document.createElement("section");
		section.id = "sign-up-form-section";

		section.append(
			yield* buildSignUpFormSectionTitle(),
			yield* authComponent.buildSignUpForm(),
			yield* buildToSignUpLinkParagraph()
		);

		return section;
	});

export const buildSignUpFormSectionTitle = (): Effect.Effect<HTMLHeadingElement> => {
	const title = document.createElement("h2");
	title.id = "sign-up-form-title";
	title.textContent = "サインアップ";
	return Effect.succeed(title);
};

export const buildToSignUpLinkParagraph = (): Effect.Effect<HTMLParagraphElement> => {
	const link = document.createElement("a");
	link.href = PagePath.SIGN_IN;
	link.textContent = "既にアカウントをお持ちの方はこちら";

	const linkParagraph = document.createElement("p");
	linkParagraph.appendChild(link);

	return Effect.succeed(linkParagraph);
};
