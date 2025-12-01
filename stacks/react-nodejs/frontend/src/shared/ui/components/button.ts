import { createElement } from "./util";

type ButtonProps = Partial<HTMLButtonElement>;

export const createButton = (props: ButtonProps, onClick: () => Promise<void>): HTMLButtonElement => {
    const button = createElement("button", props);
    button.addEventListener("click", async () => await onClick());
    return button;
};
