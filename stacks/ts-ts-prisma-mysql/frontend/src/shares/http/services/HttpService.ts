import { Context } from "effect";

type HttpFn = typeof fetch;

export class HttpService extends Context.Tag("HttpService")<
    HttpService,
    HttpFn
    >() { };