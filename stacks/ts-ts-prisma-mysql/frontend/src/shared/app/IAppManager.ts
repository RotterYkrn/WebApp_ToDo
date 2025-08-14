import { Runtime } from "effect";

export interface IAppManager<R> {
	readonly appRuntime: Runtime.Runtime<R>;
}
