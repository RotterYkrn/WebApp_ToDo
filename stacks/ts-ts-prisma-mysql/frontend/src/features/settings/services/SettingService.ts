import { SharedError } from "@/errors";
import { ApiService } from "@/shared/http";
import { SettingsInput, SettingsOutput } from "@1day-todo/shared";
import { Effect } from "effect";

interface ISettingService {
    readonly getSettingsApi: () => Effect.Effect<SettingsOutput, SharedError, ApiService>;
    readonly updateSettingsApi: (input: SettingsInput) => Effect.Effect<SettingsOutput, SharedError, ApiService>;
}

export class SettingService extends Effect.Tag("SettingService")<
    SettingService,
    ISettingService
>() { }

