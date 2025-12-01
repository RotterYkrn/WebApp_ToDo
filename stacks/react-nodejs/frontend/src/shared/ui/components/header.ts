export const buildHeader = (): HTMLElement => {
    const header = document.createElement("header");
    header.className = "app-header";

    const title = document.createElement("h1");
    title.textContent = "1Day ToDo";
    header.appendChild(title);

    return header;
};
