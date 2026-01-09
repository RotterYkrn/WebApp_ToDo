export class SettingComponent {
    constructor() // private readonly appManager: IAppManager<SettingService | ApiService>
    {}

    public readonly buildUserNameInputGroup = (value: string): HTMLDivElement => {
        const container = document.createElement("div");
        const label = document.createElement("label");
        label.id = "user-name-label";
        label.htmlFor = "user-name-input";
        label.textContent = "ユーザー名";
        const input = document.createElement("input");
        input.id = "user-name-input";
        input.name = "userName";
        input.type = "text";
        input.value = value;
        container.appendChild(label);
        container.appendChild(input);
        return container;
    };
}
