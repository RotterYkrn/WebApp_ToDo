import { Layer } from "effect";
import { HttpService } from "@/shares/http/services";

export const HttpLive = Layer.succeed(HttpService, fetch);
