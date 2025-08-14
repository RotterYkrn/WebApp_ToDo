export const createButton = (id: string, text: string, onClick: () => Promise<void>): HTMLButtonElement => {
    const button = document.createElement("button");
    button.id = id;
    button.textContent = text;
    button.addEventListener("click", async () => await onClick());
    return button;
};
