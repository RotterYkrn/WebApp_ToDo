import type { z } from 'zod';
export declare const SchemaWithTypeCheck: <T>() => <S extends z.ZodType<T>>(arg: S) => S;
