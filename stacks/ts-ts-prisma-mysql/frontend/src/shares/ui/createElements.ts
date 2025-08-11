import { Effect } from "effect/index";

export const createButton = (id: string, text: string, onClick: () => Effect.Effect<unknown, unknown, unknown>): HTMLButtonElement => {
    const button = document.createElement("button");
    button.id = id;
    button.textContent = text;
    button.addEventListener("click", async () => {
        await onClick();
    });
    return button;
};
