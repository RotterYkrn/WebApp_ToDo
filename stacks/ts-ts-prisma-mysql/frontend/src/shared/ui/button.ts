export const createButton = (id: string, textContent: string, onClick: () => Promise<void>): HTMLButtonElement => {
    const button = {
        ...document.createElement("button"),
        id,
        textContent
    };
    button.addEventListener("click", async () => await onClick());
    return button;
};
