import { ApiService, extractBodyWithSchema, HttpStatus } from "@/shared/http";
import { ApiUserSettingsPath, SettingsInput, SettingsOutput } from "@1day-todo/shared";
import { Effect, Layer, pipe } from "effect";
import { SettingService } from "./SettingService";

export const SettingLive = Layer.succeed(SettingService, SettingService.of({
    getSettingsApi: () => pipe(
        ApiService.get(
            ApiUserSettingsPath.GET,
            HttpStatus.OK,
            { credentials: "include" }
        ),
        Effect.flatMap(extractBodyWithSchema(SettingsOutput)),
    ),

    updateSettingsApi: (input: SettingsInput) => pipe(
        ApiService.post(
            ApiUserSettingsPath.UPDATE,
            HttpStatus.OK,
            {
                body: input,
                options: { credentials: "include" }
            }
        ),
        Effect.flatMap(extractBodyWithSchema(SettingsOutput)),
    ),
}));