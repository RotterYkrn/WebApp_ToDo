import { SettingsInput, SettingsOutput } from "@1day-todo/shared";
import { Effect } from "effect";

import { SharedError } from "@/errors/types/shared/SharedError";
import { ApiService } from "@/shared/http/services/ApiService";

interface ISettingService {
    readonly getSettingsApi: () => Effect.Effect<SettingsOutput, SharedError, ApiService>;
    readonly updateSettingsApi: (
        input: SettingsInput,
    ) => Effect.Effect<SettingsOutput, SharedError, ApiService>;
}

export class SettingService extends Effect.Tag("SettingService")<
    SettingService,
    ISettingService
>() {}
