import { Layer } from "effect";
import { FetchService } from "../services";

export const FetchLive = Layer.succeed(FetchService, fetch);
