import { ApiService, HttpStatus } from "@/shared/http";
import { parseToSchema } from "@/shared/utils";
import { ApiUserSettingPath, SettingsInput, SettingsOutput } from "@app/shared";
import { Effect, Layer, pipe } from "effect";
import { SettingService } from "./SettingService";

export const SettingLive = Layer.succeed(SettingService, SettingService.of({
    getSettingsApi: () => pipe(
        ApiService.get(
            ApiUserSettingPath.GET,
            HttpStatus.OK,
            { credentials: "include" }
        ),
        Effect.flatMap(ApiService.extractBody),
        Effect.flatMap(parseToSchema(SettingsOutput)),
    ),

    updateSettingsApi: (input: SettingsInput) => pipe(
        ApiService.post(
            ApiUserSettingPath.UPDATE,
            HttpStatus.OK,
            {
                body: input,
                options: { credentials: "include" }
            }
        ),
        Effect.flatMap(ApiService.extractBody),
        Effect.flatMap(parseToSchema(SettingsOutput)),
    ),
}));