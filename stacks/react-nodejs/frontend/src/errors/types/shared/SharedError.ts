import { ParseResult } from "effect";

import { HttpError } from "./HttpError";
import { OtherError } from "./OtherError";
import { UIUnknownError } from "./UIError";

export type SharedError = HttpError | UIUnknownError | OtherError | ParseResult.ParseError;
