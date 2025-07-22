import { Context } from "effect";

type FetchFn = typeof fetch;

export class FetchService extends Context.Tag("FetchService")<
    FetchService,
    FetchFn
    >() { };