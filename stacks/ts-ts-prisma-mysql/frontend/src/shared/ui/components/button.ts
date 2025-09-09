import { Effect } from "effect";
import { createElement } from "./util";

type ButtonProps = Partial<HTMLButtonElement>;

export const createButton = (props: ButtonProps, onClick: () => Promise<void>): Effect.Effect<HTMLButtonElement> =>
    Effect.gen(function* () {
        const button = yield* createElement("button", props);
        button.addEventListener("click", async () => await onClick());
        return button;
    });
