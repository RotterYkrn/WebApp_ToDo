import { ApiUserSettingsPath, SettingsInput, SettingsOutput } from "@1day-todo/shared";
import { Effect, Layer, pipe } from "effect";

import { SettingService } from "./SettingService";

import { ApiService } from "@/shared/http/services/ApiService";
import { extractBodyWithSchema } from "@/shared/http/services/use-case";
import { HttpStatus } from "@/shared/http/types/HttpStatus";

export const SettingLive = Layer.succeed(
    SettingService,
    SettingService.of({
        getSettingsApi: () =>
            pipe(
                ApiService.get(ApiUserSettingsPath.GET, HttpStatus.OK, { credentials: "include" }),
                Effect.flatMap(extractBodyWithSchema(SettingsOutput)),
            ),

        updateSettingsApi: (input: SettingsInput) =>
            pipe(
                ApiService.post(ApiUserSettingsPath.UPDATE, HttpStatus.OK, {
                    body: input,
                    options: { credentials: "include" },
                }),
                Effect.flatMap(extractBodyWithSchema(SettingsOutput)),
            ),
    }),
);
