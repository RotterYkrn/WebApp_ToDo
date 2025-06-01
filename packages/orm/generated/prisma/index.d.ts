
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UserSettings
 * 
 */
export type UserSettings = $Result.DefaultSelection<Prisma.$UserSettingsPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Todo
 * 
 */
export type Todo = $Result.DefaultSelection<Prisma.$TodoPayload>
/**
 * Model Habit
 * 
 */
export type Habit = $Result.DefaultSelection<Prisma.$HabitPayload>
/**
 * Model DailyPlan
 * 
 */
export type DailyPlan = $Result.DefaultSelection<Prisma.$DailyPlanPayload>
/**
 * Model DailyPlanItem
 * 
 */
export type DailyPlanItem = $Result.DefaultSelection<Prisma.$DailyPlanItemPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userSettings`: Exposes CRUD operations for the **UserSettings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserSettings
    * const userSettings = await prisma.userSettings.findMany()
    * ```
    */
  get userSettings(): Prisma.UserSettingsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.todo`: Exposes CRUD operations for the **Todo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Todos
    * const todos = await prisma.todo.findMany()
    * ```
    */
  get todo(): Prisma.TodoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.habit`: Exposes CRUD operations for the **Habit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Habits
    * const habits = await prisma.habit.findMany()
    * ```
    */
  get habit(): Prisma.HabitDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dailyPlan`: Exposes CRUD operations for the **DailyPlan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DailyPlans
    * const dailyPlans = await prisma.dailyPlan.findMany()
    * ```
    */
  get dailyPlan(): Prisma.DailyPlanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dailyPlanItem`: Exposes CRUD operations for the **DailyPlanItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DailyPlanItems
    * const dailyPlanItems = await prisma.dailyPlanItem.findMany()
    * ```
    */
  get dailyPlanItem(): Prisma.DailyPlanItemDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    UserSettings: 'UserSettings',
    Category: 'Category',
    Todo: 'Todo',
    Habit: 'Habit',
    DailyPlan: 'DailyPlan',
    DailyPlanItem: 'DailyPlanItem'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "userSettings" | "category" | "todo" | "habit" | "dailyPlan" | "dailyPlanItem"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      UserSettings: {
        payload: Prisma.$UserSettingsPayload<ExtArgs>
        fields: Prisma.UserSettingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserSettingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserSettingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>
          }
          findFirst: {
            args: Prisma.UserSettingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserSettingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>
          }
          findMany: {
            args: Prisma.UserSettingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>[]
          }
          create: {
            args: Prisma.UserSettingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>
          }
          createMany: {
            args: Prisma.UserSettingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserSettingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>
          }
          update: {
            args: Prisma.UserSettingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>
          }
          deleteMany: {
            args: Prisma.UserSettingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserSettingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserSettingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>
          }
          aggregate: {
            args: Prisma.UserSettingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserSettings>
          }
          groupBy: {
            args: Prisma.UserSettingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserSettingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserSettingsCountArgs<ExtArgs>
            result: $Utils.Optional<UserSettingsCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Todo: {
        payload: Prisma.$TodoPayload<ExtArgs>
        fields: Prisma.TodoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TodoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TodoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodoPayload>
          }
          findFirst: {
            args: Prisma.TodoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TodoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodoPayload>
          }
          findMany: {
            args: Prisma.TodoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodoPayload>[]
          }
          create: {
            args: Prisma.TodoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodoPayload>
          }
          createMany: {
            args: Prisma.TodoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TodoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodoPayload>
          }
          update: {
            args: Prisma.TodoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodoPayload>
          }
          deleteMany: {
            args: Prisma.TodoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TodoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TodoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodoPayload>
          }
          aggregate: {
            args: Prisma.TodoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTodo>
          }
          groupBy: {
            args: Prisma.TodoGroupByArgs<ExtArgs>
            result: $Utils.Optional<TodoGroupByOutputType>[]
          }
          count: {
            args: Prisma.TodoCountArgs<ExtArgs>
            result: $Utils.Optional<TodoCountAggregateOutputType> | number
          }
        }
      }
      Habit: {
        payload: Prisma.$HabitPayload<ExtArgs>
        fields: Prisma.HabitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HabitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HabitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload>
          }
          findFirst: {
            args: Prisma.HabitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HabitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload>
          }
          findMany: {
            args: Prisma.HabitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload>[]
          }
          create: {
            args: Prisma.HabitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload>
          }
          createMany: {
            args: Prisma.HabitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.HabitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload>
          }
          update: {
            args: Prisma.HabitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload>
          }
          deleteMany: {
            args: Prisma.HabitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HabitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.HabitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload>
          }
          aggregate: {
            args: Prisma.HabitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHabit>
          }
          groupBy: {
            args: Prisma.HabitGroupByArgs<ExtArgs>
            result: $Utils.Optional<HabitGroupByOutputType>[]
          }
          count: {
            args: Prisma.HabitCountArgs<ExtArgs>
            result: $Utils.Optional<HabitCountAggregateOutputType> | number
          }
        }
      }
      DailyPlan: {
        payload: Prisma.$DailyPlanPayload<ExtArgs>
        fields: Prisma.DailyPlanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DailyPlanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyPlanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DailyPlanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyPlanPayload>
          }
          findFirst: {
            args: Prisma.DailyPlanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyPlanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DailyPlanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyPlanPayload>
          }
          findMany: {
            args: Prisma.DailyPlanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyPlanPayload>[]
          }
          create: {
            args: Prisma.DailyPlanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyPlanPayload>
          }
          createMany: {
            args: Prisma.DailyPlanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DailyPlanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyPlanPayload>
          }
          update: {
            args: Prisma.DailyPlanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyPlanPayload>
          }
          deleteMany: {
            args: Prisma.DailyPlanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DailyPlanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DailyPlanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyPlanPayload>
          }
          aggregate: {
            args: Prisma.DailyPlanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDailyPlan>
          }
          groupBy: {
            args: Prisma.DailyPlanGroupByArgs<ExtArgs>
            result: $Utils.Optional<DailyPlanGroupByOutputType>[]
          }
          count: {
            args: Prisma.DailyPlanCountArgs<ExtArgs>
            result: $Utils.Optional<DailyPlanCountAggregateOutputType> | number
          }
        }
      }
      DailyPlanItem: {
        payload: Prisma.$DailyPlanItemPayload<ExtArgs>
        fields: Prisma.DailyPlanItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DailyPlanItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyPlanItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DailyPlanItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyPlanItemPayload>
          }
          findFirst: {
            args: Prisma.DailyPlanItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyPlanItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DailyPlanItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyPlanItemPayload>
          }
          findMany: {
            args: Prisma.DailyPlanItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyPlanItemPayload>[]
          }
          create: {
            args: Prisma.DailyPlanItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyPlanItemPayload>
          }
          createMany: {
            args: Prisma.DailyPlanItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DailyPlanItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyPlanItemPayload>
          }
          update: {
            args: Prisma.DailyPlanItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyPlanItemPayload>
          }
          deleteMany: {
            args: Prisma.DailyPlanItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DailyPlanItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DailyPlanItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyPlanItemPayload>
          }
          aggregate: {
            args: Prisma.DailyPlanItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDailyPlanItem>
          }
          groupBy: {
            args: Prisma.DailyPlanItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<DailyPlanItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.DailyPlanItemCountArgs<ExtArgs>
            result: $Utils.Optional<DailyPlanItemCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    userSettings?: UserSettingsOmit
    category?: CategoryOmit
    todo?: TodoOmit
    habit?: HabitOmit
    dailyPlan?: DailyPlanOmit
    dailyPlanItem?: DailyPlanItemOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    todos: number
    habits: number
    dailyPlans: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    todos?: boolean | UserCountOutputTypeCountTodosArgs
    habits?: boolean | UserCountOutputTypeCountHabitsArgs
    dailyPlans?: boolean | UserCountOutputTypeCountDailyPlansArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTodosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TodoWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountHabitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HabitWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDailyPlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyPlanWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    todos: number
    habits: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    todos?: boolean | CategoryCountOutputTypeCountTodosArgs
    habits?: boolean | CategoryCountOutputTypeCountHabitsArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountTodosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TodoWhereInput
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountHabitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HabitWhereInput
  }


  /**
   * Count Type TodoCountOutputType
   */

  export type TodoCountOutputType = {
    subtasks: number
    dailyPlanItem: number
  }

  export type TodoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subtasks?: boolean | TodoCountOutputTypeCountSubtasksArgs
    dailyPlanItem?: boolean | TodoCountOutputTypeCountDailyPlanItemArgs
  }

  // Custom InputTypes
  /**
   * TodoCountOutputType without action
   */
  export type TodoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TodoCountOutputType
     */
    select?: TodoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TodoCountOutputType without action
   */
  export type TodoCountOutputTypeCountSubtasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TodoWhereInput
  }

  /**
   * TodoCountOutputType without action
   */
  export type TodoCountOutputTypeCountDailyPlanItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyPlanItemWhereInput
  }


  /**
   * Count Type HabitCountOutputType
   */

  export type HabitCountOutputType = {
    dailyPlanItem: number
  }

  export type HabitCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dailyPlanItem?: boolean | HabitCountOutputTypeCountDailyPlanItemArgs
  }

  // Custom InputTypes
  /**
   * HabitCountOutputType without action
   */
  export type HabitCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitCountOutputType
     */
    select?: HabitCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HabitCountOutputType without action
   */
  export type HabitCountOutputTypeCountDailyPlanItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyPlanItemWhereInput
  }


  /**
   * Count Type DailyPlanCountOutputType
   */

  export type DailyPlanCountOutputType = {
    items: number
  }

  export type DailyPlanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | DailyPlanCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * DailyPlanCountOutputType without action
   */
  export type DailyPlanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyPlanCountOutputType
     */
    select?: DailyPlanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DailyPlanCountOutputType without action
   */
  export type DailyPlanCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyPlanItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    appleId: string | null
    googleId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    appleId: string | null
    googleId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    appleId: number
    googleId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    appleId?: true
    googleId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    appleId?: true
    googleId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    appleId?: true
    googleId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    password: string
    appleId: string | null
    googleId: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    appleId?: boolean
    googleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    todos?: boolean | User$todosArgs<ExtArgs>
    habits?: boolean | User$habitsArgs<ExtArgs>
    dailyPlans?: boolean | User$dailyPlansArgs<ExtArgs>
    settings?: boolean | User$settingsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    appleId?: boolean
    googleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "appleId" | "googleId" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    todos?: boolean | User$todosArgs<ExtArgs>
    habits?: boolean | User$habitsArgs<ExtArgs>
    dailyPlans?: boolean | User$dailyPlansArgs<ExtArgs>
    settings?: boolean | User$settingsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      todos: Prisma.$TodoPayload<ExtArgs>[]
      habits: Prisma.$HabitPayload<ExtArgs>[]
      dailyPlans: Prisma.$DailyPlanPayload<ExtArgs>[]
      settings: Prisma.$UserSettingsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      appleId: string | null
      googleId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    todos<T extends User$todosArgs<ExtArgs> = {}>(args?: Subset<T, User$todosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TodoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    habits<T extends User$habitsArgs<ExtArgs> = {}>(args?: Subset<T, User$habitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    dailyPlans<T extends User$dailyPlansArgs<ExtArgs> = {}>(args?: Subset<T, User$dailyPlansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    settings<T extends User$settingsArgs<ExtArgs> = {}>(args?: Subset<T, User$settingsArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly appleId: FieldRef<"User", 'String'>
    readonly googleId: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.todos
   */
  export type User$todosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Todo
     */
    select?: TodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Todo
     */
    omit?: TodoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoInclude<ExtArgs> | null
    where?: TodoWhereInput
    orderBy?: TodoOrderByWithRelationInput | TodoOrderByWithRelationInput[]
    cursor?: TodoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TodoScalarFieldEnum | TodoScalarFieldEnum[]
  }

  /**
   * User.habits
   */
  export type User$habitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    where?: HabitWhereInput
    orderBy?: HabitOrderByWithRelationInput | HabitOrderByWithRelationInput[]
    cursor?: HabitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HabitScalarFieldEnum | HabitScalarFieldEnum[]
  }

  /**
   * User.dailyPlans
   */
  export type User$dailyPlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyPlan
     */
    select?: DailyPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyPlan
     */
    omit?: DailyPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyPlanInclude<ExtArgs> | null
    where?: DailyPlanWhereInput
    orderBy?: DailyPlanOrderByWithRelationInput | DailyPlanOrderByWithRelationInput[]
    cursor?: DailyPlanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DailyPlanScalarFieldEnum | DailyPlanScalarFieldEnum[]
  }

  /**
   * User.settings
   */
  export type User$settingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    where?: UserSettingsWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model UserSettings
   */

  export type AggregateUserSettings = {
    _count: UserSettingsCountAggregateOutputType | null
    _avg: UserSettingsAvgAggregateOutputType | null
    _sum: UserSettingsSumAggregateOutputType | null
    _min: UserSettingsMinAggregateOutputType | null
    _max: UserSettingsMaxAggregateOutputType | null
  }

  export type UserSettingsAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type UserSettingsSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type UserSettingsMinAggregateOutputType = {
    id: number | null
    userId: number | null
    dateChangeTime: string | null
    theme: string | null
    language: string | null
    notifications: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserSettingsMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    dateChangeTime: string | null
    theme: string | null
    language: string | null
    notifications: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserSettingsCountAggregateOutputType = {
    id: number
    userId: number
    dateChangeTime: number
    theme: number
    language: number
    notifications: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserSettingsAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type UserSettingsSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type UserSettingsMinAggregateInputType = {
    id?: true
    userId?: true
    dateChangeTime?: true
    theme?: true
    language?: true
    notifications?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserSettingsMaxAggregateInputType = {
    id?: true
    userId?: true
    dateChangeTime?: true
    theme?: true
    language?: true
    notifications?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserSettingsCountAggregateInputType = {
    id?: true
    userId?: true
    dateChangeTime?: true
    theme?: true
    language?: true
    notifications?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserSettingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSettings to aggregate.
     */
    where?: UserSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSettings to fetch.
     */
    orderBy?: UserSettingsOrderByWithRelationInput | UserSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserSettings
    **/
    _count?: true | UserSettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserSettingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSettingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserSettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserSettingsMaxAggregateInputType
  }

  export type GetUserSettingsAggregateType<T extends UserSettingsAggregateArgs> = {
        [P in keyof T & keyof AggregateUserSettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserSettings[P]>
      : GetScalarType<T[P], AggregateUserSettings[P]>
  }




  export type UserSettingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSettingsWhereInput
    orderBy?: UserSettingsOrderByWithAggregationInput | UserSettingsOrderByWithAggregationInput[]
    by: UserSettingsScalarFieldEnum[] | UserSettingsScalarFieldEnum
    having?: UserSettingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserSettingsCountAggregateInputType | true
    _avg?: UserSettingsAvgAggregateInputType
    _sum?: UserSettingsSumAggregateInputType
    _min?: UserSettingsMinAggregateInputType
    _max?: UserSettingsMaxAggregateInputType
  }

  export type UserSettingsGroupByOutputType = {
    id: number
    userId: number
    dateChangeTime: string
    theme: string
    language: string
    notifications: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserSettingsCountAggregateOutputType | null
    _avg: UserSettingsAvgAggregateOutputType | null
    _sum: UserSettingsSumAggregateOutputType | null
    _min: UserSettingsMinAggregateOutputType | null
    _max: UserSettingsMaxAggregateOutputType | null
  }

  type GetUserSettingsGroupByPayload<T extends UserSettingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserSettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserSettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserSettingsGroupByOutputType[P]>
            : GetScalarType<T[P], UserSettingsGroupByOutputType[P]>
        }
      >
    >


  export type UserSettingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    dateChangeTime?: boolean
    theme?: boolean
    language?: boolean
    notifications?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSettings"]>



  export type UserSettingsSelectScalar = {
    id?: boolean
    userId?: boolean
    dateChangeTime?: boolean
    theme?: boolean
    language?: boolean
    notifications?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserSettingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "dateChangeTime" | "theme" | "language" | "notifications" | "createdAt" | "updatedAt", ExtArgs["result"]["userSettings"]>
  export type UserSettingsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserSettingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserSettings"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      dateChangeTime: string
      theme: string
      language: string
      notifications: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userSettings"]>
    composites: {}
  }

  type UserSettingsGetPayload<S extends boolean | null | undefined | UserSettingsDefaultArgs> = $Result.GetResult<Prisma.$UserSettingsPayload, S>

  type UserSettingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserSettingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserSettingsCountAggregateInputType | true
    }

  export interface UserSettingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserSettings'], meta: { name: 'UserSettings' } }
    /**
     * Find zero or one UserSettings that matches the filter.
     * @param {UserSettingsFindUniqueArgs} args - Arguments to find a UserSettings
     * @example
     * // Get one UserSettings
     * const userSettings = await prisma.userSettings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserSettingsFindUniqueArgs>(args: SelectSubset<T, UserSettingsFindUniqueArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserSettings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserSettingsFindUniqueOrThrowArgs} args - Arguments to find a UserSettings
     * @example
     * // Get one UserSettings
     * const userSettings = await prisma.userSettings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserSettingsFindUniqueOrThrowArgs>(args: SelectSubset<T, UserSettingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSettingsFindFirstArgs} args - Arguments to find a UserSettings
     * @example
     * // Get one UserSettings
     * const userSettings = await prisma.userSettings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserSettingsFindFirstArgs>(args?: SelectSubset<T, UserSettingsFindFirstArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSettings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSettingsFindFirstOrThrowArgs} args - Arguments to find a UserSettings
     * @example
     * // Get one UserSettings
     * const userSettings = await prisma.userSettings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserSettingsFindFirstOrThrowArgs>(args?: SelectSubset<T, UserSettingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSettingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserSettings
     * const userSettings = await prisma.userSettings.findMany()
     * 
     * // Get first 10 UserSettings
     * const userSettings = await prisma.userSettings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userSettingsWithIdOnly = await prisma.userSettings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserSettingsFindManyArgs>(args?: SelectSubset<T, UserSettingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserSettings.
     * @param {UserSettingsCreateArgs} args - Arguments to create a UserSettings.
     * @example
     * // Create one UserSettings
     * const UserSettings = await prisma.userSettings.create({
     *   data: {
     *     // ... data to create a UserSettings
     *   }
     * })
     * 
     */
    create<T extends UserSettingsCreateArgs>(args: SelectSubset<T, UserSettingsCreateArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserSettings.
     * @param {UserSettingsCreateManyArgs} args - Arguments to create many UserSettings.
     * @example
     * // Create many UserSettings
     * const userSettings = await prisma.userSettings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserSettingsCreateManyArgs>(args?: SelectSubset<T, UserSettingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserSettings.
     * @param {UserSettingsDeleteArgs} args - Arguments to delete one UserSettings.
     * @example
     * // Delete one UserSettings
     * const UserSettings = await prisma.userSettings.delete({
     *   where: {
     *     // ... filter to delete one UserSettings
     *   }
     * })
     * 
     */
    delete<T extends UserSettingsDeleteArgs>(args: SelectSubset<T, UserSettingsDeleteArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserSettings.
     * @param {UserSettingsUpdateArgs} args - Arguments to update one UserSettings.
     * @example
     * // Update one UserSettings
     * const userSettings = await prisma.userSettings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserSettingsUpdateArgs>(args: SelectSubset<T, UserSettingsUpdateArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserSettings.
     * @param {UserSettingsDeleteManyArgs} args - Arguments to filter UserSettings to delete.
     * @example
     * // Delete a few UserSettings
     * const { count } = await prisma.userSettings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserSettingsDeleteManyArgs>(args?: SelectSubset<T, UserSettingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSettingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserSettings
     * const userSettings = await prisma.userSettings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserSettingsUpdateManyArgs>(args: SelectSubset<T, UserSettingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserSettings.
     * @param {UserSettingsUpsertArgs} args - Arguments to update or create a UserSettings.
     * @example
     * // Update or create a UserSettings
     * const userSettings = await prisma.userSettings.upsert({
     *   create: {
     *     // ... data to create a UserSettings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserSettings we want to update
     *   }
     * })
     */
    upsert<T extends UserSettingsUpsertArgs>(args: SelectSubset<T, UserSettingsUpsertArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSettingsCountArgs} args - Arguments to filter UserSettings to count.
     * @example
     * // Count the number of UserSettings
     * const count = await prisma.userSettings.count({
     *   where: {
     *     // ... the filter for the UserSettings we want to count
     *   }
     * })
    **/
    count<T extends UserSettingsCountArgs>(
      args?: Subset<T, UserSettingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserSettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserSettingsAggregateArgs>(args: Subset<T, UserSettingsAggregateArgs>): Prisma.PrismaPromise<GetUserSettingsAggregateType<T>>

    /**
     * Group by UserSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSettingsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserSettingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserSettingsGroupByArgs['orderBy'] }
        : { orderBy?: UserSettingsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserSettingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserSettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserSettings model
   */
  readonly fields: UserSettingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserSettings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserSettingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserSettings model
   */
  interface UserSettingsFieldRefs {
    readonly id: FieldRef<"UserSettings", 'Int'>
    readonly userId: FieldRef<"UserSettings", 'Int'>
    readonly dateChangeTime: FieldRef<"UserSettings", 'String'>
    readonly theme: FieldRef<"UserSettings", 'String'>
    readonly language: FieldRef<"UserSettings", 'String'>
    readonly notifications: FieldRef<"UserSettings", 'Boolean'>
    readonly createdAt: FieldRef<"UserSettings", 'DateTime'>
    readonly updatedAt: FieldRef<"UserSettings", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserSettings findUnique
   */
  export type UserSettingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * Filter, which UserSettings to fetch.
     */
    where: UserSettingsWhereUniqueInput
  }

  /**
   * UserSettings findUniqueOrThrow
   */
  export type UserSettingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * Filter, which UserSettings to fetch.
     */
    where: UserSettingsWhereUniqueInput
  }

  /**
   * UserSettings findFirst
   */
  export type UserSettingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * Filter, which UserSettings to fetch.
     */
    where?: UserSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSettings to fetch.
     */
    orderBy?: UserSettingsOrderByWithRelationInput | UserSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSettings.
     */
    cursor?: UserSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSettings.
     */
    distinct?: UserSettingsScalarFieldEnum | UserSettingsScalarFieldEnum[]
  }

  /**
   * UserSettings findFirstOrThrow
   */
  export type UserSettingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * Filter, which UserSettings to fetch.
     */
    where?: UserSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSettings to fetch.
     */
    orderBy?: UserSettingsOrderByWithRelationInput | UserSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSettings.
     */
    cursor?: UserSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSettings.
     */
    distinct?: UserSettingsScalarFieldEnum | UserSettingsScalarFieldEnum[]
  }

  /**
   * UserSettings findMany
   */
  export type UserSettingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * Filter, which UserSettings to fetch.
     */
    where?: UserSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSettings to fetch.
     */
    orderBy?: UserSettingsOrderByWithRelationInput | UserSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserSettings.
     */
    cursor?: UserSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSettings.
     */
    skip?: number
    distinct?: UserSettingsScalarFieldEnum | UserSettingsScalarFieldEnum[]
  }

  /**
   * UserSettings create
   */
  export type UserSettingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * The data needed to create a UserSettings.
     */
    data: XOR<UserSettingsCreateInput, UserSettingsUncheckedCreateInput>
  }

  /**
   * UserSettings createMany
   */
  export type UserSettingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserSettings.
     */
    data: UserSettingsCreateManyInput | UserSettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserSettings update
   */
  export type UserSettingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * The data needed to update a UserSettings.
     */
    data: XOR<UserSettingsUpdateInput, UserSettingsUncheckedUpdateInput>
    /**
     * Choose, which UserSettings to update.
     */
    where: UserSettingsWhereUniqueInput
  }

  /**
   * UserSettings updateMany
   */
  export type UserSettingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserSettings.
     */
    data: XOR<UserSettingsUpdateManyMutationInput, UserSettingsUncheckedUpdateManyInput>
    /**
     * Filter which UserSettings to update
     */
    where?: UserSettingsWhereInput
    /**
     * Limit how many UserSettings to update.
     */
    limit?: number
  }

  /**
   * UserSettings upsert
   */
  export type UserSettingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * The filter to search for the UserSettings to update in case it exists.
     */
    where: UserSettingsWhereUniqueInput
    /**
     * In case the UserSettings found by the `where` argument doesn't exist, create a new UserSettings with this data.
     */
    create: XOR<UserSettingsCreateInput, UserSettingsUncheckedCreateInput>
    /**
     * In case the UserSettings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserSettingsUpdateInput, UserSettingsUncheckedUpdateInput>
  }

  /**
   * UserSettings delete
   */
  export type UserSettingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * Filter which UserSettings to delete.
     */
    where: UserSettingsWhereUniqueInput
  }

  /**
   * UserSettings deleteMany
   */
  export type UserSettingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSettings to delete
     */
    where?: UserSettingsWhereInput
    /**
     * Limit how many UserSettings to delete.
     */
    limit?: number
  }

  /**
   * UserSettings without action
   */
  export type UserSettingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    updatedAt: Date
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    todos?: boolean | Category$todosArgs<ExtArgs>
    habits?: boolean | Category$habitsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>



  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    todos?: boolean | Category$todosArgs<ExtArgs>
    habits?: boolean | Category$habitsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      todos: Prisma.$TodoPayload<ExtArgs>[]
      habits: Prisma.$HabitPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    todos<T extends Category$todosArgs<ExtArgs> = {}>(args?: Subset<T, Category$todosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TodoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    habits<T extends Category$habitsArgs<ExtArgs> = {}>(args?: Subset<T, Category$habitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'Int'>
    readonly name: FieldRef<"Category", 'String'>
    readonly createdAt: FieldRef<"Category", 'DateTime'>
    readonly updatedAt: FieldRef<"Category", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.todos
   */
  export type Category$todosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Todo
     */
    select?: TodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Todo
     */
    omit?: TodoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoInclude<ExtArgs> | null
    where?: TodoWhereInput
    orderBy?: TodoOrderByWithRelationInput | TodoOrderByWithRelationInput[]
    cursor?: TodoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TodoScalarFieldEnum | TodoScalarFieldEnum[]
  }

  /**
   * Category.habits
   */
  export type Category$habitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    where?: HabitWhereInput
    orderBy?: HabitOrderByWithRelationInput | HabitOrderByWithRelationInput[]
    cursor?: HabitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HabitScalarFieldEnum | HabitScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Todo
   */

  export type AggregateTodo = {
    _count: TodoCountAggregateOutputType | null
    _avg: TodoAvgAggregateOutputType | null
    _sum: TodoSumAggregateOutputType | null
    _min: TodoMinAggregateOutputType | null
    _max: TodoMaxAggregateOutputType | null
  }

  export type TodoAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    categoryId: number | null
    priority: number | null
    parentId: number | null
  }

  export type TodoSumAggregateOutputType = {
    id: number | null
    userId: number | null
    categoryId: number | null
    priority: number | null
    parentId: number | null
  }

  export type TodoMinAggregateOutputType = {
    id: number | null
    userId: number | null
    categoryId: number | null
    title: string | null
    dueDate: Date | null
    description: string | null
    priority: number | null
    parentId: number | null
    completed: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TodoMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    categoryId: number | null
    title: string | null
    dueDate: Date | null
    description: string | null
    priority: number | null
    parentId: number | null
    completed: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TodoCountAggregateOutputType = {
    id: number
    userId: number
    categoryId: number
    title: number
    dueDate: number
    description: number
    priority: number
    parentId: number
    completed: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TodoAvgAggregateInputType = {
    id?: true
    userId?: true
    categoryId?: true
    priority?: true
    parentId?: true
  }

  export type TodoSumAggregateInputType = {
    id?: true
    userId?: true
    categoryId?: true
    priority?: true
    parentId?: true
  }

  export type TodoMinAggregateInputType = {
    id?: true
    userId?: true
    categoryId?: true
    title?: true
    dueDate?: true
    description?: true
    priority?: true
    parentId?: true
    completed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TodoMaxAggregateInputType = {
    id?: true
    userId?: true
    categoryId?: true
    title?: true
    dueDate?: true
    description?: true
    priority?: true
    parentId?: true
    completed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TodoCountAggregateInputType = {
    id?: true
    userId?: true
    categoryId?: true
    title?: true
    dueDate?: true
    description?: true
    priority?: true
    parentId?: true
    completed?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TodoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Todo to aggregate.
     */
    where?: TodoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Todos to fetch.
     */
    orderBy?: TodoOrderByWithRelationInput | TodoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TodoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Todos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Todos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Todos
    **/
    _count?: true | TodoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TodoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TodoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TodoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TodoMaxAggregateInputType
  }

  export type GetTodoAggregateType<T extends TodoAggregateArgs> = {
        [P in keyof T & keyof AggregateTodo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTodo[P]>
      : GetScalarType<T[P], AggregateTodo[P]>
  }




  export type TodoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TodoWhereInput
    orderBy?: TodoOrderByWithAggregationInput | TodoOrderByWithAggregationInput[]
    by: TodoScalarFieldEnum[] | TodoScalarFieldEnum
    having?: TodoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TodoCountAggregateInputType | true
    _avg?: TodoAvgAggregateInputType
    _sum?: TodoSumAggregateInputType
    _min?: TodoMinAggregateInputType
    _max?: TodoMaxAggregateInputType
  }

  export type TodoGroupByOutputType = {
    id: number
    userId: number
    categoryId: number | null
    title: string
    dueDate: Date | null
    description: string | null
    priority: number | null
    parentId: number | null
    completed: boolean
    createdAt: Date
    updatedAt: Date
    _count: TodoCountAggregateOutputType | null
    _avg: TodoAvgAggregateOutputType | null
    _sum: TodoSumAggregateOutputType | null
    _min: TodoMinAggregateOutputType | null
    _max: TodoMaxAggregateOutputType | null
  }

  type GetTodoGroupByPayload<T extends TodoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TodoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TodoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TodoGroupByOutputType[P]>
            : GetScalarType<T[P], TodoGroupByOutputType[P]>
        }
      >
    >


  export type TodoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    categoryId?: boolean
    title?: boolean
    dueDate?: boolean
    description?: boolean
    priority?: boolean
    parentId?: boolean
    completed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | Todo$categoryArgs<ExtArgs>
    parent?: boolean | Todo$parentArgs<ExtArgs>
    subtasks?: boolean | Todo$subtasksArgs<ExtArgs>
    dailyPlanItem?: boolean | Todo$dailyPlanItemArgs<ExtArgs>
    _count?: boolean | TodoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["todo"]>



  export type TodoSelectScalar = {
    id?: boolean
    userId?: boolean
    categoryId?: boolean
    title?: boolean
    dueDate?: boolean
    description?: boolean
    priority?: boolean
    parentId?: boolean
    completed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TodoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "categoryId" | "title" | "dueDate" | "description" | "priority" | "parentId" | "completed" | "createdAt" | "updatedAt", ExtArgs["result"]["todo"]>
  export type TodoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | Todo$categoryArgs<ExtArgs>
    parent?: boolean | Todo$parentArgs<ExtArgs>
    subtasks?: boolean | Todo$subtasksArgs<ExtArgs>
    dailyPlanItem?: boolean | Todo$dailyPlanItemArgs<ExtArgs>
    _count?: boolean | TodoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TodoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Todo"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      category: Prisma.$CategoryPayload<ExtArgs> | null
      parent: Prisma.$TodoPayload<ExtArgs> | null
      subtasks: Prisma.$TodoPayload<ExtArgs>[]
      dailyPlanItem: Prisma.$DailyPlanItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      categoryId: number | null
      title: string
      dueDate: Date | null
      description: string | null
      priority: number | null
      parentId: number | null
      completed: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["todo"]>
    composites: {}
  }

  type TodoGetPayload<S extends boolean | null | undefined | TodoDefaultArgs> = $Result.GetResult<Prisma.$TodoPayload, S>

  type TodoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TodoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TodoCountAggregateInputType | true
    }

  export interface TodoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Todo'], meta: { name: 'Todo' } }
    /**
     * Find zero or one Todo that matches the filter.
     * @param {TodoFindUniqueArgs} args - Arguments to find a Todo
     * @example
     * // Get one Todo
     * const todo = await prisma.todo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TodoFindUniqueArgs>(args: SelectSubset<T, TodoFindUniqueArgs<ExtArgs>>): Prisma__TodoClient<$Result.GetResult<Prisma.$TodoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Todo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TodoFindUniqueOrThrowArgs} args - Arguments to find a Todo
     * @example
     * // Get one Todo
     * const todo = await prisma.todo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TodoFindUniqueOrThrowArgs>(args: SelectSubset<T, TodoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TodoClient<$Result.GetResult<Prisma.$TodoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Todo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodoFindFirstArgs} args - Arguments to find a Todo
     * @example
     * // Get one Todo
     * const todo = await prisma.todo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TodoFindFirstArgs>(args?: SelectSubset<T, TodoFindFirstArgs<ExtArgs>>): Prisma__TodoClient<$Result.GetResult<Prisma.$TodoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Todo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodoFindFirstOrThrowArgs} args - Arguments to find a Todo
     * @example
     * // Get one Todo
     * const todo = await prisma.todo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TodoFindFirstOrThrowArgs>(args?: SelectSubset<T, TodoFindFirstOrThrowArgs<ExtArgs>>): Prisma__TodoClient<$Result.GetResult<Prisma.$TodoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Todos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Todos
     * const todos = await prisma.todo.findMany()
     * 
     * // Get first 10 Todos
     * const todos = await prisma.todo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const todoWithIdOnly = await prisma.todo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TodoFindManyArgs>(args?: SelectSubset<T, TodoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TodoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Todo.
     * @param {TodoCreateArgs} args - Arguments to create a Todo.
     * @example
     * // Create one Todo
     * const Todo = await prisma.todo.create({
     *   data: {
     *     // ... data to create a Todo
     *   }
     * })
     * 
     */
    create<T extends TodoCreateArgs>(args: SelectSubset<T, TodoCreateArgs<ExtArgs>>): Prisma__TodoClient<$Result.GetResult<Prisma.$TodoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Todos.
     * @param {TodoCreateManyArgs} args - Arguments to create many Todos.
     * @example
     * // Create many Todos
     * const todo = await prisma.todo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TodoCreateManyArgs>(args?: SelectSubset<T, TodoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Todo.
     * @param {TodoDeleteArgs} args - Arguments to delete one Todo.
     * @example
     * // Delete one Todo
     * const Todo = await prisma.todo.delete({
     *   where: {
     *     // ... filter to delete one Todo
     *   }
     * })
     * 
     */
    delete<T extends TodoDeleteArgs>(args: SelectSubset<T, TodoDeleteArgs<ExtArgs>>): Prisma__TodoClient<$Result.GetResult<Prisma.$TodoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Todo.
     * @param {TodoUpdateArgs} args - Arguments to update one Todo.
     * @example
     * // Update one Todo
     * const todo = await prisma.todo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TodoUpdateArgs>(args: SelectSubset<T, TodoUpdateArgs<ExtArgs>>): Prisma__TodoClient<$Result.GetResult<Prisma.$TodoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Todos.
     * @param {TodoDeleteManyArgs} args - Arguments to filter Todos to delete.
     * @example
     * // Delete a few Todos
     * const { count } = await prisma.todo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TodoDeleteManyArgs>(args?: SelectSubset<T, TodoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Todos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Todos
     * const todo = await prisma.todo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TodoUpdateManyArgs>(args: SelectSubset<T, TodoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Todo.
     * @param {TodoUpsertArgs} args - Arguments to update or create a Todo.
     * @example
     * // Update or create a Todo
     * const todo = await prisma.todo.upsert({
     *   create: {
     *     // ... data to create a Todo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Todo we want to update
     *   }
     * })
     */
    upsert<T extends TodoUpsertArgs>(args: SelectSubset<T, TodoUpsertArgs<ExtArgs>>): Prisma__TodoClient<$Result.GetResult<Prisma.$TodoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Todos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodoCountArgs} args - Arguments to filter Todos to count.
     * @example
     * // Count the number of Todos
     * const count = await prisma.todo.count({
     *   where: {
     *     // ... the filter for the Todos we want to count
     *   }
     * })
    **/
    count<T extends TodoCountArgs>(
      args?: Subset<T, TodoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TodoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Todo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TodoAggregateArgs>(args: Subset<T, TodoAggregateArgs>): Prisma.PrismaPromise<GetTodoAggregateType<T>>

    /**
     * Group by Todo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TodoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TodoGroupByArgs['orderBy'] }
        : { orderBy?: TodoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TodoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTodoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Todo model
   */
  readonly fields: TodoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Todo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TodoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    category<T extends Todo$categoryArgs<ExtArgs> = {}>(args?: Subset<T, Todo$categoryArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    parent<T extends Todo$parentArgs<ExtArgs> = {}>(args?: Subset<T, Todo$parentArgs<ExtArgs>>): Prisma__TodoClient<$Result.GetResult<Prisma.$TodoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    subtasks<T extends Todo$subtasksArgs<ExtArgs> = {}>(args?: Subset<T, Todo$subtasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TodoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    dailyPlanItem<T extends Todo$dailyPlanItemArgs<ExtArgs> = {}>(args?: Subset<T, Todo$dailyPlanItemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyPlanItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Todo model
   */
  interface TodoFieldRefs {
    readonly id: FieldRef<"Todo", 'Int'>
    readonly userId: FieldRef<"Todo", 'Int'>
    readonly categoryId: FieldRef<"Todo", 'Int'>
    readonly title: FieldRef<"Todo", 'String'>
    readonly dueDate: FieldRef<"Todo", 'DateTime'>
    readonly description: FieldRef<"Todo", 'String'>
    readonly priority: FieldRef<"Todo", 'Int'>
    readonly parentId: FieldRef<"Todo", 'Int'>
    readonly completed: FieldRef<"Todo", 'Boolean'>
    readonly createdAt: FieldRef<"Todo", 'DateTime'>
    readonly updatedAt: FieldRef<"Todo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Todo findUnique
   */
  export type TodoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Todo
     */
    select?: TodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Todo
     */
    omit?: TodoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoInclude<ExtArgs> | null
    /**
     * Filter, which Todo to fetch.
     */
    where: TodoWhereUniqueInput
  }

  /**
   * Todo findUniqueOrThrow
   */
  export type TodoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Todo
     */
    select?: TodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Todo
     */
    omit?: TodoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoInclude<ExtArgs> | null
    /**
     * Filter, which Todo to fetch.
     */
    where: TodoWhereUniqueInput
  }

  /**
   * Todo findFirst
   */
  export type TodoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Todo
     */
    select?: TodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Todo
     */
    omit?: TodoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoInclude<ExtArgs> | null
    /**
     * Filter, which Todo to fetch.
     */
    where?: TodoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Todos to fetch.
     */
    orderBy?: TodoOrderByWithRelationInput | TodoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Todos.
     */
    cursor?: TodoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Todos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Todos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Todos.
     */
    distinct?: TodoScalarFieldEnum | TodoScalarFieldEnum[]
  }

  /**
   * Todo findFirstOrThrow
   */
  export type TodoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Todo
     */
    select?: TodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Todo
     */
    omit?: TodoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoInclude<ExtArgs> | null
    /**
     * Filter, which Todo to fetch.
     */
    where?: TodoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Todos to fetch.
     */
    orderBy?: TodoOrderByWithRelationInput | TodoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Todos.
     */
    cursor?: TodoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Todos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Todos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Todos.
     */
    distinct?: TodoScalarFieldEnum | TodoScalarFieldEnum[]
  }

  /**
   * Todo findMany
   */
  export type TodoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Todo
     */
    select?: TodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Todo
     */
    omit?: TodoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoInclude<ExtArgs> | null
    /**
     * Filter, which Todos to fetch.
     */
    where?: TodoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Todos to fetch.
     */
    orderBy?: TodoOrderByWithRelationInput | TodoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Todos.
     */
    cursor?: TodoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Todos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Todos.
     */
    skip?: number
    distinct?: TodoScalarFieldEnum | TodoScalarFieldEnum[]
  }

  /**
   * Todo create
   */
  export type TodoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Todo
     */
    select?: TodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Todo
     */
    omit?: TodoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoInclude<ExtArgs> | null
    /**
     * The data needed to create a Todo.
     */
    data: XOR<TodoCreateInput, TodoUncheckedCreateInput>
  }

  /**
   * Todo createMany
   */
  export type TodoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Todos.
     */
    data: TodoCreateManyInput | TodoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Todo update
   */
  export type TodoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Todo
     */
    select?: TodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Todo
     */
    omit?: TodoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoInclude<ExtArgs> | null
    /**
     * The data needed to update a Todo.
     */
    data: XOR<TodoUpdateInput, TodoUncheckedUpdateInput>
    /**
     * Choose, which Todo to update.
     */
    where: TodoWhereUniqueInput
  }

  /**
   * Todo updateMany
   */
  export type TodoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Todos.
     */
    data: XOR<TodoUpdateManyMutationInput, TodoUncheckedUpdateManyInput>
    /**
     * Filter which Todos to update
     */
    where?: TodoWhereInput
    /**
     * Limit how many Todos to update.
     */
    limit?: number
  }

  /**
   * Todo upsert
   */
  export type TodoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Todo
     */
    select?: TodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Todo
     */
    omit?: TodoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoInclude<ExtArgs> | null
    /**
     * The filter to search for the Todo to update in case it exists.
     */
    where: TodoWhereUniqueInput
    /**
     * In case the Todo found by the `where` argument doesn't exist, create a new Todo with this data.
     */
    create: XOR<TodoCreateInput, TodoUncheckedCreateInput>
    /**
     * In case the Todo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TodoUpdateInput, TodoUncheckedUpdateInput>
  }

  /**
   * Todo delete
   */
  export type TodoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Todo
     */
    select?: TodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Todo
     */
    omit?: TodoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoInclude<ExtArgs> | null
    /**
     * Filter which Todo to delete.
     */
    where: TodoWhereUniqueInput
  }

  /**
   * Todo deleteMany
   */
  export type TodoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Todos to delete
     */
    where?: TodoWhereInput
    /**
     * Limit how many Todos to delete.
     */
    limit?: number
  }

  /**
   * Todo.category
   */
  export type Todo$categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
  }

  /**
   * Todo.parent
   */
  export type Todo$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Todo
     */
    select?: TodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Todo
     */
    omit?: TodoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoInclude<ExtArgs> | null
    where?: TodoWhereInput
  }

  /**
   * Todo.subtasks
   */
  export type Todo$subtasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Todo
     */
    select?: TodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Todo
     */
    omit?: TodoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoInclude<ExtArgs> | null
    where?: TodoWhereInput
    orderBy?: TodoOrderByWithRelationInput | TodoOrderByWithRelationInput[]
    cursor?: TodoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TodoScalarFieldEnum | TodoScalarFieldEnum[]
  }

  /**
   * Todo.dailyPlanItem
   */
  export type Todo$dailyPlanItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyPlanItem
     */
    select?: DailyPlanItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyPlanItem
     */
    omit?: DailyPlanItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyPlanItemInclude<ExtArgs> | null
    where?: DailyPlanItemWhereInput
    orderBy?: DailyPlanItemOrderByWithRelationInput | DailyPlanItemOrderByWithRelationInput[]
    cursor?: DailyPlanItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DailyPlanItemScalarFieldEnum | DailyPlanItemScalarFieldEnum[]
  }

  /**
   * Todo without action
   */
  export type TodoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Todo
     */
    select?: TodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Todo
     */
    omit?: TodoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoInclude<ExtArgs> | null
  }


  /**
   * Model Habit
   */

  export type AggregateHabit = {
    _count: HabitCountAggregateOutputType | null
    _avg: HabitAvgAggregateOutputType | null
    _sum: HabitSumAggregateOutputType | null
    _min: HabitMinAggregateOutputType | null
    _max: HabitMaxAggregateOutputType | null
  }

  export type HabitAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    categoryId: number | null
  }

  export type HabitSumAggregateOutputType = {
    id: number | null
    userId: number | null
    categoryId: number | null
  }

  export type HabitMinAggregateOutputType = {
    id: number | null
    userId: number | null
    categoryId: number | null
    title: string | null
    description: string | null
    autoInclude: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HabitMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    categoryId: number | null
    title: string | null
    description: string | null
    autoInclude: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HabitCountAggregateOutputType = {
    id: number
    userId: number
    categoryId: number
    title: number
    description: number
    autoInclude: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type HabitAvgAggregateInputType = {
    id?: true
    userId?: true
    categoryId?: true
  }

  export type HabitSumAggregateInputType = {
    id?: true
    userId?: true
    categoryId?: true
  }

  export type HabitMinAggregateInputType = {
    id?: true
    userId?: true
    categoryId?: true
    title?: true
    description?: true
    autoInclude?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HabitMaxAggregateInputType = {
    id?: true
    userId?: true
    categoryId?: true
    title?: true
    description?: true
    autoInclude?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HabitCountAggregateInputType = {
    id?: true
    userId?: true
    categoryId?: true
    title?: true
    description?: true
    autoInclude?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type HabitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Habit to aggregate.
     */
    where?: HabitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Habits to fetch.
     */
    orderBy?: HabitOrderByWithRelationInput | HabitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HabitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Habits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Habits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Habits
    **/
    _count?: true | HabitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HabitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HabitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HabitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HabitMaxAggregateInputType
  }

  export type GetHabitAggregateType<T extends HabitAggregateArgs> = {
        [P in keyof T & keyof AggregateHabit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHabit[P]>
      : GetScalarType<T[P], AggregateHabit[P]>
  }




  export type HabitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HabitWhereInput
    orderBy?: HabitOrderByWithAggregationInput | HabitOrderByWithAggregationInput[]
    by: HabitScalarFieldEnum[] | HabitScalarFieldEnum
    having?: HabitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HabitCountAggregateInputType | true
    _avg?: HabitAvgAggregateInputType
    _sum?: HabitSumAggregateInputType
    _min?: HabitMinAggregateInputType
    _max?: HabitMaxAggregateInputType
  }

  export type HabitGroupByOutputType = {
    id: number
    userId: number
    categoryId: number | null
    title: string
    description: string | null
    autoInclude: boolean
    createdAt: Date
    updatedAt: Date
    _count: HabitCountAggregateOutputType | null
    _avg: HabitAvgAggregateOutputType | null
    _sum: HabitSumAggregateOutputType | null
    _min: HabitMinAggregateOutputType | null
    _max: HabitMaxAggregateOutputType | null
  }

  type GetHabitGroupByPayload<T extends HabitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HabitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HabitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HabitGroupByOutputType[P]>
            : GetScalarType<T[P], HabitGroupByOutputType[P]>
        }
      >
    >


  export type HabitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    categoryId?: boolean
    title?: boolean
    description?: boolean
    autoInclude?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | Habit$categoryArgs<ExtArgs>
    dailyPlanItem?: boolean | Habit$dailyPlanItemArgs<ExtArgs>
    _count?: boolean | HabitCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["habit"]>



  export type HabitSelectScalar = {
    id?: boolean
    userId?: boolean
    categoryId?: boolean
    title?: boolean
    description?: boolean
    autoInclude?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type HabitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "categoryId" | "title" | "description" | "autoInclude" | "createdAt" | "updatedAt", ExtArgs["result"]["habit"]>
  export type HabitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | Habit$categoryArgs<ExtArgs>
    dailyPlanItem?: boolean | Habit$dailyPlanItemArgs<ExtArgs>
    _count?: boolean | HabitCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $HabitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Habit"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      category: Prisma.$CategoryPayload<ExtArgs> | null
      dailyPlanItem: Prisma.$DailyPlanItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      categoryId: number | null
      title: string
      description: string | null
      autoInclude: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["habit"]>
    composites: {}
  }

  type HabitGetPayload<S extends boolean | null | undefined | HabitDefaultArgs> = $Result.GetResult<Prisma.$HabitPayload, S>

  type HabitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HabitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HabitCountAggregateInputType | true
    }

  export interface HabitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Habit'], meta: { name: 'Habit' } }
    /**
     * Find zero or one Habit that matches the filter.
     * @param {HabitFindUniqueArgs} args - Arguments to find a Habit
     * @example
     * // Get one Habit
     * const habit = await prisma.habit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HabitFindUniqueArgs>(args: SelectSubset<T, HabitFindUniqueArgs<ExtArgs>>): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Habit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HabitFindUniqueOrThrowArgs} args - Arguments to find a Habit
     * @example
     * // Get one Habit
     * const habit = await prisma.habit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HabitFindUniqueOrThrowArgs>(args: SelectSubset<T, HabitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Habit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitFindFirstArgs} args - Arguments to find a Habit
     * @example
     * // Get one Habit
     * const habit = await prisma.habit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HabitFindFirstArgs>(args?: SelectSubset<T, HabitFindFirstArgs<ExtArgs>>): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Habit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitFindFirstOrThrowArgs} args - Arguments to find a Habit
     * @example
     * // Get one Habit
     * const habit = await prisma.habit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HabitFindFirstOrThrowArgs>(args?: SelectSubset<T, HabitFindFirstOrThrowArgs<ExtArgs>>): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Habits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Habits
     * const habits = await prisma.habit.findMany()
     * 
     * // Get first 10 Habits
     * const habits = await prisma.habit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const habitWithIdOnly = await prisma.habit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HabitFindManyArgs>(args?: SelectSubset<T, HabitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Habit.
     * @param {HabitCreateArgs} args - Arguments to create a Habit.
     * @example
     * // Create one Habit
     * const Habit = await prisma.habit.create({
     *   data: {
     *     // ... data to create a Habit
     *   }
     * })
     * 
     */
    create<T extends HabitCreateArgs>(args: SelectSubset<T, HabitCreateArgs<ExtArgs>>): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Habits.
     * @param {HabitCreateManyArgs} args - Arguments to create many Habits.
     * @example
     * // Create many Habits
     * const habit = await prisma.habit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HabitCreateManyArgs>(args?: SelectSubset<T, HabitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Habit.
     * @param {HabitDeleteArgs} args - Arguments to delete one Habit.
     * @example
     * // Delete one Habit
     * const Habit = await prisma.habit.delete({
     *   where: {
     *     // ... filter to delete one Habit
     *   }
     * })
     * 
     */
    delete<T extends HabitDeleteArgs>(args: SelectSubset<T, HabitDeleteArgs<ExtArgs>>): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Habit.
     * @param {HabitUpdateArgs} args - Arguments to update one Habit.
     * @example
     * // Update one Habit
     * const habit = await prisma.habit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HabitUpdateArgs>(args: SelectSubset<T, HabitUpdateArgs<ExtArgs>>): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Habits.
     * @param {HabitDeleteManyArgs} args - Arguments to filter Habits to delete.
     * @example
     * // Delete a few Habits
     * const { count } = await prisma.habit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HabitDeleteManyArgs>(args?: SelectSubset<T, HabitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Habits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Habits
     * const habit = await prisma.habit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HabitUpdateManyArgs>(args: SelectSubset<T, HabitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Habit.
     * @param {HabitUpsertArgs} args - Arguments to update or create a Habit.
     * @example
     * // Update or create a Habit
     * const habit = await prisma.habit.upsert({
     *   create: {
     *     // ... data to create a Habit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Habit we want to update
     *   }
     * })
     */
    upsert<T extends HabitUpsertArgs>(args: SelectSubset<T, HabitUpsertArgs<ExtArgs>>): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Habits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitCountArgs} args - Arguments to filter Habits to count.
     * @example
     * // Count the number of Habits
     * const count = await prisma.habit.count({
     *   where: {
     *     // ... the filter for the Habits we want to count
     *   }
     * })
    **/
    count<T extends HabitCountArgs>(
      args?: Subset<T, HabitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HabitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Habit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HabitAggregateArgs>(args: Subset<T, HabitAggregateArgs>): Prisma.PrismaPromise<GetHabitAggregateType<T>>

    /**
     * Group by Habit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HabitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HabitGroupByArgs['orderBy'] }
        : { orderBy?: HabitGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HabitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHabitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Habit model
   */
  readonly fields: HabitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Habit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HabitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    category<T extends Habit$categoryArgs<ExtArgs> = {}>(args?: Subset<T, Habit$categoryArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    dailyPlanItem<T extends Habit$dailyPlanItemArgs<ExtArgs> = {}>(args?: Subset<T, Habit$dailyPlanItemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyPlanItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Habit model
   */
  interface HabitFieldRefs {
    readonly id: FieldRef<"Habit", 'Int'>
    readonly userId: FieldRef<"Habit", 'Int'>
    readonly categoryId: FieldRef<"Habit", 'Int'>
    readonly title: FieldRef<"Habit", 'String'>
    readonly description: FieldRef<"Habit", 'String'>
    readonly autoInclude: FieldRef<"Habit", 'Boolean'>
    readonly createdAt: FieldRef<"Habit", 'DateTime'>
    readonly updatedAt: FieldRef<"Habit", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Habit findUnique
   */
  export type HabitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    /**
     * Filter, which Habit to fetch.
     */
    where: HabitWhereUniqueInput
  }

  /**
   * Habit findUniqueOrThrow
   */
  export type HabitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    /**
     * Filter, which Habit to fetch.
     */
    where: HabitWhereUniqueInput
  }

  /**
   * Habit findFirst
   */
  export type HabitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    /**
     * Filter, which Habit to fetch.
     */
    where?: HabitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Habits to fetch.
     */
    orderBy?: HabitOrderByWithRelationInput | HabitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Habits.
     */
    cursor?: HabitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Habits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Habits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Habits.
     */
    distinct?: HabitScalarFieldEnum | HabitScalarFieldEnum[]
  }

  /**
   * Habit findFirstOrThrow
   */
  export type HabitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    /**
     * Filter, which Habit to fetch.
     */
    where?: HabitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Habits to fetch.
     */
    orderBy?: HabitOrderByWithRelationInput | HabitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Habits.
     */
    cursor?: HabitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Habits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Habits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Habits.
     */
    distinct?: HabitScalarFieldEnum | HabitScalarFieldEnum[]
  }

  /**
   * Habit findMany
   */
  export type HabitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    /**
     * Filter, which Habits to fetch.
     */
    where?: HabitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Habits to fetch.
     */
    orderBy?: HabitOrderByWithRelationInput | HabitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Habits.
     */
    cursor?: HabitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Habits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Habits.
     */
    skip?: number
    distinct?: HabitScalarFieldEnum | HabitScalarFieldEnum[]
  }

  /**
   * Habit create
   */
  export type HabitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    /**
     * The data needed to create a Habit.
     */
    data: XOR<HabitCreateInput, HabitUncheckedCreateInput>
  }

  /**
   * Habit createMany
   */
  export type HabitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Habits.
     */
    data: HabitCreateManyInput | HabitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Habit update
   */
  export type HabitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    /**
     * The data needed to update a Habit.
     */
    data: XOR<HabitUpdateInput, HabitUncheckedUpdateInput>
    /**
     * Choose, which Habit to update.
     */
    where: HabitWhereUniqueInput
  }

  /**
   * Habit updateMany
   */
  export type HabitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Habits.
     */
    data: XOR<HabitUpdateManyMutationInput, HabitUncheckedUpdateManyInput>
    /**
     * Filter which Habits to update
     */
    where?: HabitWhereInput
    /**
     * Limit how many Habits to update.
     */
    limit?: number
  }

  /**
   * Habit upsert
   */
  export type HabitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    /**
     * The filter to search for the Habit to update in case it exists.
     */
    where: HabitWhereUniqueInput
    /**
     * In case the Habit found by the `where` argument doesn't exist, create a new Habit with this data.
     */
    create: XOR<HabitCreateInput, HabitUncheckedCreateInput>
    /**
     * In case the Habit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HabitUpdateInput, HabitUncheckedUpdateInput>
  }

  /**
   * Habit delete
   */
  export type HabitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    /**
     * Filter which Habit to delete.
     */
    where: HabitWhereUniqueInput
  }

  /**
   * Habit deleteMany
   */
  export type HabitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Habits to delete
     */
    where?: HabitWhereInput
    /**
     * Limit how many Habits to delete.
     */
    limit?: number
  }

  /**
   * Habit.category
   */
  export type Habit$categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
  }

  /**
   * Habit.dailyPlanItem
   */
  export type Habit$dailyPlanItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyPlanItem
     */
    select?: DailyPlanItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyPlanItem
     */
    omit?: DailyPlanItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyPlanItemInclude<ExtArgs> | null
    where?: DailyPlanItemWhereInput
    orderBy?: DailyPlanItemOrderByWithRelationInput | DailyPlanItemOrderByWithRelationInput[]
    cursor?: DailyPlanItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DailyPlanItemScalarFieldEnum | DailyPlanItemScalarFieldEnum[]
  }

  /**
   * Habit without action
   */
  export type HabitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
  }


  /**
   * Model DailyPlan
   */

  export type AggregateDailyPlan = {
    _count: DailyPlanCountAggregateOutputType | null
    _avg: DailyPlanAvgAggregateOutputType | null
    _sum: DailyPlanSumAggregateOutputType | null
    _min: DailyPlanMinAggregateOutputType | null
    _max: DailyPlanMaxAggregateOutputType | null
  }

  export type DailyPlanAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type DailyPlanSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type DailyPlanMinAggregateOutputType = {
    id: number | null
    userId: number | null
    date: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DailyPlanMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    date: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DailyPlanCountAggregateOutputType = {
    id: number
    userId: number
    date: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DailyPlanAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type DailyPlanSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type DailyPlanMinAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DailyPlanMaxAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DailyPlanCountAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DailyPlanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyPlan to aggregate.
     */
    where?: DailyPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyPlans to fetch.
     */
    orderBy?: DailyPlanOrderByWithRelationInput | DailyPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DailyPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DailyPlans
    **/
    _count?: true | DailyPlanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DailyPlanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DailyPlanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DailyPlanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DailyPlanMaxAggregateInputType
  }

  export type GetDailyPlanAggregateType<T extends DailyPlanAggregateArgs> = {
        [P in keyof T & keyof AggregateDailyPlan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDailyPlan[P]>
      : GetScalarType<T[P], AggregateDailyPlan[P]>
  }




  export type DailyPlanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyPlanWhereInput
    orderBy?: DailyPlanOrderByWithAggregationInput | DailyPlanOrderByWithAggregationInput[]
    by: DailyPlanScalarFieldEnum[] | DailyPlanScalarFieldEnum
    having?: DailyPlanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DailyPlanCountAggregateInputType | true
    _avg?: DailyPlanAvgAggregateInputType
    _sum?: DailyPlanSumAggregateInputType
    _min?: DailyPlanMinAggregateInputType
    _max?: DailyPlanMaxAggregateInputType
  }

  export type DailyPlanGroupByOutputType = {
    id: number
    userId: number
    date: Date
    createdAt: Date
    updatedAt: Date
    _count: DailyPlanCountAggregateOutputType | null
    _avg: DailyPlanAvgAggregateOutputType | null
    _sum: DailyPlanSumAggregateOutputType | null
    _min: DailyPlanMinAggregateOutputType | null
    _max: DailyPlanMaxAggregateOutputType | null
  }

  type GetDailyPlanGroupByPayload<T extends DailyPlanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DailyPlanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DailyPlanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DailyPlanGroupByOutputType[P]>
            : GetScalarType<T[P], DailyPlanGroupByOutputType[P]>
        }
      >
    >


  export type DailyPlanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    items?: boolean | DailyPlan$itemsArgs<ExtArgs>
    _count?: boolean | DailyPlanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyPlan"]>



  export type DailyPlanSelectScalar = {
    id?: boolean
    userId?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DailyPlanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "date" | "createdAt" | "updatedAt", ExtArgs["result"]["dailyPlan"]>
  export type DailyPlanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    items?: boolean | DailyPlan$itemsArgs<ExtArgs>
    _count?: boolean | DailyPlanCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $DailyPlanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DailyPlan"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      items: Prisma.$DailyPlanItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      date: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["dailyPlan"]>
    composites: {}
  }

  type DailyPlanGetPayload<S extends boolean | null | undefined | DailyPlanDefaultArgs> = $Result.GetResult<Prisma.$DailyPlanPayload, S>

  type DailyPlanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DailyPlanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DailyPlanCountAggregateInputType | true
    }

  export interface DailyPlanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DailyPlan'], meta: { name: 'DailyPlan' } }
    /**
     * Find zero or one DailyPlan that matches the filter.
     * @param {DailyPlanFindUniqueArgs} args - Arguments to find a DailyPlan
     * @example
     * // Get one DailyPlan
     * const dailyPlan = await prisma.dailyPlan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DailyPlanFindUniqueArgs>(args: SelectSubset<T, DailyPlanFindUniqueArgs<ExtArgs>>): Prisma__DailyPlanClient<$Result.GetResult<Prisma.$DailyPlanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DailyPlan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DailyPlanFindUniqueOrThrowArgs} args - Arguments to find a DailyPlan
     * @example
     * // Get one DailyPlan
     * const dailyPlan = await prisma.dailyPlan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DailyPlanFindUniqueOrThrowArgs>(args: SelectSubset<T, DailyPlanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DailyPlanClient<$Result.GetResult<Prisma.$DailyPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyPlan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyPlanFindFirstArgs} args - Arguments to find a DailyPlan
     * @example
     * // Get one DailyPlan
     * const dailyPlan = await prisma.dailyPlan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DailyPlanFindFirstArgs>(args?: SelectSubset<T, DailyPlanFindFirstArgs<ExtArgs>>): Prisma__DailyPlanClient<$Result.GetResult<Prisma.$DailyPlanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyPlan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyPlanFindFirstOrThrowArgs} args - Arguments to find a DailyPlan
     * @example
     * // Get one DailyPlan
     * const dailyPlan = await prisma.dailyPlan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DailyPlanFindFirstOrThrowArgs>(args?: SelectSubset<T, DailyPlanFindFirstOrThrowArgs<ExtArgs>>): Prisma__DailyPlanClient<$Result.GetResult<Prisma.$DailyPlanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DailyPlans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyPlanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DailyPlans
     * const dailyPlans = await prisma.dailyPlan.findMany()
     * 
     * // Get first 10 DailyPlans
     * const dailyPlans = await prisma.dailyPlan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dailyPlanWithIdOnly = await prisma.dailyPlan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DailyPlanFindManyArgs>(args?: SelectSubset<T, DailyPlanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DailyPlan.
     * @param {DailyPlanCreateArgs} args - Arguments to create a DailyPlan.
     * @example
     * // Create one DailyPlan
     * const DailyPlan = await prisma.dailyPlan.create({
     *   data: {
     *     // ... data to create a DailyPlan
     *   }
     * })
     * 
     */
    create<T extends DailyPlanCreateArgs>(args: SelectSubset<T, DailyPlanCreateArgs<ExtArgs>>): Prisma__DailyPlanClient<$Result.GetResult<Prisma.$DailyPlanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DailyPlans.
     * @param {DailyPlanCreateManyArgs} args - Arguments to create many DailyPlans.
     * @example
     * // Create many DailyPlans
     * const dailyPlan = await prisma.dailyPlan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DailyPlanCreateManyArgs>(args?: SelectSubset<T, DailyPlanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DailyPlan.
     * @param {DailyPlanDeleteArgs} args - Arguments to delete one DailyPlan.
     * @example
     * // Delete one DailyPlan
     * const DailyPlan = await prisma.dailyPlan.delete({
     *   where: {
     *     // ... filter to delete one DailyPlan
     *   }
     * })
     * 
     */
    delete<T extends DailyPlanDeleteArgs>(args: SelectSubset<T, DailyPlanDeleteArgs<ExtArgs>>): Prisma__DailyPlanClient<$Result.GetResult<Prisma.$DailyPlanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DailyPlan.
     * @param {DailyPlanUpdateArgs} args - Arguments to update one DailyPlan.
     * @example
     * // Update one DailyPlan
     * const dailyPlan = await prisma.dailyPlan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DailyPlanUpdateArgs>(args: SelectSubset<T, DailyPlanUpdateArgs<ExtArgs>>): Prisma__DailyPlanClient<$Result.GetResult<Prisma.$DailyPlanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DailyPlans.
     * @param {DailyPlanDeleteManyArgs} args - Arguments to filter DailyPlans to delete.
     * @example
     * // Delete a few DailyPlans
     * const { count } = await prisma.dailyPlan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DailyPlanDeleteManyArgs>(args?: SelectSubset<T, DailyPlanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyPlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DailyPlans
     * const dailyPlan = await prisma.dailyPlan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DailyPlanUpdateManyArgs>(args: SelectSubset<T, DailyPlanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DailyPlan.
     * @param {DailyPlanUpsertArgs} args - Arguments to update or create a DailyPlan.
     * @example
     * // Update or create a DailyPlan
     * const dailyPlan = await prisma.dailyPlan.upsert({
     *   create: {
     *     // ... data to create a DailyPlan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DailyPlan we want to update
     *   }
     * })
     */
    upsert<T extends DailyPlanUpsertArgs>(args: SelectSubset<T, DailyPlanUpsertArgs<ExtArgs>>): Prisma__DailyPlanClient<$Result.GetResult<Prisma.$DailyPlanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DailyPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyPlanCountArgs} args - Arguments to filter DailyPlans to count.
     * @example
     * // Count the number of DailyPlans
     * const count = await prisma.dailyPlan.count({
     *   where: {
     *     // ... the filter for the DailyPlans we want to count
     *   }
     * })
    **/
    count<T extends DailyPlanCountArgs>(
      args?: Subset<T, DailyPlanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DailyPlanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DailyPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyPlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DailyPlanAggregateArgs>(args: Subset<T, DailyPlanAggregateArgs>): Prisma.PrismaPromise<GetDailyPlanAggregateType<T>>

    /**
     * Group by DailyPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyPlanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DailyPlanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DailyPlanGroupByArgs['orderBy'] }
        : { orderBy?: DailyPlanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DailyPlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDailyPlanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DailyPlan model
   */
  readonly fields: DailyPlanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DailyPlan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DailyPlanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    items<T extends DailyPlan$itemsArgs<ExtArgs> = {}>(args?: Subset<T, DailyPlan$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyPlanItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DailyPlan model
   */
  interface DailyPlanFieldRefs {
    readonly id: FieldRef<"DailyPlan", 'Int'>
    readonly userId: FieldRef<"DailyPlan", 'Int'>
    readonly date: FieldRef<"DailyPlan", 'DateTime'>
    readonly createdAt: FieldRef<"DailyPlan", 'DateTime'>
    readonly updatedAt: FieldRef<"DailyPlan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DailyPlan findUnique
   */
  export type DailyPlanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyPlan
     */
    select?: DailyPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyPlan
     */
    omit?: DailyPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyPlanInclude<ExtArgs> | null
    /**
     * Filter, which DailyPlan to fetch.
     */
    where: DailyPlanWhereUniqueInput
  }

  /**
   * DailyPlan findUniqueOrThrow
   */
  export type DailyPlanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyPlan
     */
    select?: DailyPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyPlan
     */
    omit?: DailyPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyPlanInclude<ExtArgs> | null
    /**
     * Filter, which DailyPlan to fetch.
     */
    where: DailyPlanWhereUniqueInput
  }

  /**
   * DailyPlan findFirst
   */
  export type DailyPlanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyPlan
     */
    select?: DailyPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyPlan
     */
    omit?: DailyPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyPlanInclude<ExtArgs> | null
    /**
     * Filter, which DailyPlan to fetch.
     */
    where?: DailyPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyPlans to fetch.
     */
    orderBy?: DailyPlanOrderByWithRelationInput | DailyPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyPlans.
     */
    cursor?: DailyPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyPlans.
     */
    distinct?: DailyPlanScalarFieldEnum | DailyPlanScalarFieldEnum[]
  }

  /**
   * DailyPlan findFirstOrThrow
   */
  export type DailyPlanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyPlan
     */
    select?: DailyPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyPlan
     */
    omit?: DailyPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyPlanInclude<ExtArgs> | null
    /**
     * Filter, which DailyPlan to fetch.
     */
    where?: DailyPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyPlans to fetch.
     */
    orderBy?: DailyPlanOrderByWithRelationInput | DailyPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyPlans.
     */
    cursor?: DailyPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyPlans.
     */
    distinct?: DailyPlanScalarFieldEnum | DailyPlanScalarFieldEnum[]
  }

  /**
   * DailyPlan findMany
   */
  export type DailyPlanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyPlan
     */
    select?: DailyPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyPlan
     */
    omit?: DailyPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyPlanInclude<ExtArgs> | null
    /**
     * Filter, which DailyPlans to fetch.
     */
    where?: DailyPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyPlans to fetch.
     */
    orderBy?: DailyPlanOrderByWithRelationInput | DailyPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DailyPlans.
     */
    cursor?: DailyPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyPlans.
     */
    skip?: number
    distinct?: DailyPlanScalarFieldEnum | DailyPlanScalarFieldEnum[]
  }

  /**
   * DailyPlan create
   */
  export type DailyPlanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyPlan
     */
    select?: DailyPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyPlan
     */
    omit?: DailyPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyPlanInclude<ExtArgs> | null
    /**
     * The data needed to create a DailyPlan.
     */
    data: XOR<DailyPlanCreateInput, DailyPlanUncheckedCreateInput>
  }

  /**
   * DailyPlan createMany
   */
  export type DailyPlanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DailyPlans.
     */
    data: DailyPlanCreateManyInput | DailyPlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DailyPlan update
   */
  export type DailyPlanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyPlan
     */
    select?: DailyPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyPlan
     */
    omit?: DailyPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyPlanInclude<ExtArgs> | null
    /**
     * The data needed to update a DailyPlan.
     */
    data: XOR<DailyPlanUpdateInput, DailyPlanUncheckedUpdateInput>
    /**
     * Choose, which DailyPlan to update.
     */
    where: DailyPlanWhereUniqueInput
  }

  /**
   * DailyPlan updateMany
   */
  export type DailyPlanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DailyPlans.
     */
    data: XOR<DailyPlanUpdateManyMutationInput, DailyPlanUncheckedUpdateManyInput>
    /**
     * Filter which DailyPlans to update
     */
    where?: DailyPlanWhereInput
    /**
     * Limit how many DailyPlans to update.
     */
    limit?: number
  }

  /**
   * DailyPlan upsert
   */
  export type DailyPlanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyPlan
     */
    select?: DailyPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyPlan
     */
    omit?: DailyPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyPlanInclude<ExtArgs> | null
    /**
     * The filter to search for the DailyPlan to update in case it exists.
     */
    where: DailyPlanWhereUniqueInput
    /**
     * In case the DailyPlan found by the `where` argument doesn't exist, create a new DailyPlan with this data.
     */
    create: XOR<DailyPlanCreateInput, DailyPlanUncheckedCreateInput>
    /**
     * In case the DailyPlan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DailyPlanUpdateInput, DailyPlanUncheckedUpdateInput>
  }

  /**
   * DailyPlan delete
   */
  export type DailyPlanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyPlan
     */
    select?: DailyPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyPlan
     */
    omit?: DailyPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyPlanInclude<ExtArgs> | null
    /**
     * Filter which DailyPlan to delete.
     */
    where: DailyPlanWhereUniqueInput
  }

  /**
   * DailyPlan deleteMany
   */
  export type DailyPlanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyPlans to delete
     */
    where?: DailyPlanWhereInput
    /**
     * Limit how many DailyPlans to delete.
     */
    limit?: number
  }

  /**
   * DailyPlan.items
   */
  export type DailyPlan$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyPlanItem
     */
    select?: DailyPlanItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyPlanItem
     */
    omit?: DailyPlanItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyPlanItemInclude<ExtArgs> | null
    where?: DailyPlanItemWhereInput
    orderBy?: DailyPlanItemOrderByWithRelationInput | DailyPlanItemOrderByWithRelationInput[]
    cursor?: DailyPlanItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DailyPlanItemScalarFieldEnum | DailyPlanItemScalarFieldEnum[]
  }

  /**
   * DailyPlan without action
   */
  export type DailyPlanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyPlan
     */
    select?: DailyPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyPlan
     */
    omit?: DailyPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyPlanInclude<ExtArgs> | null
  }


  /**
   * Model DailyPlanItem
   */

  export type AggregateDailyPlanItem = {
    _count: DailyPlanItemCountAggregateOutputType | null
    _avg: DailyPlanItemAvgAggregateOutputType | null
    _sum: DailyPlanItemSumAggregateOutputType | null
    _min: DailyPlanItemMinAggregateOutputType | null
    _max: DailyPlanItemMaxAggregateOutputType | null
  }

  export type DailyPlanItemAvgAggregateOutputType = {
    id: number | null
    dailyPlanId: number | null
    todoId: number | null
    habitId: number | null
    priority: number | null
    order: number | null
  }

  export type DailyPlanItemSumAggregateOutputType = {
    id: number | null
    dailyPlanId: number | null
    todoId: number | null
    habitId: number | null
    priority: number | null
    order: number | null
  }

  export type DailyPlanItemMinAggregateOutputType = {
    id: number | null
    dailyPlanId: number | null
    todoId: number | null
    habitId: number | null
    title: string | null
    description: string | null
    time: Date | null
    priority: number | null
    completed: boolean | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DailyPlanItemMaxAggregateOutputType = {
    id: number | null
    dailyPlanId: number | null
    todoId: number | null
    habitId: number | null
    title: string | null
    description: string | null
    time: Date | null
    priority: number | null
    completed: boolean | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DailyPlanItemCountAggregateOutputType = {
    id: number
    dailyPlanId: number
    todoId: number
    habitId: number
    title: number
    description: number
    time: number
    priority: number
    completed: number
    order: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DailyPlanItemAvgAggregateInputType = {
    id?: true
    dailyPlanId?: true
    todoId?: true
    habitId?: true
    priority?: true
    order?: true
  }

  export type DailyPlanItemSumAggregateInputType = {
    id?: true
    dailyPlanId?: true
    todoId?: true
    habitId?: true
    priority?: true
    order?: true
  }

  export type DailyPlanItemMinAggregateInputType = {
    id?: true
    dailyPlanId?: true
    todoId?: true
    habitId?: true
    title?: true
    description?: true
    time?: true
    priority?: true
    completed?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DailyPlanItemMaxAggregateInputType = {
    id?: true
    dailyPlanId?: true
    todoId?: true
    habitId?: true
    title?: true
    description?: true
    time?: true
    priority?: true
    completed?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DailyPlanItemCountAggregateInputType = {
    id?: true
    dailyPlanId?: true
    todoId?: true
    habitId?: true
    title?: true
    description?: true
    time?: true
    priority?: true
    completed?: true
    order?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DailyPlanItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyPlanItem to aggregate.
     */
    where?: DailyPlanItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyPlanItems to fetch.
     */
    orderBy?: DailyPlanItemOrderByWithRelationInput | DailyPlanItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DailyPlanItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyPlanItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyPlanItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DailyPlanItems
    **/
    _count?: true | DailyPlanItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DailyPlanItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DailyPlanItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DailyPlanItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DailyPlanItemMaxAggregateInputType
  }

  export type GetDailyPlanItemAggregateType<T extends DailyPlanItemAggregateArgs> = {
        [P in keyof T & keyof AggregateDailyPlanItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDailyPlanItem[P]>
      : GetScalarType<T[P], AggregateDailyPlanItem[P]>
  }




  export type DailyPlanItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyPlanItemWhereInput
    orderBy?: DailyPlanItemOrderByWithAggregationInput | DailyPlanItemOrderByWithAggregationInput[]
    by: DailyPlanItemScalarFieldEnum[] | DailyPlanItemScalarFieldEnum
    having?: DailyPlanItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DailyPlanItemCountAggregateInputType | true
    _avg?: DailyPlanItemAvgAggregateInputType
    _sum?: DailyPlanItemSumAggregateInputType
    _min?: DailyPlanItemMinAggregateInputType
    _max?: DailyPlanItemMaxAggregateInputType
  }

  export type DailyPlanItemGroupByOutputType = {
    id: number
    dailyPlanId: number
    todoId: number | null
    habitId: number | null
    title: string
    description: string | null
    time: Date | null
    priority: number | null
    completed: boolean
    order: number
    createdAt: Date
    updatedAt: Date
    _count: DailyPlanItemCountAggregateOutputType | null
    _avg: DailyPlanItemAvgAggregateOutputType | null
    _sum: DailyPlanItemSumAggregateOutputType | null
    _min: DailyPlanItemMinAggregateOutputType | null
    _max: DailyPlanItemMaxAggregateOutputType | null
  }

  type GetDailyPlanItemGroupByPayload<T extends DailyPlanItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DailyPlanItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DailyPlanItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DailyPlanItemGroupByOutputType[P]>
            : GetScalarType<T[P], DailyPlanItemGroupByOutputType[P]>
        }
      >
    >


  export type DailyPlanItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dailyPlanId?: boolean
    todoId?: boolean
    habitId?: boolean
    title?: boolean
    description?: boolean
    time?: boolean
    priority?: boolean
    completed?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dailyPlan?: boolean | DailyPlanDefaultArgs<ExtArgs>
    todo?: boolean | DailyPlanItem$todoArgs<ExtArgs>
    habit?: boolean | DailyPlanItem$habitArgs<ExtArgs>
  }, ExtArgs["result"]["dailyPlanItem"]>



  export type DailyPlanItemSelectScalar = {
    id?: boolean
    dailyPlanId?: boolean
    todoId?: boolean
    habitId?: boolean
    title?: boolean
    description?: boolean
    time?: boolean
    priority?: boolean
    completed?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DailyPlanItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dailyPlanId" | "todoId" | "habitId" | "title" | "description" | "time" | "priority" | "completed" | "order" | "createdAt" | "updatedAt", ExtArgs["result"]["dailyPlanItem"]>
  export type DailyPlanItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dailyPlan?: boolean | DailyPlanDefaultArgs<ExtArgs>
    todo?: boolean | DailyPlanItem$todoArgs<ExtArgs>
    habit?: boolean | DailyPlanItem$habitArgs<ExtArgs>
  }

  export type $DailyPlanItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DailyPlanItem"
    objects: {
      dailyPlan: Prisma.$DailyPlanPayload<ExtArgs>
      todo: Prisma.$TodoPayload<ExtArgs> | null
      habit: Prisma.$HabitPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      dailyPlanId: number
      todoId: number | null
      habitId: number | null
      title: string
      description: string | null
      time: Date | null
      priority: number | null
      completed: boolean
      order: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["dailyPlanItem"]>
    composites: {}
  }

  type DailyPlanItemGetPayload<S extends boolean | null | undefined | DailyPlanItemDefaultArgs> = $Result.GetResult<Prisma.$DailyPlanItemPayload, S>

  type DailyPlanItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DailyPlanItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DailyPlanItemCountAggregateInputType | true
    }

  export interface DailyPlanItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DailyPlanItem'], meta: { name: 'DailyPlanItem' } }
    /**
     * Find zero or one DailyPlanItem that matches the filter.
     * @param {DailyPlanItemFindUniqueArgs} args - Arguments to find a DailyPlanItem
     * @example
     * // Get one DailyPlanItem
     * const dailyPlanItem = await prisma.dailyPlanItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DailyPlanItemFindUniqueArgs>(args: SelectSubset<T, DailyPlanItemFindUniqueArgs<ExtArgs>>): Prisma__DailyPlanItemClient<$Result.GetResult<Prisma.$DailyPlanItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DailyPlanItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DailyPlanItemFindUniqueOrThrowArgs} args - Arguments to find a DailyPlanItem
     * @example
     * // Get one DailyPlanItem
     * const dailyPlanItem = await prisma.dailyPlanItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DailyPlanItemFindUniqueOrThrowArgs>(args: SelectSubset<T, DailyPlanItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DailyPlanItemClient<$Result.GetResult<Prisma.$DailyPlanItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyPlanItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyPlanItemFindFirstArgs} args - Arguments to find a DailyPlanItem
     * @example
     * // Get one DailyPlanItem
     * const dailyPlanItem = await prisma.dailyPlanItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DailyPlanItemFindFirstArgs>(args?: SelectSubset<T, DailyPlanItemFindFirstArgs<ExtArgs>>): Prisma__DailyPlanItemClient<$Result.GetResult<Prisma.$DailyPlanItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyPlanItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyPlanItemFindFirstOrThrowArgs} args - Arguments to find a DailyPlanItem
     * @example
     * // Get one DailyPlanItem
     * const dailyPlanItem = await prisma.dailyPlanItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DailyPlanItemFindFirstOrThrowArgs>(args?: SelectSubset<T, DailyPlanItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__DailyPlanItemClient<$Result.GetResult<Prisma.$DailyPlanItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DailyPlanItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyPlanItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DailyPlanItems
     * const dailyPlanItems = await prisma.dailyPlanItem.findMany()
     * 
     * // Get first 10 DailyPlanItems
     * const dailyPlanItems = await prisma.dailyPlanItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dailyPlanItemWithIdOnly = await prisma.dailyPlanItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DailyPlanItemFindManyArgs>(args?: SelectSubset<T, DailyPlanItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyPlanItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DailyPlanItem.
     * @param {DailyPlanItemCreateArgs} args - Arguments to create a DailyPlanItem.
     * @example
     * // Create one DailyPlanItem
     * const DailyPlanItem = await prisma.dailyPlanItem.create({
     *   data: {
     *     // ... data to create a DailyPlanItem
     *   }
     * })
     * 
     */
    create<T extends DailyPlanItemCreateArgs>(args: SelectSubset<T, DailyPlanItemCreateArgs<ExtArgs>>): Prisma__DailyPlanItemClient<$Result.GetResult<Prisma.$DailyPlanItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DailyPlanItems.
     * @param {DailyPlanItemCreateManyArgs} args - Arguments to create many DailyPlanItems.
     * @example
     * // Create many DailyPlanItems
     * const dailyPlanItem = await prisma.dailyPlanItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DailyPlanItemCreateManyArgs>(args?: SelectSubset<T, DailyPlanItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DailyPlanItem.
     * @param {DailyPlanItemDeleteArgs} args - Arguments to delete one DailyPlanItem.
     * @example
     * // Delete one DailyPlanItem
     * const DailyPlanItem = await prisma.dailyPlanItem.delete({
     *   where: {
     *     // ... filter to delete one DailyPlanItem
     *   }
     * })
     * 
     */
    delete<T extends DailyPlanItemDeleteArgs>(args: SelectSubset<T, DailyPlanItemDeleteArgs<ExtArgs>>): Prisma__DailyPlanItemClient<$Result.GetResult<Prisma.$DailyPlanItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DailyPlanItem.
     * @param {DailyPlanItemUpdateArgs} args - Arguments to update one DailyPlanItem.
     * @example
     * // Update one DailyPlanItem
     * const dailyPlanItem = await prisma.dailyPlanItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DailyPlanItemUpdateArgs>(args: SelectSubset<T, DailyPlanItemUpdateArgs<ExtArgs>>): Prisma__DailyPlanItemClient<$Result.GetResult<Prisma.$DailyPlanItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DailyPlanItems.
     * @param {DailyPlanItemDeleteManyArgs} args - Arguments to filter DailyPlanItems to delete.
     * @example
     * // Delete a few DailyPlanItems
     * const { count } = await prisma.dailyPlanItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DailyPlanItemDeleteManyArgs>(args?: SelectSubset<T, DailyPlanItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyPlanItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyPlanItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DailyPlanItems
     * const dailyPlanItem = await prisma.dailyPlanItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DailyPlanItemUpdateManyArgs>(args: SelectSubset<T, DailyPlanItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DailyPlanItem.
     * @param {DailyPlanItemUpsertArgs} args - Arguments to update or create a DailyPlanItem.
     * @example
     * // Update or create a DailyPlanItem
     * const dailyPlanItem = await prisma.dailyPlanItem.upsert({
     *   create: {
     *     // ... data to create a DailyPlanItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DailyPlanItem we want to update
     *   }
     * })
     */
    upsert<T extends DailyPlanItemUpsertArgs>(args: SelectSubset<T, DailyPlanItemUpsertArgs<ExtArgs>>): Prisma__DailyPlanItemClient<$Result.GetResult<Prisma.$DailyPlanItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DailyPlanItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyPlanItemCountArgs} args - Arguments to filter DailyPlanItems to count.
     * @example
     * // Count the number of DailyPlanItems
     * const count = await prisma.dailyPlanItem.count({
     *   where: {
     *     // ... the filter for the DailyPlanItems we want to count
     *   }
     * })
    **/
    count<T extends DailyPlanItemCountArgs>(
      args?: Subset<T, DailyPlanItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DailyPlanItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DailyPlanItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyPlanItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DailyPlanItemAggregateArgs>(args: Subset<T, DailyPlanItemAggregateArgs>): Prisma.PrismaPromise<GetDailyPlanItemAggregateType<T>>

    /**
     * Group by DailyPlanItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyPlanItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DailyPlanItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DailyPlanItemGroupByArgs['orderBy'] }
        : { orderBy?: DailyPlanItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DailyPlanItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDailyPlanItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DailyPlanItem model
   */
  readonly fields: DailyPlanItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DailyPlanItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DailyPlanItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dailyPlan<T extends DailyPlanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DailyPlanDefaultArgs<ExtArgs>>): Prisma__DailyPlanClient<$Result.GetResult<Prisma.$DailyPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    todo<T extends DailyPlanItem$todoArgs<ExtArgs> = {}>(args?: Subset<T, DailyPlanItem$todoArgs<ExtArgs>>): Prisma__TodoClient<$Result.GetResult<Prisma.$TodoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    habit<T extends DailyPlanItem$habitArgs<ExtArgs> = {}>(args?: Subset<T, DailyPlanItem$habitArgs<ExtArgs>>): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DailyPlanItem model
   */
  interface DailyPlanItemFieldRefs {
    readonly id: FieldRef<"DailyPlanItem", 'Int'>
    readonly dailyPlanId: FieldRef<"DailyPlanItem", 'Int'>
    readonly todoId: FieldRef<"DailyPlanItem", 'Int'>
    readonly habitId: FieldRef<"DailyPlanItem", 'Int'>
    readonly title: FieldRef<"DailyPlanItem", 'String'>
    readonly description: FieldRef<"DailyPlanItem", 'String'>
    readonly time: FieldRef<"DailyPlanItem", 'DateTime'>
    readonly priority: FieldRef<"DailyPlanItem", 'Int'>
    readonly completed: FieldRef<"DailyPlanItem", 'Boolean'>
    readonly order: FieldRef<"DailyPlanItem", 'Int'>
    readonly createdAt: FieldRef<"DailyPlanItem", 'DateTime'>
    readonly updatedAt: FieldRef<"DailyPlanItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DailyPlanItem findUnique
   */
  export type DailyPlanItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyPlanItem
     */
    select?: DailyPlanItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyPlanItem
     */
    omit?: DailyPlanItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyPlanItemInclude<ExtArgs> | null
    /**
     * Filter, which DailyPlanItem to fetch.
     */
    where: DailyPlanItemWhereUniqueInput
  }

  /**
   * DailyPlanItem findUniqueOrThrow
   */
  export type DailyPlanItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyPlanItem
     */
    select?: DailyPlanItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyPlanItem
     */
    omit?: DailyPlanItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyPlanItemInclude<ExtArgs> | null
    /**
     * Filter, which DailyPlanItem to fetch.
     */
    where: DailyPlanItemWhereUniqueInput
  }

  /**
   * DailyPlanItem findFirst
   */
  export type DailyPlanItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyPlanItem
     */
    select?: DailyPlanItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyPlanItem
     */
    omit?: DailyPlanItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyPlanItemInclude<ExtArgs> | null
    /**
     * Filter, which DailyPlanItem to fetch.
     */
    where?: DailyPlanItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyPlanItems to fetch.
     */
    orderBy?: DailyPlanItemOrderByWithRelationInput | DailyPlanItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyPlanItems.
     */
    cursor?: DailyPlanItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyPlanItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyPlanItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyPlanItems.
     */
    distinct?: DailyPlanItemScalarFieldEnum | DailyPlanItemScalarFieldEnum[]
  }

  /**
   * DailyPlanItem findFirstOrThrow
   */
  export type DailyPlanItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyPlanItem
     */
    select?: DailyPlanItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyPlanItem
     */
    omit?: DailyPlanItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyPlanItemInclude<ExtArgs> | null
    /**
     * Filter, which DailyPlanItem to fetch.
     */
    where?: DailyPlanItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyPlanItems to fetch.
     */
    orderBy?: DailyPlanItemOrderByWithRelationInput | DailyPlanItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyPlanItems.
     */
    cursor?: DailyPlanItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyPlanItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyPlanItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyPlanItems.
     */
    distinct?: DailyPlanItemScalarFieldEnum | DailyPlanItemScalarFieldEnum[]
  }

  /**
   * DailyPlanItem findMany
   */
  export type DailyPlanItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyPlanItem
     */
    select?: DailyPlanItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyPlanItem
     */
    omit?: DailyPlanItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyPlanItemInclude<ExtArgs> | null
    /**
     * Filter, which DailyPlanItems to fetch.
     */
    where?: DailyPlanItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyPlanItems to fetch.
     */
    orderBy?: DailyPlanItemOrderByWithRelationInput | DailyPlanItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DailyPlanItems.
     */
    cursor?: DailyPlanItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyPlanItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyPlanItems.
     */
    skip?: number
    distinct?: DailyPlanItemScalarFieldEnum | DailyPlanItemScalarFieldEnum[]
  }

  /**
   * DailyPlanItem create
   */
  export type DailyPlanItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyPlanItem
     */
    select?: DailyPlanItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyPlanItem
     */
    omit?: DailyPlanItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyPlanItemInclude<ExtArgs> | null
    /**
     * The data needed to create a DailyPlanItem.
     */
    data: XOR<DailyPlanItemCreateInput, DailyPlanItemUncheckedCreateInput>
  }

  /**
   * DailyPlanItem createMany
   */
  export type DailyPlanItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DailyPlanItems.
     */
    data: DailyPlanItemCreateManyInput | DailyPlanItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DailyPlanItem update
   */
  export type DailyPlanItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyPlanItem
     */
    select?: DailyPlanItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyPlanItem
     */
    omit?: DailyPlanItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyPlanItemInclude<ExtArgs> | null
    /**
     * The data needed to update a DailyPlanItem.
     */
    data: XOR<DailyPlanItemUpdateInput, DailyPlanItemUncheckedUpdateInput>
    /**
     * Choose, which DailyPlanItem to update.
     */
    where: DailyPlanItemWhereUniqueInput
  }

  /**
   * DailyPlanItem updateMany
   */
  export type DailyPlanItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DailyPlanItems.
     */
    data: XOR<DailyPlanItemUpdateManyMutationInput, DailyPlanItemUncheckedUpdateManyInput>
    /**
     * Filter which DailyPlanItems to update
     */
    where?: DailyPlanItemWhereInput
    /**
     * Limit how many DailyPlanItems to update.
     */
    limit?: number
  }

  /**
   * DailyPlanItem upsert
   */
  export type DailyPlanItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyPlanItem
     */
    select?: DailyPlanItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyPlanItem
     */
    omit?: DailyPlanItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyPlanItemInclude<ExtArgs> | null
    /**
     * The filter to search for the DailyPlanItem to update in case it exists.
     */
    where: DailyPlanItemWhereUniqueInput
    /**
     * In case the DailyPlanItem found by the `where` argument doesn't exist, create a new DailyPlanItem with this data.
     */
    create: XOR<DailyPlanItemCreateInput, DailyPlanItemUncheckedCreateInput>
    /**
     * In case the DailyPlanItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DailyPlanItemUpdateInput, DailyPlanItemUncheckedUpdateInput>
  }

  /**
   * DailyPlanItem delete
   */
  export type DailyPlanItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyPlanItem
     */
    select?: DailyPlanItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyPlanItem
     */
    omit?: DailyPlanItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyPlanItemInclude<ExtArgs> | null
    /**
     * Filter which DailyPlanItem to delete.
     */
    where: DailyPlanItemWhereUniqueInput
  }

  /**
   * DailyPlanItem deleteMany
   */
  export type DailyPlanItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyPlanItems to delete
     */
    where?: DailyPlanItemWhereInput
    /**
     * Limit how many DailyPlanItems to delete.
     */
    limit?: number
  }

  /**
   * DailyPlanItem.todo
   */
  export type DailyPlanItem$todoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Todo
     */
    select?: TodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Todo
     */
    omit?: TodoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoInclude<ExtArgs> | null
    where?: TodoWhereInput
  }

  /**
   * DailyPlanItem.habit
   */
  export type DailyPlanItem$habitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    where?: HabitWhereInput
  }

  /**
   * DailyPlanItem without action
   */
  export type DailyPlanItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyPlanItem
     */
    select?: DailyPlanItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyPlanItem
     */
    omit?: DailyPlanItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyPlanItemInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    appleId: 'appleId',
    googleId: 'googleId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserSettingsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    dateChangeTime: 'dateChangeTime',
    theme: 'theme',
    language: 'language',
    notifications: 'notifications',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserSettingsScalarFieldEnum = (typeof UserSettingsScalarFieldEnum)[keyof typeof UserSettingsScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const TodoScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    categoryId: 'categoryId',
    title: 'title',
    dueDate: 'dueDate',
    description: 'description',
    priority: 'priority',
    parentId: 'parentId',
    completed: 'completed',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TodoScalarFieldEnum = (typeof TodoScalarFieldEnum)[keyof typeof TodoScalarFieldEnum]


  export const HabitScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    categoryId: 'categoryId',
    title: 'title',
    description: 'description',
    autoInclude: 'autoInclude',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type HabitScalarFieldEnum = (typeof HabitScalarFieldEnum)[keyof typeof HabitScalarFieldEnum]


  export const DailyPlanScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    date: 'date',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DailyPlanScalarFieldEnum = (typeof DailyPlanScalarFieldEnum)[keyof typeof DailyPlanScalarFieldEnum]


  export const DailyPlanItemScalarFieldEnum: {
    id: 'id',
    dailyPlanId: 'dailyPlanId',
    todoId: 'todoId',
    habitId: 'habitId',
    title: 'title',
    description: 'description',
    time: 'time',
    priority: 'priority',
    completed: 'completed',
    order: 'order',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DailyPlanItemScalarFieldEnum = (typeof DailyPlanItemScalarFieldEnum)[keyof typeof DailyPlanItemScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    email: 'email',
    password: 'password',
    appleId: 'appleId',
    googleId: 'googleId'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const UserSettingsOrderByRelevanceFieldEnum: {
    dateChangeTime: 'dateChangeTime',
    theme: 'theme',
    language: 'language'
  };

  export type UserSettingsOrderByRelevanceFieldEnum = (typeof UserSettingsOrderByRelevanceFieldEnum)[keyof typeof UserSettingsOrderByRelevanceFieldEnum]


  export const CategoryOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type CategoryOrderByRelevanceFieldEnum = (typeof CategoryOrderByRelevanceFieldEnum)[keyof typeof CategoryOrderByRelevanceFieldEnum]


  export const TodoOrderByRelevanceFieldEnum: {
    title: 'title',
    description: 'description'
  };

  export type TodoOrderByRelevanceFieldEnum = (typeof TodoOrderByRelevanceFieldEnum)[keyof typeof TodoOrderByRelevanceFieldEnum]


  export const HabitOrderByRelevanceFieldEnum: {
    title: 'title',
    description: 'description'
  };

  export type HabitOrderByRelevanceFieldEnum = (typeof HabitOrderByRelevanceFieldEnum)[keyof typeof HabitOrderByRelevanceFieldEnum]


  export const DailyPlanItemOrderByRelevanceFieldEnum: {
    title: 'title',
    description: 'description'
  };

  export type DailyPlanItemOrderByRelevanceFieldEnum = (typeof DailyPlanItemOrderByRelevanceFieldEnum)[keyof typeof DailyPlanItemOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    appleId?: StringNullableFilter<"User"> | string | null
    googleId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    todos?: TodoListRelationFilter
    habits?: HabitListRelationFilter
    dailyPlans?: DailyPlanListRelationFilter
    settings?: XOR<UserSettingsNullableScalarRelationFilter, UserSettingsWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    appleId?: SortOrderInput | SortOrder
    googleId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    todos?: TodoOrderByRelationAggregateInput
    habits?: HabitOrderByRelationAggregateInput
    dailyPlans?: DailyPlanOrderByRelationAggregateInput
    settings?: UserSettingsOrderByWithRelationInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    appleId?: string
    googleId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    todos?: TodoListRelationFilter
    habits?: HabitListRelationFilter
    dailyPlans?: DailyPlanListRelationFilter
    settings?: XOR<UserSettingsNullableScalarRelationFilter, UserSettingsWhereInput> | null
  }, "id" | "email" | "appleId" | "googleId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    appleId?: SortOrderInput | SortOrder
    googleId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    appleId?: StringNullableWithAggregatesFilter<"User"> | string | null
    googleId?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type UserSettingsWhereInput = {
    AND?: UserSettingsWhereInput | UserSettingsWhereInput[]
    OR?: UserSettingsWhereInput[]
    NOT?: UserSettingsWhereInput | UserSettingsWhereInput[]
    id?: IntFilter<"UserSettings"> | number
    userId?: IntFilter<"UserSettings"> | number
    dateChangeTime?: StringFilter<"UserSettings"> | string
    theme?: StringFilter<"UserSettings"> | string
    language?: StringFilter<"UserSettings"> | string
    notifications?: BoolFilter<"UserSettings"> | boolean
    createdAt?: DateTimeFilter<"UserSettings"> | Date | string
    updatedAt?: DateTimeFilter<"UserSettings"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserSettingsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    dateChangeTime?: SortOrder
    theme?: SortOrder
    language?: SortOrder
    notifications?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: UserSettingsOrderByRelevanceInput
  }

  export type UserSettingsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: UserSettingsWhereInput | UserSettingsWhereInput[]
    OR?: UserSettingsWhereInput[]
    NOT?: UserSettingsWhereInput | UserSettingsWhereInput[]
    dateChangeTime?: StringFilter<"UserSettings"> | string
    theme?: StringFilter<"UserSettings"> | string
    language?: StringFilter<"UserSettings"> | string
    notifications?: BoolFilter<"UserSettings"> | boolean
    createdAt?: DateTimeFilter<"UserSettings"> | Date | string
    updatedAt?: DateTimeFilter<"UserSettings"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type UserSettingsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    dateChangeTime?: SortOrder
    theme?: SortOrder
    language?: SortOrder
    notifications?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserSettingsCountOrderByAggregateInput
    _avg?: UserSettingsAvgOrderByAggregateInput
    _max?: UserSettingsMaxOrderByAggregateInput
    _min?: UserSettingsMinOrderByAggregateInput
    _sum?: UserSettingsSumOrderByAggregateInput
  }

  export type UserSettingsScalarWhereWithAggregatesInput = {
    AND?: UserSettingsScalarWhereWithAggregatesInput | UserSettingsScalarWhereWithAggregatesInput[]
    OR?: UserSettingsScalarWhereWithAggregatesInput[]
    NOT?: UserSettingsScalarWhereWithAggregatesInput | UserSettingsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserSettings"> | number
    userId?: IntWithAggregatesFilter<"UserSettings"> | number
    dateChangeTime?: StringWithAggregatesFilter<"UserSettings"> | string
    theme?: StringWithAggregatesFilter<"UserSettings"> | string
    language?: StringWithAggregatesFilter<"UserSettings"> | string
    notifications?: BoolWithAggregatesFilter<"UserSettings"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"UserSettings"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserSettings"> | Date | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: IntFilter<"Category"> | number
    name?: StringFilter<"Category"> | string
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    todos?: TodoListRelationFilter
    habits?: HabitListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    todos?: TodoOrderByRelationAggregateInput
    habits?: HabitOrderByRelationAggregateInput
    _relevance?: CategoryOrderByRelevanceInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    todos?: TodoListRelationFilter
    habits?: HabitListRelationFilter
  }, "id" | "name">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Category"> | number
    name?: StringWithAggregatesFilter<"Category"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
  }

  export type TodoWhereInput = {
    AND?: TodoWhereInput | TodoWhereInput[]
    OR?: TodoWhereInput[]
    NOT?: TodoWhereInput | TodoWhereInput[]
    id?: IntFilter<"Todo"> | number
    userId?: IntFilter<"Todo"> | number
    categoryId?: IntNullableFilter<"Todo"> | number | null
    title?: StringFilter<"Todo"> | string
    dueDate?: DateTimeNullableFilter<"Todo"> | Date | string | null
    description?: StringNullableFilter<"Todo"> | string | null
    priority?: IntNullableFilter<"Todo"> | number | null
    parentId?: IntNullableFilter<"Todo"> | number | null
    completed?: BoolFilter<"Todo"> | boolean
    createdAt?: DateTimeFilter<"Todo"> | Date | string
    updatedAt?: DateTimeFilter<"Todo"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    parent?: XOR<TodoNullableScalarRelationFilter, TodoWhereInput> | null
    subtasks?: TodoListRelationFilter
    dailyPlanItem?: DailyPlanItemListRelationFilter
  }

  export type TodoOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    title?: SortOrder
    dueDate?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    priority?: SortOrderInput | SortOrder
    parentId?: SortOrderInput | SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
    parent?: TodoOrderByWithRelationInput
    subtasks?: TodoOrderByRelationAggregateInput
    dailyPlanItem?: DailyPlanItemOrderByRelationAggregateInput
    _relevance?: TodoOrderByRelevanceInput
  }

  export type TodoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TodoWhereInput | TodoWhereInput[]
    OR?: TodoWhereInput[]
    NOT?: TodoWhereInput | TodoWhereInput[]
    userId?: IntFilter<"Todo"> | number
    categoryId?: IntNullableFilter<"Todo"> | number | null
    title?: StringFilter<"Todo"> | string
    dueDate?: DateTimeNullableFilter<"Todo"> | Date | string | null
    description?: StringNullableFilter<"Todo"> | string | null
    priority?: IntNullableFilter<"Todo"> | number | null
    parentId?: IntNullableFilter<"Todo"> | number | null
    completed?: BoolFilter<"Todo"> | boolean
    createdAt?: DateTimeFilter<"Todo"> | Date | string
    updatedAt?: DateTimeFilter<"Todo"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    parent?: XOR<TodoNullableScalarRelationFilter, TodoWhereInput> | null
    subtasks?: TodoListRelationFilter
    dailyPlanItem?: DailyPlanItemListRelationFilter
  }, "id">

  export type TodoOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    title?: SortOrder
    dueDate?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    priority?: SortOrderInput | SortOrder
    parentId?: SortOrderInput | SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TodoCountOrderByAggregateInput
    _avg?: TodoAvgOrderByAggregateInput
    _max?: TodoMaxOrderByAggregateInput
    _min?: TodoMinOrderByAggregateInput
    _sum?: TodoSumOrderByAggregateInput
  }

  export type TodoScalarWhereWithAggregatesInput = {
    AND?: TodoScalarWhereWithAggregatesInput | TodoScalarWhereWithAggregatesInput[]
    OR?: TodoScalarWhereWithAggregatesInput[]
    NOT?: TodoScalarWhereWithAggregatesInput | TodoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Todo"> | number
    userId?: IntWithAggregatesFilter<"Todo"> | number
    categoryId?: IntNullableWithAggregatesFilter<"Todo"> | number | null
    title?: StringWithAggregatesFilter<"Todo"> | string
    dueDate?: DateTimeNullableWithAggregatesFilter<"Todo"> | Date | string | null
    description?: StringNullableWithAggregatesFilter<"Todo"> | string | null
    priority?: IntNullableWithAggregatesFilter<"Todo"> | number | null
    parentId?: IntNullableWithAggregatesFilter<"Todo"> | number | null
    completed?: BoolWithAggregatesFilter<"Todo"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Todo"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Todo"> | Date | string
  }

  export type HabitWhereInput = {
    AND?: HabitWhereInput | HabitWhereInput[]
    OR?: HabitWhereInput[]
    NOT?: HabitWhereInput | HabitWhereInput[]
    id?: IntFilter<"Habit"> | number
    userId?: IntFilter<"Habit"> | number
    categoryId?: IntNullableFilter<"Habit"> | number | null
    title?: StringFilter<"Habit"> | string
    description?: StringNullableFilter<"Habit"> | string | null
    autoInclude?: BoolFilter<"Habit"> | boolean
    createdAt?: DateTimeFilter<"Habit"> | Date | string
    updatedAt?: DateTimeFilter<"Habit"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    dailyPlanItem?: DailyPlanItemListRelationFilter
  }

  export type HabitOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    autoInclude?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
    dailyPlanItem?: DailyPlanItemOrderByRelationAggregateInput
    _relevance?: HabitOrderByRelevanceInput
  }

  export type HabitWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: HabitWhereInput | HabitWhereInput[]
    OR?: HabitWhereInput[]
    NOT?: HabitWhereInput | HabitWhereInput[]
    userId?: IntFilter<"Habit"> | number
    categoryId?: IntNullableFilter<"Habit"> | number | null
    title?: StringFilter<"Habit"> | string
    description?: StringNullableFilter<"Habit"> | string | null
    autoInclude?: BoolFilter<"Habit"> | boolean
    createdAt?: DateTimeFilter<"Habit"> | Date | string
    updatedAt?: DateTimeFilter<"Habit"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    dailyPlanItem?: DailyPlanItemListRelationFilter
  }, "id">

  export type HabitOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    autoInclude?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: HabitCountOrderByAggregateInput
    _avg?: HabitAvgOrderByAggregateInput
    _max?: HabitMaxOrderByAggregateInput
    _min?: HabitMinOrderByAggregateInput
    _sum?: HabitSumOrderByAggregateInput
  }

  export type HabitScalarWhereWithAggregatesInput = {
    AND?: HabitScalarWhereWithAggregatesInput | HabitScalarWhereWithAggregatesInput[]
    OR?: HabitScalarWhereWithAggregatesInput[]
    NOT?: HabitScalarWhereWithAggregatesInput | HabitScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Habit"> | number
    userId?: IntWithAggregatesFilter<"Habit"> | number
    categoryId?: IntNullableWithAggregatesFilter<"Habit"> | number | null
    title?: StringWithAggregatesFilter<"Habit"> | string
    description?: StringNullableWithAggregatesFilter<"Habit"> | string | null
    autoInclude?: BoolWithAggregatesFilter<"Habit"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Habit"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Habit"> | Date | string
  }

  export type DailyPlanWhereInput = {
    AND?: DailyPlanWhereInput | DailyPlanWhereInput[]
    OR?: DailyPlanWhereInput[]
    NOT?: DailyPlanWhereInput | DailyPlanWhereInput[]
    id?: IntFilter<"DailyPlan"> | number
    userId?: IntFilter<"DailyPlan"> | number
    date?: DateTimeFilter<"DailyPlan"> | Date | string
    createdAt?: DateTimeFilter<"DailyPlan"> | Date | string
    updatedAt?: DateTimeFilter<"DailyPlan"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    items?: DailyPlanItemListRelationFilter
  }

  export type DailyPlanOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    items?: DailyPlanItemOrderByRelationAggregateInput
  }

  export type DailyPlanWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_date?: DailyPlanUserIdDateCompoundUniqueInput
    AND?: DailyPlanWhereInput | DailyPlanWhereInput[]
    OR?: DailyPlanWhereInput[]
    NOT?: DailyPlanWhereInput | DailyPlanWhereInput[]
    userId?: IntFilter<"DailyPlan"> | number
    date?: DateTimeFilter<"DailyPlan"> | Date | string
    createdAt?: DateTimeFilter<"DailyPlan"> | Date | string
    updatedAt?: DateTimeFilter<"DailyPlan"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    items?: DailyPlanItemListRelationFilter
  }, "id" | "userId_date">

  export type DailyPlanOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DailyPlanCountOrderByAggregateInput
    _avg?: DailyPlanAvgOrderByAggregateInput
    _max?: DailyPlanMaxOrderByAggregateInput
    _min?: DailyPlanMinOrderByAggregateInput
    _sum?: DailyPlanSumOrderByAggregateInput
  }

  export type DailyPlanScalarWhereWithAggregatesInput = {
    AND?: DailyPlanScalarWhereWithAggregatesInput | DailyPlanScalarWhereWithAggregatesInput[]
    OR?: DailyPlanScalarWhereWithAggregatesInput[]
    NOT?: DailyPlanScalarWhereWithAggregatesInput | DailyPlanScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DailyPlan"> | number
    userId?: IntWithAggregatesFilter<"DailyPlan"> | number
    date?: DateTimeWithAggregatesFilter<"DailyPlan"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"DailyPlan"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DailyPlan"> | Date | string
  }

  export type DailyPlanItemWhereInput = {
    AND?: DailyPlanItemWhereInput | DailyPlanItemWhereInput[]
    OR?: DailyPlanItemWhereInput[]
    NOT?: DailyPlanItemWhereInput | DailyPlanItemWhereInput[]
    id?: IntFilter<"DailyPlanItem"> | number
    dailyPlanId?: IntFilter<"DailyPlanItem"> | number
    todoId?: IntNullableFilter<"DailyPlanItem"> | number | null
    habitId?: IntNullableFilter<"DailyPlanItem"> | number | null
    title?: StringFilter<"DailyPlanItem"> | string
    description?: StringNullableFilter<"DailyPlanItem"> | string | null
    time?: DateTimeNullableFilter<"DailyPlanItem"> | Date | string | null
    priority?: IntNullableFilter<"DailyPlanItem"> | number | null
    completed?: BoolFilter<"DailyPlanItem"> | boolean
    order?: IntFilter<"DailyPlanItem"> | number
    createdAt?: DateTimeFilter<"DailyPlanItem"> | Date | string
    updatedAt?: DateTimeFilter<"DailyPlanItem"> | Date | string
    dailyPlan?: XOR<DailyPlanScalarRelationFilter, DailyPlanWhereInput>
    todo?: XOR<TodoNullableScalarRelationFilter, TodoWhereInput> | null
    habit?: XOR<HabitNullableScalarRelationFilter, HabitWhereInput> | null
  }

  export type DailyPlanItemOrderByWithRelationInput = {
    id?: SortOrder
    dailyPlanId?: SortOrder
    todoId?: SortOrderInput | SortOrder
    habitId?: SortOrderInput | SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    time?: SortOrderInput | SortOrder
    priority?: SortOrderInput | SortOrder
    completed?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dailyPlan?: DailyPlanOrderByWithRelationInput
    todo?: TodoOrderByWithRelationInput
    habit?: HabitOrderByWithRelationInput
    _relevance?: DailyPlanItemOrderByRelevanceInput
  }

  export type DailyPlanItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    dailyPlanId_todoId?: DailyPlanItemDailyPlanIdTodoIdCompoundUniqueInput
    dailyPlanId_habitId?: DailyPlanItemDailyPlanIdHabitIdCompoundUniqueInput
    AND?: DailyPlanItemWhereInput | DailyPlanItemWhereInput[]
    OR?: DailyPlanItemWhereInput[]
    NOT?: DailyPlanItemWhereInput | DailyPlanItemWhereInput[]
    dailyPlanId?: IntFilter<"DailyPlanItem"> | number
    todoId?: IntNullableFilter<"DailyPlanItem"> | number | null
    habitId?: IntNullableFilter<"DailyPlanItem"> | number | null
    title?: StringFilter<"DailyPlanItem"> | string
    description?: StringNullableFilter<"DailyPlanItem"> | string | null
    time?: DateTimeNullableFilter<"DailyPlanItem"> | Date | string | null
    priority?: IntNullableFilter<"DailyPlanItem"> | number | null
    completed?: BoolFilter<"DailyPlanItem"> | boolean
    order?: IntFilter<"DailyPlanItem"> | number
    createdAt?: DateTimeFilter<"DailyPlanItem"> | Date | string
    updatedAt?: DateTimeFilter<"DailyPlanItem"> | Date | string
    dailyPlan?: XOR<DailyPlanScalarRelationFilter, DailyPlanWhereInput>
    todo?: XOR<TodoNullableScalarRelationFilter, TodoWhereInput> | null
    habit?: XOR<HabitNullableScalarRelationFilter, HabitWhereInput> | null
  }, "id" | "dailyPlanId_todoId" | "dailyPlanId_habitId">

  export type DailyPlanItemOrderByWithAggregationInput = {
    id?: SortOrder
    dailyPlanId?: SortOrder
    todoId?: SortOrderInput | SortOrder
    habitId?: SortOrderInput | SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    time?: SortOrderInput | SortOrder
    priority?: SortOrderInput | SortOrder
    completed?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DailyPlanItemCountOrderByAggregateInput
    _avg?: DailyPlanItemAvgOrderByAggregateInput
    _max?: DailyPlanItemMaxOrderByAggregateInput
    _min?: DailyPlanItemMinOrderByAggregateInput
    _sum?: DailyPlanItemSumOrderByAggregateInput
  }

  export type DailyPlanItemScalarWhereWithAggregatesInput = {
    AND?: DailyPlanItemScalarWhereWithAggregatesInput | DailyPlanItemScalarWhereWithAggregatesInput[]
    OR?: DailyPlanItemScalarWhereWithAggregatesInput[]
    NOT?: DailyPlanItemScalarWhereWithAggregatesInput | DailyPlanItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DailyPlanItem"> | number
    dailyPlanId?: IntWithAggregatesFilter<"DailyPlanItem"> | number
    todoId?: IntNullableWithAggregatesFilter<"DailyPlanItem"> | number | null
    habitId?: IntNullableWithAggregatesFilter<"DailyPlanItem"> | number | null
    title?: StringWithAggregatesFilter<"DailyPlanItem"> | string
    description?: StringNullableWithAggregatesFilter<"DailyPlanItem"> | string | null
    time?: DateTimeNullableWithAggregatesFilter<"DailyPlanItem"> | Date | string | null
    priority?: IntNullableWithAggregatesFilter<"DailyPlanItem"> | number | null
    completed?: BoolWithAggregatesFilter<"DailyPlanItem"> | boolean
    order?: IntWithAggregatesFilter<"DailyPlanItem"> | number
    createdAt?: DateTimeWithAggregatesFilter<"DailyPlanItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DailyPlanItem"> | Date | string
  }

  export type UserCreateInput = {
    email: string
    password: string
    appleId?: string | null
    googleId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    todos?: TodoCreateNestedManyWithoutUserInput
    habits?: HabitCreateNestedManyWithoutUserInput
    dailyPlans?: DailyPlanCreateNestedManyWithoutUserInput
    settings?: UserSettingsCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    appleId?: string | null
    googleId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    todos?: TodoUncheckedCreateNestedManyWithoutUserInput
    habits?: HabitUncheckedCreateNestedManyWithoutUserInput
    dailyPlans?: DailyPlanUncheckedCreateNestedManyWithoutUserInput
    settings?: UserSettingsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    appleId?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    todos?: TodoUpdateManyWithoutUserNestedInput
    habits?: HabitUpdateManyWithoutUserNestedInput
    dailyPlans?: DailyPlanUpdateManyWithoutUserNestedInput
    settings?: UserSettingsUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    appleId?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    todos?: TodoUncheckedUpdateManyWithoutUserNestedInput
    habits?: HabitUncheckedUpdateManyWithoutUserNestedInput
    dailyPlans?: DailyPlanUncheckedUpdateManyWithoutUserNestedInput
    settings?: UserSettingsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    password: string
    appleId?: string | null
    googleId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    appleId?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    appleId?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSettingsCreateInput = {
    dateChangeTime?: string
    theme?: string
    language?: string
    notifications?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSettingsInput
  }

  export type UserSettingsUncheckedCreateInput = {
    id?: number
    userId: number
    dateChangeTime?: string
    theme?: string
    language?: string
    notifications?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSettingsUpdateInput = {
    dateChangeTime?: StringFieldUpdateOperationsInput | string
    theme?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    notifications?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSettingsNestedInput
  }

  export type UserSettingsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    dateChangeTime?: StringFieldUpdateOperationsInput | string
    theme?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    notifications?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSettingsCreateManyInput = {
    id?: number
    userId: number
    dateChangeTime?: string
    theme?: string
    language?: string
    notifications?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSettingsUpdateManyMutationInput = {
    dateChangeTime?: StringFieldUpdateOperationsInput | string
    theme?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    notifications?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSettingsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    dateChangeTime?: StringFieldUpdateOperationsInput | string
    theme?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    notifications?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    todos?: TodoCreateNestedManyWithoutCategoryInput
    habits?: HabitCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    todos?: TodoUncheckedCreateNestedManyWithoutCategoryInput
    habits?: HabitUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    todos?: TodoUpdateManyWithoutCategoryNestedInput
    habits?: HabitUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    todos?: TodoUncheckedUpdateManyWithoutCategoryNestedInput
    habits?: HabitUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TodoCreateInput = {
    title: string
    dueDate?: Date | string | null
    description?: string | null
    priority?: number | null
    completed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTodosInput
    category?: CategoryCreateNestedOneWithoutTodosInput
    parent?: TodoCreateNestedOneWithoutSubtasksInput
    subtasks?: TodoCreateNestedManyWithoutParentInput
    dailyPlanItem?: DailyPlanItemCreateNestedManyWithoutTodoInput
  }

  export type TodoUncheckedCreateInput = {
    id?: number
    userId: number
    categoryId?: number | null
    title: string
    dueDate?: Date | string | null
    description?: string | null
    priority?: number | null
    parentId?: number | null
    completed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    subtasks?: TodoUncheckedCreateNestedManyWithoutParentInput
    dailyPlanItem?: DailyPlanItemUncheckedCreateNestedManyWithoutTodoInput
  }

  export type TodoUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTodosNestedInput
    category?: CategoryUpdateOneWithoutTodosNestedInput
    parent?: TodoUpdateOneWithoutSubtasksNestedInput
    subtasks?: TodoUpdateManyWithoutParentNestedInput
    dailyPlanItem?: DailyPlanItemUpdateManyWithoutTodoNestedInput
  }

  export type TodoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subtasks?: TodoUncheckedUpdateManyWithoutParentNestedInput
    dailyPlanItem?: DailyPlanItemUncheckedUpdateManyWithoutTodoNestedInput
  }

  export type TodoCreateManyInput = {
    id?: number
    userId: number
    categoryId?: number | null
    title: string
    dueDate?: Date | string | null
    description?: string | null
    priority?: number | null
    parentId?: number | null
    completed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TodoUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TodoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HabitCreateInput = {
    title: string
    description?: string | null
    autoInclude?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutHabitsInput
    category?: CategoryCreateNestedOneWithoutHabitsInput
    dailyPlanItem?: DailyPlanItemCreateNestedManyWithoutHabitInput
  }

  export type HabitUncheckedCreateInput = {
    id?: number
    userId: number
    categoryId?: number | null
    title: string
    description?: string | null
    autoInclude?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    dailyPlanItem?: DailyPlanItemUncheckedCreateNestedManyWithoutHabitInput
  }

  export type HabitUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    autoInclude?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutHabitsNestedInput
    category?: CategoryUpdateOneWithoutHabitsNestedInput
    dailyPlanItem?: DailyPlanItemUpdateManyWithoutHabitNestedInput
  }

  export type HabitUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    autoInclude?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dailyPlanItem?: DailyPlanItemUncheckedUpdateManyWithoutHabitNestedInput
  }

  export type HabitCreateManyInput = {
    id?: number
    userId: number
    categoryId?: number | null
    title: string
    description?: string | null
    autoInclude?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HabitUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    autoInclude?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HabitUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    autoInclude?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyPlanCreateInput = {
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDailyPlansInput
    items?: DailyPlanItemCreateNestedManyWithoutDailyPlanInput
  }

  export type DailyPlanUncheckedCreateInput = {
    id?: number
    userId: number
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: DailyPlanItemUncheckedCreateNestedManyWithoutDailyPlanInput
  }

  export type DailyPlanUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDailyPlansNestedInput
    items?: DailyPlanItemUpdateManyWithoutDailyPlanNestedInput
  }

  export type DailyPlanUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: DailyPlanItemUncheckedUpdateManyWithoutDailyPlanNestedInput
  }

  export type DailyPlanCreateManyInput = {
    id?: number
    userId: number
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DailyPlanUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyPlanUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyPlanItemCreateInput = {
    title: string
    description?: string | null
    time?: Date | string | null
    priority?: number | null
    completed?: boolean
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    dailyPlan: DailyPlanCreateNestedOneWithoutItemsInput
    todo?: TodoCreateNestedOneWithoutDailyPlanItemInput
    habit?: HabitCreateNestedOneWithoutDailyPlanItemInput
  }

  export type DailyPlanItemUncheckedCreateInput = {
    id?: number
    dailyPlanId: number
    todoId?: number | null
    habitId?: number | null
    title: string
    description?: string | null
    time?: Date | string | null
    priority?: number | null
    completed?: boolean
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DailyPlanItemUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dailyPlan?: DailyPlanUpdateOneRequiredWithoutItemsNestedInput
    todo?: TodoUpdateOneWithoutDailyPlanItemNestedInput
    habit?: HabitUpdateOneWithoutDailyPlanItemNestedInput
  }

  export type DailyPlanItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    dailyPlanId?: IntFieldUpdateOperationsInput | number
    todoId?: NullableIntFieldUpdateOperationsInput | number | null
    habitId?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyPlanItemCreateManyInput = {
    id?: number
    dailyPlanId: number
    todoId?: number | null
    habitId?: number | null
    title: string
    description?: string | null
    time?: Date | string | null
    priority?: number | null
    completed?: boolean
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DailyPlanItemUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyPlanItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    dailyPlanId?: IntFieldUpdateOperationsInput | number
    todoId?: NullableIntFieldUpdateOperationsInput | number | null
    habitId?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TodoListRelationFilter = {
    every?: TodoWhereInput
    some?: TodoWhereInput
    none?: TodoWhereInput
  }

  export type HabitListRelationFilter = {
    every?: HabitWhereInput
    some?: HabitWhereInput
    none?: HabitWhereInput
  }

  export type DailyPlanListRelationFilter = {
    every?: DailyPlanWhereInput
    some?: DailyPlanWhereInput
    none?: DailyPlanWhereInput
  }

  export type UserSettingsNullableScalarRelationFilter = {
    is?: UserSettingsWhereInput | null
    isNot?: UserSettingsWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TodoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HabitOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DailyPlanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    appleId?: SortOrder
    googleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    appleId?: SortOrder
    googleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    appleId?: SortOrder
    googleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserSettingsOrderByRelevanceInput = {
    fields: UserSettingsOrderByRelevanceFieldEnum | UserSettingsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserSettingsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    dateChangeTime?: SortOrder
    theme?: SortOrder
    language?: SortOrder
    notifications?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSettingsAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type UserSettingsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    dateChangeTime?: SortOrder
    theme?: SortOrder
    language?: SortOrder
    notifications?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSettingsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    dateChangeTime?: SortOrder
    theme?: SortOrder
    language?: SortOrder
    notifications?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSettingsSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type CategoryOrderByRelevanceInput = {
    fields: CategoryOrderByRelevanceFieldEnum | CategoryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type CategoryNullableScalarRelationFilter = {
    is?: CategoryWhereInput | null
    isNot?: CategoryWhereInput | null
  }

  export type TodoNullableScalarRelationFilter = {
    is?: TodoWhereInput | null
    isNot?: TodoWhereInput | null
  }

  export type DailyPlanItemListRelationFilter = {
    every?: DailyPlanItemWhereInput
    some?: DailyPlanItemWhereInput
    none?: DailyPlanItemWhereInput
  }

  export type DailyPlanItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TodoOrderByRelevanceInput = {
    fields: TodoOrderByRelevanceFieldEnum | TodoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TodoCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    title?: SortOrder
    dueDate?: SortOrder
    description?: SortOrder
    priority?: SortOrder
    parentId?: SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TodoAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    priority?: SortOrder
    parentId?: SortOrder
  }

  export type TodoMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    title?: SortOrder
    dueDate?: SortOrder
    description?: SortOrder
    priority?: SortOrder
    parentId?: SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TodoMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    title?: SortOrder
    dueDate?: SortOrder
    description?: SortOrder
    priority?: SortOrder
    parentId?: SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TodoSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    priority?: SortOrder
    parentId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type HabitOrderByRelevanceInput = {
    fields: HabitOrderByRelevanceFieldEnum | HabitOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type HabitCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    autoInclude?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HabitAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
  }

  export type HabitMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    autoInclude?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HabitMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    autoInclude?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HabitSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
  }

  export type DailyPlanUserIdDateCompoundUniqueInput = {
    userId: number
    date: Date | string
  }

  export type DailyPlanCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DailyPlanAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type DailyPlanMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DailyPlanMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DailyPlanSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type DailyPlanScalarRelationFilter = {
    is?: DailyPlanWhereInput
    isNot?: DailyPlanWhereInput
  }

  export type HabitNullableScalarRelationFilter = {
    is?: HabitWhereInput | null
    isNot?: HabitWhereInput | null
  }

  export type DailyPlanItemOrderByRelevanceInput = {
    fields: DailyPlanItemOrderByRelevanceFieldEnum | DailyPlanItemOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DailyPlanItemDailyPlanIdTodoIdCompoundUniqueInput = {
    dailyPlanId: number
    todoId: number
  }

  export type DailyPlanItemDailyPlanIdHabitIdCompoundUniqueInput = {
    dailyPlanId: number
    habitId: number
  }

  export type DailyPlanItemCountOrderByAggregateInput = {
    id?: SortOrder
    dailyPlanId?: SortOrder
    todoId?: SortOrder
    habitId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    time?: SortOrder
    priority?: SortOrder
    completed?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DailyPlanItemAvgOrderByAggregateInput = {
    id?: SortOrder
    dailyPlanId?: SortOrder
    todoId?: SortOrder
    habitId?: SortOrder
    priority?: SortOrder
    order?: SortOrder
  }

  export type DailyPlanItemMaxOrderByAggregateInput = {
    id?: SortOrder
    dailyPlanId?: SortOrder
    todoId?: SortOrder
    habitId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    time?: SortOrder
    priority?: SortOrder
    completed?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DailyPlanItemMinOrderByAggregateInput = {
    id?: SortOrder
    dailyPlanId?: SortOrder
    todoId?: SortOrder
    habitId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    time?: SortOrder
    priority?: SortOrder
    completed?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DailyPlanItemSumOrderByAggregateInput = {
    id?: SortOrder
    dailyPlanId?: SortOrder
    todoId?: SortOrder
    habitId?: SortOrder
    priority?: SortOrder
    order?: SortOrder
  }

  export type TodoCreateNestedManyWithoutUserInput = {
    create?: XOR<TodoCreateWithoutUserInput, TodoUncheckedCreateWithoutUserInput> | TodoCreateWithoutUserInput[] | TodoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TodoCreateOrConnectWithoutUserInput | TodoCreateOrConnectWithoutUserInput[]
    createMany?: TodoCreateManyUserInputEnvelope
    connect?: TodoWhereUniqueInput | TodoWhereUniqueInput[]
  }

  export type HabitCreateNestedManyWithoutUserInput = {
    create?: XOR<HabitCreateWithoutUserInput, HabitUncheckedCreateWithoutUserInput> | HabitCreateWithoutUserInput[] | HabitUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HabitCreateOrConnectWithoutUserInput | HabitCreateOrConnectWithoutUserInput[]
    createMany?: HabitCreateManyUserInputEnvelope
    connect?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
  }

  export type DailyPlanCreateNestedManyWithoutUserInput = {
    create?: XOR<DailyPlanCreateWithoutUserInput, DailyPlanUncheckedCreateWithoutUserInput> | DailyPlanCreateWithoutUserInput[] | DailyPlanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailyPlanCreateOrConnectWithoutUserInput | DailyPlanCreateOrConnectWithoutUserInput[]
    createMany?: DailyPlanCreateManyUserInputEnvelope
    connect?: DailyPlanWhereUniqueInput | DailyPlanWhereUniqueInput[]
  }

  export type UserSettingsCreateNestedOneWithoutUserInput = {
    create?: XOR<UserSettingsCreateWithoutUserInput, UserSettingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserSettingsCreateOrConnectWithoutUserInput
    connect?: UserSettingsWhereUniqueInput
  }

  export type TodoUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TodoCreateWithoutUserInput, TodoUncheckedCreateWithoutUserInput> | TodoCreateWithoutUserInput[] | TodoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TodoCreateOrConnectWithoutUserInput | TodoCreateOrConnectWithoutUserInput[]
    createMany?: TodoCreateManyUserInputEnvelope
    connect?: TodoWhereUniqueInput | TodoWhereUniqueInput[]
  }

  export type HabitUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<HabitCreateWithoutUserInput, HabitUncheckedCreateWithoutUserInput> | HabitCreateWithoutUserInput[] | HabitUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HabitCreateOrConnectWithoutUserInput | HabitCreateOrConnectWithoutUserInput[]
    createMany?: HabitCreateManyUserInputEnvelope
    connect?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
  }

  export type DailyPlanUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DailyPlanCreateWithoutUserInput, DailyPlanUncheckedCreateWithoutUserInput> | DailyPlanCreateWithoutUserInput[] | DailyPlanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailyPlanCreateOrConnectWithoutUserInput | DailyPlanCreateOrConnectWithoutUserInput[]
    createMany?: DailyPlanCreateManyUserInputEnvelope
    connect?: DailyPlanWhereUniqueInput | DailyPlanWhereUniqueInput[]
  }

  export type UserSettingsUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserSettingsCreateWithoutUserInput, UserSettingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserSettingsCreateOrConnectWithoutUserInput
    connect?: UserSettingsWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TodoUpdateManyWithoutUserNestedInput = {
    create?: XOR<TodoCreateWithoutUserInput, TodoUncheckedCreateWithoutUserInput> | TodoCreateWithoutUserInput[] | TodoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TodoCreateOrConnectWithoutUserInput | TodoCreateOrConnectWithoutUserInput[]
    upsert?: TodoUpsertWithWhereUniqueWithoutUserInput | TodoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TodoCreateManyUserInputEnvelope
    set?: TodoWhereUniqueInput | TodoWhereUniqueInput[]
    disconnect?: TodoWhereUniqueInput | TodoWhereUniqueInput[]
    delete?: TodoWhereUniqueInput | TodoWhereUniqueInput[]
    connect?: TodoWhereUniqueInput | TodoWhereUniqueInput[]
    update?: TodoUpdateWithWhereUniqueWithoutUserInput | TodoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TodoUpdateManyWithWhereWithoutUserInput | TodoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TodoScalarWhereInput | TodoScalarWhereInput[]
  }

  export type HabitUpdateManyWithoutUserNestedInput = {
    create?: XOR<HabitCreateWithoutUserInput, HabitUncheckedCreateWithoutUserInput> | HabitCreateWithoutUserInput[] | HabitUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HabitCreateOrConnectWithoutUserInput | HabitCreateOrConnectWithoutUserInput[]
    upsert?: HabitUpsertWithWhereUniqueWithoutUserInput | HabitUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: HabitCreateManyUserInputEnvelope
    set?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
    disconnect?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
    delete?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
    connect?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
    update?: HabitUpdateWithWhereUniqueWithoutUserInput | HabitUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: HabitUpdateManyWithWhereWithoutUserInput | HabitUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: HabitScalarWhereInput | HabitScalarWhereInput[]
  }

  export type DailyPlanUpdateManyWithoutUserNestedInput = {
    create?: XOR<DailyPlanCreateWithoutUserInput, DailyPlanUncheckedCreateWithoutUserInput> | DailyPlanCreateWithoutUserInput[] | DailyPlanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailyPlanCreateOrConnectWithoutUserInput | DailyPlanCreateOrConnectWithoutUserInput[]
    upsert?: DailyPlanUpsertWithWhereUniqueWithoutUserInput | DailyPlanUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DailyPlanCreateManyUserInputEnvelope
    set?: DailyPlanWhereUniqueInput | DailyPlanWhereUniqueInput[]
    disconnect?: DailyPlanWhereUniqueInput | DailyPlanWhereUniqueInput[]
    delete?: DailyPlanWhereUniqueInput | DailyPlanWhereUniqueInput[]
    connect?: DailyPlanWhereUniqueInput | DailyPlanWhereUniqueInput[]
    update?: DailyPlanUpdateWithWhereUniqueWithoutUserInput | DailyPlanUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DailyPlanUpdateManyWithWhereWithoutUserInput | DailyPlanUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DailyPlanScalarWhereInput | DailyPlanScalarWhereInput[]
  }

  export type UserSettingsUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserSettingsCreateWithoutUserInput, UserSettingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserSettingsCreateOrConnectWithoutUserInput
    upsert?: UserSettingsUpsertWithoutUserInput
    disconnect?: UserSettingsWhereInput | boolean
    delete?: UserSettingsWhereInput | boolean
    connect?: UserSettingsWhereUniqueInput
    update?: XOR<XOR<UserSettingsUpdateToOneWithWhereWithoutUserInput, UserSettingsUpdateWithoutUserInput>, UserSettingsUncheckedUpdateWithoutUserInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TodoUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TodoCreateWithoutUserInput, TodoUncheckedCreateWithoutUserInput> | TodoCreateWithoutUserInput[] | TodoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TodoCreateOrConnectWithoutUserInput | TodoCreateOrConnectWithoutUserInput[]
    upsert?: TodoUpsertWithWhereUniqueWithoutUserInput | TodoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TodoCreateManyUserInputEnvelope
    set?: TodoWhereUniqueInput | TodoWhereUniqueInput[]
    disconnect?: TodoWhereUniqueInput | TodoWhereUniqueInput[]
    delete?: TodoWhereUniqueInput | TodoWhereUniqueInput[]
    connect?: TodoWhereUniqueInput | TodoWhereUniqueInput[]
    update?: TodoUpdateWithWhereUniqueWithoutUserInput | TodoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TodoUpdateManyWithWhereWithoutUserInput | TodoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TodoScalarWhereInput | TodoScalarWhereInput[]
  }

  export type HabitUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<HabitCreateWithoutUserInput, HabitUncheckedCreateWithoutUserInput> | HabitCreateWithoutUserInput[] | HabitUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HabitCreateOrConnectWithoutUserInput | HabitCreateOrConnectWithoutUserInput[]
    upsert?: HabitUpsertWithWhereUniqueWithoutUserInput | HabitUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: HabitCreateManyUserInputEnvelope
    set?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
    disconnect?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
    delete?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
    connect?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
    update?: HabitUpdateWithWhereUniqueWithoutUserInput | HabitUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: HabitUpdateManyWithWhereWithoutUserInput | HabitUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: HabitScalarWhereInput | HabitScalarWhereInput[]
  }

  export type DailyPlanUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DailyPlanCreateWithoutUserInput, DailyPlanUncheckedCreateWithoutUserInput> | DailyPlanCreateWithoutUserInput[] | DailyPlanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailyPlanCreateOrConnectWithoutUserInput | DailyPlanCreateOrConnectWithoutUserInput[]
    upsert?: DailyPlanUpsertWithWhereUniqueWithoutUserInput | DailyPlanUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DailyPlanCreateManyUserInputEnvelope
    set?: DailyPlanWhereUniqueInput | DailyPlanWhereUniqueInput[]
    disconnect?: DailyPlanWhereUniqueInput | DailyPlanWhereUniqueInput[]
    delete?: DailyPlanWhereUniqueInput | DailyPlanWhereUniqueInput[]
    connect?: DailyPlanWhereUniqueInput | DailyPlanWhereUniqueInput[]
    update?: DailyPlanUpdateWithWhereUniqueWithoutUserInput | DailyPlanUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DailyPlanUpdateManyWithWhereWithoutUserInput | DailyPlanUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DailyPlanScalarWhereInput | DailyPlanScalarWhereInput[]
  }

  export type UserSettingsUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserSettingsCreateWithoutUserInput, UserSettingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserSettingsCreateOrConnectWithoutUserInput
    upsert?: UserSettingsUpsertWithoutUserInput
    disconnect?: UserSettingsWhereInput | boolean
    delete?: UserSettingsWhereInput | boolean
    connect?: UserSettingsWhereUniqueInput
    update?: XOR<XOR<UserSettingsUpdateToOneWithWhereWithoutUserInput, UserSettingsUpdateWithoutUserInput>, UserSettingsUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutSettingsInput = {
    create?: XOR<UserCreateWithoutSettingsInput, UserUncheckedCreateWithoutSettingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSettingsInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutSettingsNestedInput = {
    create?: XOR<UserCreateWithoutSettingsInput, UserUncheckedCreateWithoutSettingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSettingsInput
    upsert?: UserUpsertWithoutSettingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSettingsInput, UserUpdateWithoutSettingsInput>, UserUncheckedUpdateWithoutSettingsInput>
  }

  export type TodoCreateNestedManyWithoutCategoryInput = {
    create?: XOR<TodoCreateWithoutCategoryInput, TodoUncheckedCreateWithoutCategoryInput> | TodoCreateWithoutCategoryInput[] | TodoUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TodoCreateOrConnectWithoutCategoryInput | TodoCreateOrConnectWithoutCategoryInput[]
    createMany?: TodoCreateManyCategoryInputEnvelope
    connect?: TodoWhereUniqueInput | TodoWhereUniqueInput[]
  }

  export type HabitCreateNestedManyWithoutCategoryInput = {
    create?: XOR<HabitCreateWithoutCategoryInput, HabitUncheckedCreateWithoutCategoryInput> | HabitCreateWithoutCategoryInput[] | HabitUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: HabitCreateOrConnectWithoutCategoryInput | HabitCreateOrConnectWithoutCategoryInput[]
    createMany?: HabitCreateManyCategoryInputEnvelope
    connect?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
  }

  export type TodoUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<TodoCreateWithoutCategoryInput, TodoUncheckedCreateWithoutCategoryInput> | TodoCreateWithoutCategoryInput[] | TodoUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TodoCreateOrConnectWithoutCategoryInput | TodoCreateOrConnectWithoutCategoryInput[]
    createMany?: TodoCreateManyCategoryInputEnvelope
    connect?: TodoWhereUniqueInput | TodoWhereUniqueInput[]
  }

  export type HabitUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<HabitCreateWithoutCategoryInput, HabitUncheckedCreateWithoutCategoryInput> | HabitCreateWithoutCategoryInput[] | HabitUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: HabitCreateOrConnectWithoutCategoryInput | HabitCreateOrConnectWithoutCategoryInput[]
    createMany?: HabitCreateManyCategoryInputEnvelope
    connect?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
  }

  export type TodoUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<TodoCreateWithoutCategoryInput, TodoUncheckedCreateWithoutCategoryInput> | TodoCreateWithoutCategoryInput[] | TodoUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TodoCreateOrConnectWithoutCategoryInput | TodoCreateOrConnectWithoutCategoryInput[]
    upsert?: TodoUpsertWithWhereUniqueWithoutCategoryInput | TodoUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: TodoCreateManyCategoryInputEnvelope
    set?: TodoWhereUniqueInput | TodoWhereUniqueInput[]
    disconnect?: TodoWhereUniqueInput | TodoWhereUniqueInput[]
    delete?: TodoWhereUniqueInput | TodoWhereUniqueInput[]
    connect?: TodoWhereUniqueInput | TodoWhereUniqueInput[]
    update?: TodoUpdateWithWhereUniqueWithoutCategoryInput | TodoUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: TodoUpdateManyWithWhereWithoutCategoryInput | TodoUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: TodoScalarWhereInput | TodoScalarWhereInput[]
  }

  export type HabitUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<HabitCreateWithoutCategoryInput, HabitUncheckedCreateWithoutCategoryInput> | HabitCreateWithoutCategoryInput[] | HabitUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: HabitCreateOrConnectWithoutCategoryInput | HabitCreateOrConnectWithoutCategoryInput[]
    upsert?: HabitUpsertWithWhereUniqueWithoutCategoryInput | HabitUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: HabitCreateManyCategoryInputEnvelope
    set?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
    disconnect?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
    delete?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
    connect?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
    update?: HabitUpdateWithWhereUniqueWithoutCategoryInput | HabitUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: HabitUpdateManyWithWhereWithoutCategoryInput | HabitUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: HabitScalarWhereInput | HabitScalarWhereInput[]
  }

  export type TodoUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<TodoCreateWithoutCategoryInput, TodoUncheckedCreateWithoutCategoryInput> | TodoCreateWithoutCategoryInput[] | TodoUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TodoCreateOrConnectWithoutCategoryInput | TodoCreateOrConnectWithoutCategoryInput[]
    upsert?: TodoUpsertWithWhereUniqueWithoutCategoryInput | TodoUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: TodoCreateManyCategoryInputEnvelope
    set?: TodoWhereUniqueInput | TodoWhereUniqueInput[]
    disconnect?: TodoWhereUniqueInput | TodoWhereUniqueInput[]
    delete?: TodoWhereUniqueInput | TodoWhereUniqueInput[]
    connect?: TodoWhereUniqueInput | TodoWhereUniqueInput[]
    update?: TodoUpdateWithWhereUniqueWithoutCategoryInput | TodoUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: TodoUpdateManyWithWhereWithoutCategoryInput | TodoUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: TodoScalarWhereInput | TodoScalarWhereInput[]
  }

  export type HabitUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<HabitCreateWithoutCategoryInput, HabitUncheckedCreateWithoutCategoryInput> | HabitCreateWithoutCategoryInput[] | HabitUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: HabitCreateOrConnectWithoutCategoryInput | HabitCreateOrConnectWithoutCategoryInput[]
    upsert?: HabitUpsertWithWhereUniqueWithoutCategoryInput | HabitUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: HabitCreateManyCategoryInputEnvelope
    set?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
    disconnect?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
    delete?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
    connect?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
    update?: HabitUpdateWithWhereUniqueWithoutCategoryInput | HabitUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: HabitUpdateManyWithWhereWithoutCategoryInput | HabitUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: HabitScalarWhereInput | HabitScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTodosInput = {
    create?: XOR<UserCreateWithoutTodosInput, UserUncheckedCreateWithoutTodosInput>
    connectOrCreate?: UserCreateOrConnectWithoutTodosInput
    connect?: UserWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutTodosInput = {
    create?: XOR<CategoryCreateWithoutTodosInput, CategoryUncheckedCreateWithoutTodosInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutTodosInput
    connect?: CategoryWhereUniqueInput
  }

  export type TodoCreateNestedOneWithoutSubtasksInput = {
    create?: XOR<TodoCreateWithoutSubtasksInput, TodoUncheckedCreateWithoutSubtasksInput>
    connectOrCreate?: TodoCreateOrConnectWithoutSubtasksInput
    connect?: TodoWhereUniqueInput
  }

  export type TodoCreateNestedManyWithoutParentInput = {
    create?: XOR<TodoCreateWithoutParentInput, TodoUncheckedCreateWithoutParentInput> | TodoCreateWithoutParentInput[] | TodoUncheckedCreateWithoutParentInput[]
    connectOrCreate?: TodoCreateOrConnectWithoutParentInput | TodoCreateOrConnectWithoutParentInput[]
    createMany?: TodoCreateManyParentInputEnvelope
    connect?: TodoWhereUniqueInput | TodoWhereUniqueInput[]
  }

  export type DailyPlanItemCreateNestedManyWithoutTodoInput = {
    create?: XOR<DailyPlanItemCreateWithoutTodoInput, DailyPlanItemUncheckedCreateWithoutTodoInput> | DailyPlanItemCreateWithoutTodoInput[] | DailyPlanItemUncheckedCreateWithoutTodoInput[]
    connectOrCreate?: DailyPlanItemCreateOrConnectWithoutTodoInput | DailyPlanItemCreateOrConnectWithoutTodoInput[]
    createMany?: DailyPlanItemCreateManyTodoInputEnvelope
    connect?: DailyPlanItemWhereUniqueInput | DailyPlanItemWhereUniqueInput[]
  }

  export type TodoUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<TodoCreateWithoutParentInput, TodoUncheckedCreateWithoutParentInput> | TodoCreateWithoutParentInput[] | TodoUncheckedCreateWithoutParentInput[]
    connectOrCreate?: TodoCreateOrConnectWithoutParentInput | TodoCreateOrConnectWithoutParentInput[]
    createMany?: TodoCreateManyParentInputEnvelope
    connect?: TodoWhereUniqueInput | TodoWhereUniqueInput[]
  }

  export type DailyPlanItemUncheckedCreateNestedManyWithoutTodoInput = {
    create?: XOR<DailyPlanItemCreateWithoutTodoInput, DailyPlanItemUncheckedCreateWithoutTodoInput> | DailyPlanItemCreateWithoutTodoInput[] | DailyPlanItemUncheckedCreateWithoutTodoInput[]
    connectOrCreate?: DailyPlanItemCreateOrConnectWithoutTodoInput | DailyPlanItemCreateOrConnectWithoutTodoInput[]
    createMany?: DailyPlanItemCreateManyTodoInputEnvelope
    connect?: DailyPlanItemWhereUniqueInput | DailyPlanItemWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutTodosNestedInput = {
    create?: XOR<UserCreateWithoutTodosInput, UserUncheckedCreateWithoutTodosInput>
    connectOrCreate?: UserCreateOrConnectWithoutTodosInput
    upsert?: UserUpsertWithoutTodosInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTodosInput, UserUpdateWithoutTodosInput>, UserUncheckedUpdateWithoutTodosInput>
  }

  export type CategoryUpdateOneWithoutTodosNestedInput = {
    create?: XOR<CategoryCreateWithoutTodosInput, CategoryUncheckedCreateWithoutTodosInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutTodosInput
    upsert?: CategoryUpsertWithoutTodosInput
    disconnect?: CategoryWhereInput | boolean
    delete?: CategoryWhereInput | boolean
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutTodosInput, CategoryUpdateWithoutTodosInput>, CategoryUncheckedUpdateWithoutTodosInput>
  }

  export type TodoUpdateOneWithoutSubtasksNestedInput = {
    create?: XOR<TodoCreateWithoutSubtasksInput, TodoUncheckedCreateWithoutSubtasksInput>
    connectOrCreate?: TodoCreateOrConnectWithoutSubtasksInput
    upsert?: TodoUpsertWithoutSubtasksInput
    disconnect?: TodoWhereInput | boolean
    delete?: TodoWhereInput | boolean
    connect?: TodoWhereUniqueInput
    update?: XOR<XOR<TodoUpdateToOneWithWhereWithoutSubtasksInput, TodoUpdateWithoutSubtasksInput>, TodoUncheckedUpdateWithoutSubtasksInput>
  }

  export type TodoUpdateManyWithoutParentNestedInput = {
    create?: XOR<TodoCreateWithoutParentInput, TodoUncheckedCreateWithoutParentInput> | TodoCreateWithoutParentInput[] | TodoUncheckedCreateWithoutParentInput[]
    connectOrCreate?: TodoCreateOrConnectWithoutParentInput | TodoCreateOrConnectWithoutParentInput[]
    upsert?: TodoUpsertWithWhereUniqueWithoutParentInput | TodoUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: TodoCreateManyParentInputEnvelope
    set?: TodoWhereUniqueInput | TodoWhereUniqueInput[]
    disconnect?: TodoWhereUniqueInput | TodoWhereUniqueInput[]
    delete?: TodoWhereUniqueInput | TodoWhereUniqueInput[]
    connect?: TodoWhereUniqueInput | TodoWhereUniqueInput[]
    update?: TodoUpdateWithWhereUniqueWithoutParentInput | TodoUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: TodoUpdateManyWithWhereWithoutParentInput | TodoUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: TodoScalarWhereInput | TodoScalarWhereInput[]
  }

  export type DailyPlanItemUpdateManyWithoutTodoNestedInput = {
    create?: XOR<DailyPlanItemCreateWithoutTodoInput, DailyPlanItemUncheckedCreateWithoutTodoInput> | DailyPlanItemCreateWithoutTodoInput[] | DailyPlanItemUncheckedCreateWithoutTodoInput[]
    connectOrCreate?: DailyPlanItemCreateOrConnectWithoutTodoInput | DailyPlanItemCreateOrConnectWithoutTodoInput[]
    upsert?: DailyPlanItemUpsertWithWhereUniqueWithoutTodoInput | DailyPlanItemUpsertWithWhereUniqueWithoutTodoInput[]
    createMany?: DailyPlanItemCreateManyTodoInputEnvelope
    set?: DailyPlanItemWhereUniqueInput | DailyPlanItemWhereUniqueInput[]
    disconnect?: DailyPlanItemWhereUniqueInput | DailyPlanItemWhereUniqueInput[]
    delete?: DailyPlanItemWhereUniqueInput | DailyPlanItemWhereUniqueInput[]
    connect?: DailyPlanItemWhereUniqueInput | DailyPlanItemWhereUniqueInput[]
    update?: DailyPlanItemUpdateWithWhereUniqueWithoutTodoInput | DailyPlanItemUpdateWithWhereUniqueWithoutTodoInput[]
    updateMany?: DailyPlanItemUpdateManyWithWhereWithoutTodoInput | DailyPlanItemUpdateManyWithWhereWithoutTodoInput[]
    deleteMany?: DailyPlanItemScalarWhereInput | DailyPlanItemScalarWhereInput[]
  }

  export type TodoUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<TodoCreateWithoutParentInput, TodoUncheckedCreateWithoutParentInput> | TodoCreateWithoutParentInput[] | TodoUncheckedCreateWithoutParentInput[]
    connectOrCreate?: TodoCreateOrConnectWithoutParentInput | TodoCreateOrConnectWithoutParentInput[]
    upsert?: TodoUpsertWithWhereUniqueWithoutParentInput | TodoUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: TodoCreateManyParentInputEnvelope
    set?: TodoWhereUniqueInput | TodoWhereUniqueInput[]
    disconnect?: TodoWhereUniqueInput | TodoWhereUniqueInput[]
    delete?: TodoWhereUniqueInput | TodoWhereUniqueInput[]
    connect?: TodoWhereUniqueInput | TodoWhereUniqueInput[]
    update?: TodoUpdateWithWhereUniqueWithoutParentInput | TodoUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: TodoUpdateManyWithWhereWithoutParentInput | TodoUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: TodoScalarWhereInput | TodoScalarWhereInput[]
  }

  export type DailyPlanItemUncheckedUpdateManyWithoutTodoNestedInput = {
    create?: XOR<DailyPlanItemCreateWithoutTodoInput, DailyPlanItemUncheckedCreateWithoutTodoInput> | DailyPlanItemCreateWithoutTodoInput[] | DailyPlanItemUncheckedCreateWithoutTodoInput[]
    connectOrCreate?: DailyPlanItemCreateOrConnectWithoutTodoInput | DailyPlanItemCreateOrConnectWithoutTodoInput[]
    upsert?: DailyPlanItemUpsertWithWhereUniqueWithoutTodoInput | DailyPlanItemUpsertWithWhereUniqueWithoutTodoInput[]
    createMany?: DailyPlanItemCreateManyTodoInputEnvelope
    set?: DailyPlanItemWhereUniqueInput | DailyPlanItemWhereUniqueInput[]
    disconnect?: DailyPlanItemWhereUniqueInput | DailyPlanItemWhereUniqueInput[]
    delete?: DailyPlanItemWhereUniqueInput | DailyPlanItemWhereUniqueInput[]
    connect?: DailyPlanItemWhereUniqueInput | DailyPlanItemWhereUniqueInput[]
    update?: DailyPlanItemUpdateWithWhereUniqueWithoutTodoInput | DailyPlanItemUpdateWithWhereUniqueWithoutTodoInput[]
    updateMany?: DailyPlanItemUpdateManyWithWhereWithoutTodoInput | DailyPlanItemUpdateManyWithWhereWithoutTodoInput[]
    deleteMany?: DailyPlanItemScalarWhereInput | DailyPlanItemScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutHabitsInput = {
    create?: XOR<UserCreateWithoutHabitsInput, UserUncheckedCreateWithoutHabitsInput>
    connectOrCreate?: UserCreateOrConnectWithoutHabitsInput
    connect?: UserWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutHabitsInput = {
    create?: XOR<CategoryCreateWithoutHabitsInput, CategoryUncheckedCreateWithoutHabitsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutHabitsInput
    connect?: CategoryWhereUniqueInput
  }

  export type DailyPlanItemCreateNestedManyWithoutHabitInput = {
    create?: XOR<DailyPlanItemCreateWithoutHabitInput, DailyPlanItemUncheckedCreateWithoutHabitInput> | DailyPlanItemCreateWithoutHabitInput[] | DailyPlanItemUncheckedCreateWithoutHabitInput[]
    connectOrCreate?: DailyPlanItemCreateOrConnectWithoutHabitInput | DailyPlanItemCreateOrConnectWithoutHabitInput[]
    createMany?: DailyPlanItemCreateManyHabitInputEnvelope
    connect?: DailyPlanItemWhereUniqueInput | DailyPlanItemWhereUniqueInput[]
  }

  export type DailyPlanItemUncheckedCreateNestedManyWithoutHabitInput = {
    create?: XOR<DailyPlanItemCreateWithoutHabitInput, DailyPlanItemUncheckedCreateWithoutHabitInput> | DailyPlanItemCreateWithoutHabitInput[] | DailyPlanItemUncheckedCreateWithoutHabitInput[]
    connectOrCreate?: DailyPlanItemCreateOrConnectWithoutHabitInput | DailyPlanItemCreateOrConnectWithoutHabitInput[]
    createMany?: DailyPlanItemCreateManyHabitInputEnvelope
    connect?: DailyPlanItemWhereUniqueInput | DailyPlanItemWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutHabitsNestedInput = {
    create?: XOR<UserCreateWithoutHabitsInput, UserUncheckedCreateWithoutHabitsInput>
    connectOrCreate?: UserCreateOrConnectWithoutHabitsInput
    upsert?: UserUpsertWithoutHabitsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutHabitsInput, UserUpdateWithoutHabitsInput>, UserUncheckedUpdateWithoutHabitsInput>
  }

  export type CategoryUpdateOneWithoutHabitsNestedInput = {
    create?: XOR<CategoryCreateWithoutHabitsInput, CategoryUncheckedCreateWithoutHabitsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutHabitsInput
    upsert?: CategoryUpsertWithoutHabitsInput
    disconnect?: CategoryWhereInput | boolean
    delete?: CategoryWhereInput | boolean
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutHabitsInput, CategoryUpdateWithoutHabitsInput>, CategoryUncheckedUpdateWithoutHabitsInput>
  }

  export type DailyPlanItemUpdateManyWithoutHabitNestedInput = {
    create?: XOR<DailyPlanItemCreateWithoutHabitInput, DailyPlanItemUncheckedCreateWithoutHabitInput> | DailyPlanItemCreateWithoutHabitInput[] | DailyPlanItemUncheckedCreateWithoutHabitInput[]
    connectOrCreate?: DailyPlanItemCreateOrConnectWithoutHabitInput | DailyPlanItemCreateOrConnectWithoutHabitInput[]
    upsert?: DailyPlanItemUpsertWithWhereUniqueWithoutHabitInput | DailyPlanItemUpsertWithWhereUniqueWithoutHabitInput[]
    createMany?: DailyPlanItemCreateManyHabitInputEnvelope
    set?: DailyPlanItemWhereUniqueInput | DailyPlanItemWhereUniqueInput[]
    disconnect?: DailyPlanItemWhereUniqueInput | DailyPlanItemWhereUniqueInput[]
    delete?: DailyPlanItemWhereUniqueInput | DailyPlanItemWhereUniqueInput[]
    connect?: DailyPlanItemWhereUniqueInput | DailyPlanItemWhereUniqueInput[]
    update?: DailyPlanItemUpdateWithWhereUniqueWithoutHabitInput | DailyPlanItemUpdateWithWhereUniqueWithoutHabitInput[]
    updateMany?: DailyPlanItemUpdateManyWithWhereWithoutHabitInput | DailyPlanItemUpdateManyWithWhereWithoutHabitInput[]
    deleteMany?: DailyPlanItemScalarWhereInput | DailyPlanItemScalarWhereInput[]
  }

  export type DailyPlanItemUncheckedUpdateManyWithoutHabitNestedInput = {
    create?: XOR<DailyPlanItemCreateWithoutHabitInput, DailyPlanItemUncheckedCreateWithoutHabitInput> | DailyPlanItemCreateWithoutHabitInput[] | DailyPlanItemUncheckedCreateWithoutHabitInput[]
    connectOrCreate?: DailyPlanItemCreateOrConnectWithoutHabitInput | DailyPlanItemCreateOrConnectWithoutHabitInput[]
    upsert?: DailyPlanItemUpsertWithWhereUniqueWithoutHabitInput | DailyPlanItemUpsertWithWhereUniqueWithoutHabitInput[]
    createMany?: DailyPlanItemCreateManyHabitInputEnvelope
    set?: DailyPlanItemWhereUniqueInput | DailyPlanItemWhereUniqueInput[]
    disconnect?: DailyPlanItemWhereUniqueInput | DailyPlanItemWhereUniqueInput[]
    delete?: DailyPlanItemWhereUniqueInput | DailyPlanItemWhereUniqueInput[]
    connect?: DailyPlanItemWhereUniqueInput | DailyPlanItemWhereUniqueInput[]
    update?: DailyPlanItemUpdateWithWhereUniqueWithoutHabitInput | DailyPlanItemUpdateWithWhereUniqueWithoutHabitInput[]
    updateMany?: DailyPlanItemUpdateManyWithWhereWithoutHabitInput | DailyPlanItemUpdateManyWithWhereWithoutHabitInput[]
    deleteMany?: DailyPlanItemScalarWhereInput | DailyPlanItemScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutDailyPlansInput = {
    create?: XOR<UserCreateWithoutDailyPlansInput, UserUncheckedCreateWithoutDailyPlansInput>
    connectOrCreate?: UserCreateOrConnectWithoutDailyPlansInput
    connect?: UserWhereUniqueInput
  }

  export type DailyPlanItemCreateNestedManyWithoutDailyPlanInput = {
    create?: XOR<DailyPlanItemCreateWithoutDailyPlanInput, DailyPlanItemUncheckedCreateWithoutDailyPlanInput> | DailyPlanItemCreateWithoutDailyPlanInput[] | DailyPlanItemUncheckedCreateWithoutDailyPlanInput[]
    connectOrCreate?: DailyPlanItemCreateOrConnectWithoutDailyPlanInput | DailyPlanItemCreateOrConnectWithoutDailyPlanInput[]
    createMany?: DailyPlanItemCreateManyDailyPlanInputEnvelope
    connect?: DailyPlanItemWhereUniqueInput | DailyPlanItemWhereUniqueInput[]
  }

  export type DailyPlanItemUncheckedCreateNestedManyWithoutDailyPlanInput = {
    create?: XOR<DailyPlanItemCreateWithoutDailyPlanInput, DailyPlanItemUncheckedCreateWithoutDailyPlanInput> | DailyPlanItemCreateWithoutDailyPlanInput[] | DailyPlanItemUncheckedCreateWithoutDailyPlanInput[]
    connectOrCreate?: DailyPlanItemCreateOrConnectWithoutDailyPlanInput | DailyPlanItemCreateOrConnectWithoutDailyPlanInput[]
    createMany?: DailyPlanItemCreateManyDailyPlanInputEnvelope
    connect?: DailyPlanItemWhereUniqueInput | DailyPlanItemWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutDailyPlansNestedInput = {
    create?: XOR<UserCreateWithoutDailyPlansInput, UserUncheckedCreateWithoutDailyPlansInput>
    connectOrCreate?: UserCreateOrConnectWithoutDailyPlansInput
    upsert?: UserUpsertWithoutDailyPlansInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDailyPlansInput, UserUpdateWithoutDailyPlansInput>, UserUncheckedUpdateWithoutDailyPlansInput>
  }

  export type DailyPlanItemUpdateManyWithoutDailyPlanNestedInput = {
    create?: XOR<DailyPlanItemCreateWithoutDailyPlanInput, DailyPlanItemUncheckedCreateWithoutDailyPlanInput> | DailyPlanItemCreateWithoutDailyPlanInput[] | DailyPlanItemUncheckedCreateWithoutDailyPlanInput[]
    connectOrCreate?: DailyPlanItemCreateOrConnectWithoutDailyPlanInput | DailyPlanItemCreateOrConnectWithoutDailyPlanInput[]
    upsert?: DailyPlanItemUpsertWithWhereUniqueWithoutDailyPlanInput | DailyPlanItemUpsertWithWhereUniqueWithoutDailyPlanInput[]
    createMany?: DailyPlanItemCreateManyDailyPlanInputEnvelope
    set?: DailyPlanItemWhereUniqueInput | DailyPlanItemWhereUniqueInput[]
    disconnect?: DailyPlanItemWhereUniqueInput | DailyPlanItemWhereUniqueInput[]
    delete?: DailyPlanItemWhereUniqueInput | DailyPlanItemWhereUniqueInput[]
    connect?: DailyPlanItemWhereUniqueInput | DailyPlanItemWhereUniqueInput[]
    update?: DailyPlanItemUpdateWithWhereUniqueWithoutDailyPlanInput | DailyPlanItemUpdateWithWhereUniqueWithoutDailyPlanInput[]
    updateMany?: DailyPlanItemUpdateManyWithWhereWithoutDailyPlanInput | DailyPlanItemUpdateManyWithWhereWithoutDailyPlanInput[]
    deleteMany?: DailyPlanItemScalarWhereInput | DailyPlanItemScalarWhereInput[]
  }

  export type DailyPlanItemUncheckedUpdateManyWithoutDailyPlanNestedInput = {
    create?: XOR<DailyPlanItemCreateWithoutDailyPlanInput, DailyPlanItemUncheckedCreateWithoutDailyPlanInput> | DailyPlanItemCreateWithoutDailyPlanInput[] | DailyPlanItemUncheckedCreateWithoutDailyPlanInput[]
    connectOrCreate?: DailyPlanItemCreateOrConnectWithoutDailyPlanInput | DailyPlanItemCreateOrConnectWithoutDailyPlanInput[]
    upsert?: DailyPlanItemUpsertWithWhereUniqueWithoutDailyPlanInput | DailyPlanItemUpsertWithWhereUniqueWithoutDailyPlanInput[]
    createMany?: DailyPlanItemCreateManyDailyPlanInputEnvelope
    set?: DailyPlanItemWhereUniqueInput | DailyPlanItemWhereUniqueInput[]
    disconnect?: DailyPlanItemWhereUniqueInput | DailyPlanItemWhereUniqueInput[]
    delete?: DailyPlanItemWhereUniqueInput | DailyPlanItemWhereUniqueInput[]
    connect?: DailyPlanItemWhereUniqueInput | DailyPlanItemWhereUniqueInput[]
    update?: DailyPlanItemUpdateWithWhereUniqueWithoutDailyPlanInput | DailyPlanItemUpdateWithWhereUniqueWithoutDailyPlanInput[]
    updateMany?: DailyPlanItemUpdateManyWithWhereWithoutDailyPlanInput | DailyPlanItemUpdateManyWithWhereWithoutDailyPlanInput[]
    deleteMany?: DailyPlanItemScalarWhereInput | DailyPlanItemScalarWhereInput[]
  }

  export type DailyPlanCreateNestedOneWithoutItemsInput = {
    create?: XOR<DailyPlanCreateWithoutItemsInput, DailyPlanUncheckedCreateWithoutItemsInput>
    connectOrCreate?: DailyPlanCreateOrConnectWithoutItemsInput
    connect?: DailyPlanWhereUniqueInput
  }

  export type TodoCreateNestedOneWithoutDailyPlanItemInput = {
    create?: XOR<TodoCreateWithoutDailyPlanItemInput, TodoUncheckedCreateWithoutDailyPlanItemInput>
    connectOrCreate?: TodoCreateOrConnectWithoutDailyPlanItemInput
    connect?: TodoWhereUniqueInput
  }

  export type HabitCreateNestedOneWithoutDailyPlanItemInput = {
    create?: XOR<HabitCreateWithoutDailyPlanItemInput, HabitUncheckedCreateWithoutDailyPlanItemInput>
    connectOrCreate?: HabitCreateOrConnectWithoutDailyPlanItemInput
    connect?: HabitWhereUniqueInput
  }

  export type DailyPlanUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<DailyPlanCreateWithoutItemsInput, DailyPlanUncheckedCreateWithoutItemsInput>
    connectOrCreate?: DailyPlanCreateOrConnectWithoutItemsInput
    upsert?: DailyPlanUpsertWithoutItemsInput
    connect?: DailyPlanWhereUniqueInput
    update?: XOR<XOR<DailyPlanUpdateToOneWithWhereWithoutItemsInput, DailyPlanUpdateWithoutItemsInput>, DailyPlanUncheckedUpdateWithoutItemsInput>
  }

  export type TodoUpdateOneWithoutDailyPlanItemNestedInput = {
    create?: XOR<TodoCreateWithoutDailyPlanItemInput, TodoUncheckedCreateWithoutDailyPlanItemInput>
    connectOrCreate?: TodoCreateOrConnectWithoutDailyPlanItemInput
    upsert?: TodoUpsertWithoutDailyPlanItemInput
    disconnect?: TodoWhereInput | boolean
    delete?: TodoWhereInput | boolean
    connect?: TodoWhereUniqueInput
    update?: XOR<XOR<TodoUpdateToOneWithWhereWithoutDailyPlanItemInput, TodoUpdateWithoutDailyPlanItemInput>, TodoUncheckedUpdateWithoutDailyPlanItemInput>
  }

  export type HabitUpdateOneWithoutDailyPlanItemNestedInput = {
    create?: XOR<HabitCreateWithoutDailyPlanItemInput, HabitUncheckedCreateWithoutDailyPlanItemInput>
    connectOrCreate?: HabitCreateOrConnectWithoutDailyPlanItemInput
    upsert?: HabitUpsertWithoutDailyPlanItemInput
    disconnect?: HabitWhereInput | boolean
    delete?: HabitWhereInput | boolean
    connect?: HabitWhereUniqueInput
    update?: XOR<XOR<HabitUpdateToOneWithWhereWithoutDailyPlanItemInput, HabitUpdateWithoutDailyPlanItemInput>, HabitUncheckedUpdateWithoutDailyPlanItemInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type TodoCreateWithoutUserInput = {
    title: string
    dueDate?: Date | string | null
    description?: string | null
    priority?: number | null
    completed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: CategoryCreateNestedOneWithoutTodosInput
    parent?: TodoCreateNestedOneWithoutSubtasksInput
    subtasks?: TodoCreateNestedManyWithoutParentInput
    dailyPlanItem?: DailyPlanItemCreateNestedManyWithoutTodoInput
  }

  export type TodoUncheckedCreateWithoutUserInput = {
    id?: number
    categoryId?: number | null
    title: string
    dueDate?: Date | string | null
    description?: string | null
    priority?: number | null
    parentId?: number | null
    completed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    subtasks?: TodoUncheckedCreateNestedManyWithoutParentInput
    dailyPlanItem?: DailyPlanItemUncheckedCreateNestedManyWithoutTodoInput
  }

  export type TodoCreateOrConnectWithoutUserInput = {
    where: TodoWhereUniqueInput
    create: XOR<TodoCreateWithoutUserInput, TodoUncheckedCreateWithoutUserInput>
  }

  export type TodoCreateManyUserInputEnvelope = {
    data: TodoCreateManyUserInput | TodoCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type HabitCreateWithoutUserInput = {
    title: string
    description?: string | null
    autoInclude?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: CategoryCreateNestedOneWithoutHabitsInput
    dailyPlanItem?: DailyPlanItemCreateNestedManyWithoutHabitInput
  }

  export type HabitUncheckedCreateWithoutUserInput = {
    id?: number
    categoryId?: number | null
    title: string
    description?: string | null
    autoInclude?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    dailyPlanItem?: DailyPlanItemUncheckedCreateNestedManyWithoutHabitInput
  }

  export type HabitCreateOrConnectWithoutUserInput = {
    where: HabitWhereUniqueInput
    create: XOR<HabitCreateWithoutUserInput, HabitUncheckedCreateWithoutUserInput>
  }

  export type HabitCreateManyUserInputEnvelope = {
    data: HabitCreateManyUserInput | HabitCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DailyPlanCreateWithoutUserInput = {
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: DailyPlanItemCreateNestedManyWithoutDailyPlanInput
  }

  export type DailyPlanUncheckedCreateWithoutUserInput = {
    id?: number
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: DailyPlanItemUncheckedCreateNestedManyWithoutDailyPlanInput
  }

  export type DailyPlanCreateOrConnectWithoutUserInput = {
    where: DailyPlanWhereUniqueInput
    create: XOR<DailyPlanCreateWithoutUserInput, DailyPlanUncheckedCreateWithoutUserInput>
  }

  export type DailyPlanCreateManyUserInputEnvelope = {
    data: DailyPlanCreateManyUserInput | DailyPlanCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserSettingsCreateWithoutUserInput = {
    dateChangeTime?: string
    theme?: string
    language?: string
    notifications?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSettingsUncheckedCreateWithoutUserInput = {
    id?: number
    dateChangeTime?: string
    theme?: string
    language?: string
    notifications?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSettingsCreateOrConnectWithoutUserInput = {
    where: UserSettingsWhereUniqueInput
    create: XOR<UserSettingsCreateWithoutUserInput, UserSettingsUncheckedCreateWithoutUserInput>
  }

  export type TodoUpsertWithWhereUniqueWithoutUserInput = {
    where: TodoWhereUniqueInput
    update: XOR<TodoUpdateWithoutUserInput, TodoUncheckedUpdateWithoutUserInput>
    create: XOR<TodoCreateWithoutUserInput, TodoUncheckedCreateWithoutUserInput>
  }

  export type TodoUpdateWithWhereUniqueWithoutUserInput = {
    where: TodoWhereUniqueInput
    data: XOR<TodoUpdateWithoutUserInput, TodoUncheckedUpdateWithoutUserInput>
  }

  export type TodoUpdateManyWithWhereWithoutUserInput = {
    where: TodoScalarWhereInput
    data: XOR<TodoUpdateManyMutationInput, TodoUncheckedUpdateManyWithoutUserInput>
  }

  export type TodoScalarWhereInput = {
    AND?: TodoScalarWhereInput | TodoScalarWhereInput[]
    OR?: TodoScalarWhereInput[]
    NOT?: TodoScalarWhereInput | TodoScalarWhereInput[]
    id?: IntFilter<"Todo"> | number
    userId?: IntFilter<"Todo"> | number
    categoryId?: IntNullableFilter<"Todo"> | number | null
    title?: StringFilter<"Todo"> | string
    dueDate?: DateTimeNullableFilter<"Todo"> | Date | string | null
    description?: StringNullableFilter<"Todo"> | string | null
    priority?: IntNullableFilter<"Todo"> | number | null
    parentId?: IntNullableFilter<"Todo"> | number | null
    completed?: BoolFilter<"Todo"> | boolean
    createdAt?: DateTimeFilter<"Todo"> | Date | string
    updatedAt?: DateTimeFilter<"Todo"> | Date | string
  }

  export type HabitUpsertWithWhereUniqueWithoutUserInput = {
    where: HabitWhereUniqueInput
    update: XOR<HabitUpdateWithoutUserInput, HabitUncheckedUpdateWithoutUserInput>
    create: XOR<HabitCreateWithoutUserInput, HabitUncheckedCreateWithoutUserInput>
  }

  export type HabitUpdateWithWhereUniqueWithoutUserInput = {
    where: HabitWhereUniqueInput
    data: XOR<HabitUpdateWithoutUserInput, HabitUncheckedUpdateWithoutUserInput>
  }

  export type HabitUpdateManyWithWhereWithoutUserInput = {
    where: HabitScalarWhereInput
    data: XOR<HabitUpdateManyMutationInput, HabitUncheckedUpdateManyWithoutUserInput>
  }

  export type HabitScalarWhereInput = {
    AND?: HabitScalarWhereInput | HabitScalarWhereInput[]
    OR?: HabitScalarWhereInput[]
    NOT?: HabitScalarWhereInput | HabitScalarWhereInput[]
    id?: IntFilter<"Habit"> | number
    userId?: IntFilter<"Habit"> | number
    categoryId?: IntNullableFilter<"Habit"> | number | null
    title?: StringFilter<"Habit"> | string
    description?: StringNullableFilter<"Habit"> | string | null
    autoInclude?: BoolFilter<"Habit"> | boolean
    createdAt?: DateTimeFilter<"Habit"> | Date | string
    updatedAt?: DateTimeFilter<"Habit"> | Date | string
  }

  export type DailyPlanUpsertWithWhereUniqueWithoutUserInput = {
    where: DailyPlanWhereUniqueInput
    update: XOR<DailyPlanUpdateWithoutUserInput, DailyPlanUncheckedUpdateWithoutUserInput>
    create: XOR<DailyPlanCreateWithoutUserInput, DailyPlanUncheckedCreateWithoutUserInput>
  }

  export type DailyPlanUpdateWithWhereUniqueWithoutUserInput = {
    where: DailyPlanWhereUniqueInput
    data: XOR<DailyPlanUpdateWithoutUserInput, DailyPlanUncheckedUpdateWithoutUserInput>
  }

  export type DailyPlanUpdateManyWithWhereWithoutUserInput = {
    where: DailyPlanScalarWhereInput
    data: XOR<DailyPlanUpdateManyMutationInput, DailyPlanUncheckedUpdateManyWithoutUserInput>
  }

  export type DailyPlanScalarWhereInput = {
    AND?: DailyPlanScalarWhereInput | DailyPlanScalarWhereInput[]
    OR?: DailyPlanScalarWhereInput[]
    NOT?: DailyPlanScalarWhereInput | DailyPlanScalarWhereInput[]
    id?: IntFilter<"DailyPlan"> | number
    userId?: IntFilter<"DailyPlan"> | number
    date?: DateTimeFilter<"DailyPlan"> | Date | string
    createdAt?: DateTimeFilter<"DailyPlan"> | Date | string
    updatedAt?: DateTimeFilter<"DailyPlan"> | Date | string
  }

  export type UserSettingsUpsertWithoutUserInput = {
    update: XOR<UserSettingsUpdateWithoutUserInput, UserSettingsUncheckedUpdateWithoutUserInput>
    create: XOR<UserSettingsCreateWithoutUserInput, UserSettingsUncheckedCreateWithoutUserInput>
    where?: UserSettingsWhereInput
  }

  export type UserSettingsUpdateToOneWithWhereWithoutUserInput = {
    where?: UserSettingsWhereInput
    data: XOR<UserSettingsUpdateWithoutUserInput, UserSettingsUncheckedUpdateWithoutUserInput>
  }

  export type UserSettingsUpdateWithoutUserInput = {
    dateChangeTime?: StringFieldUpdateOperationsInput | string
    theme?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    notifications?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSettingsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateChangeTime?: StringFieldUpdateOperationsInput | string
    theme?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    notifications?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutSettingsInput = {
    email: string
    password: string
    appleId?: string | null
    googleId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    todos?: TodoCreateNestedManyWithoutUserInput
    habits?: HabitCreateNestedManyWithoutUserInput
    dailyPlans?: DailyPlanCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSettingsInput = {
    id?: number
    email: string
    password: string
    appleId?: string | null
    googleId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    todos?: TodoUncheckedCreateNestedManyWithoutUserInput
    habits?: HabitUncheckedCreateNestedManyWithoutUserInput
    dailyPlans?: DailyPlanUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSettingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSettingsInput, UserUncheckedCreateWithoutSettingsInput>
  }

  export type UserUpsertWithoutSettingsInput = {
    update: XOR<UserUpdateWithoutSettingsInput, UserUncheckedUpdateWithoutSettingsInput>
    create: XOR<UserCreateWithoutSettingsInput, UserUncheckedCreateWithoutSettingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSettingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSettingsInput, UserUncheckedUpdateWithoutSettingsInput>
  }

  export type UserUpdateWithoutSettingsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    appleId?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    todos?: TodoUpdateManyWithoutUserNestedInput
    habits?: HabitUpdateManyWithoutUserNestedInput
    dailyPlans?: DailyPlanUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSettingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    appleId?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    todos?: TodoUncheckedUpdateManyWithoutUserNestedInput
    habits?: HabitUncheckedUpdateManyWithoutUserNestedInput
    dailyPlans?: DailyPlanUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TodoCreateWithoutCategoryInput = {
    title: string
    dueDate?: Date | string | null
    description?: string | null
    priority?: number | null
    completed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTodosInput
    parent?: TodoCreateNestedOneWithoutSubtasksInput
    subtasks?: TodoCreateNestedManyWithoutParentInput
    dailyPlanItem?: DailyPlanItemCreateNestedManyWithoutTodoInput
  }

  export type TodoUncheckedCreateWithoutCategoryInput = {
    id?: number
    userId: number
    title: string
    dueDate?: Date | string | null
    description?: string | null
    priority?: number | null
    parentId?: number | null
    completed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    subtasks?: TodoUncheckedCreateNestedManyWithoutParentInput
    dailyPlanItem?: DailyPlanItemUncheckedCreateNestedManyWithoutTodoInput
  }

  export type TodoCreateOrConnectWithoutCategoryInput = {
    where: TodoWhereUniqueInput
    create: XOR<TodoCreateWithoutCategoryInput, TodoUncheckedCreateWithoutCategoryInput>
  }

  export type TodoCreateManyCategoryInputEnvelope = {
    data: TodoCreateManyCategoryInput | TodoCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type HabitCreateWithoutCategoryInput = {
    title: string
    description?: string | null
    autoInclude?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutHabitsInput
    dailyPlanItem?: DailyPlanItemCreateNestedManyWithoutHabitInput
  }

  export type HabitUncheckedCreateWithoutCategoryInput = {
    id?: number
    userId: number
    title: string
    description?: string | null
    autoInclude?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    dailyPlanItem?: DailyPlanItemUncheckedCreateNestedManyWithoutHabitInput
  }

  export type HabitCreateOrConnectWithoutCategoryInput = {
    where: HabitWhereUniqueInput
    create: XOR<HabitCreateWithoutCategoryInput, HabitUncheckedCreateWithoutCategoryInput>
  }

  export type HabitCreateManyCategoryInputEnvelope = {
    data: HabitCreateManyCategoryInput | HabitCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type TodoUpsertWithWhereUniqueWithoutCategoryInput = {
    where: TodoWhereUniqueInput
    update: XOR<TodoUpdateWithoutCategoryInput, TodoUncheckedUpdateWithoutCategoryInput>
    create: XOR<TodoCreateWithoutCategoryInput, TodoUncheckedCreateWithoutCategoryInput>
  }

  export type TodoUpdateWithWhereUniqueWithoutCategoryInput = {
    where: TodoWhereUniqueInput
    data: XOR<TodoUpdateWithoutCategoryInput, TodoUncheckedUpdateWithoutCategoryInput>
  }

  export type TodoUpdateManyWithWhereWithoutCategoryInput = {
    where: TodoScalarWhereInput
    data: XOR<TodoUpdateManyMutationInput, TodoUncheckedUpdateManyWithoutCategoryInput>
  }

  export type HabitUpsertWithWhereUniqueWithoutCategoryInput = {
    where: HabitWhereUniqueInput
    update: XOR<HabitUpdateWithoutCategoryInput, HabitUncheckedUpdateWithoutCategoryInput>
    create: XOR<HabitCreateWithoutCategoryInput, HabitUncheckedCreateWithoutCategoryInput>
  }

  export type HabitUpdateWithWhereUniqueWithoutCategoryInput = {
    where: HabitWhereUniqueInput
    data: XOR<HabitUpdateWithoutCategoryInput, HabitUncheckedUpdateWithoutCategoryInput>
  }

  export type HabitUpdateManyWithWhereWithoutCategoryInput = {
    where: HabitScalarWhereInput
    data: XOR<HabitUpdateManyMutationInput, HabitUncheckedUpdateManyWithoutCategoryInput>
  }

  export type UserCreateWithoutTodosInput = {
    email: string
    password: string
    appleId?: string | null
    googleId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    habits?: HabitCreateNestedManyWithoutUserInput
    dailyPlans?: DailyPlanCreateNestedManyWithoutUserInput
    settings?: UserSettingsCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTodosInput = {
    id?: number
    email: string
    password: string
    appleId?: string | null
    googleId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    habits?: HabitUncheckedCreateNestedManyWithoutUserInput
    dailyPlans?: DailyPlanUncheckedCreateNestedManyWithoutUserInput
    settings?: UserSettingsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTodosInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTodosInput, UserUncheckedCreateWithoutTodosInput>
  }

  export type CategoryCreateWithoutTodosInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    habits?: HabitCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutTodosInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    habits?: HabitUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutTodosInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutTodosInput, CategoryUncheckedCreateWithoutTodosInput>
  }

  export type TodoCreateWithoutSubtasksInput = {
    title: string
    dueDate?: Date | string | null
    description?: string | null
    priority?: number | null
    completed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTodosInput
    category?: CategoryCreateNestedOneWithoutTodosInput
    parent?: TodoCreateNestedOneWithoutSubtasksInput
    dailyPlanItem?: DailyPlanItemCreateNestedManyWithoutTodoInput
  }

  export type TodoUncheckedCreateWithoutSubtasksInput = {
    id?: number
    userId: number
    categoryId?: number | null
    title: string
    dueDate?: Date | string | null
    description?: string | null
    priority?: number | null
    parentId?: number | null
    completed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    dailyPlanItem?: DailyPlanItemUncheckedCreateNestedManyWithoutTodoInput
  }

  export type TodoCreateOrConnectWithoutSubtasksInput = {
    where: TodoWhereUniqueInput
    create: XOR<TodoCreateWithoutSubtasksInput, TodoUncheckedCreateWithoutSubtasksInput>
  }

  export type TodoCreateWithoutParentInput = {
    title: string
    dueDate?: Date | string | null
    description?: string | null
    priority?: number | null
    completed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTodosInput
    category?: CategoryCreateNestedOneWithoutTodosInput
    subtasks?: TodoCreateNestedManyWithoutParentInput
    dailyPlanItem?: DailyPlanItemCreateNestedManyWithoutTodoInput
  }

  export type TodoUncheckedCreateWithoutParentInput = {
    id?: number
    userId: number
    categoryId?: number | null
    title: string
    dueDate?: Date | string | null
    description?: string | null
    priority?: number | null
    completed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    subtasks?: TodoUncheckedCreateNestedManyWithoutParentInput
    dailyPlanItem?: DailyPlanItemUncheckedCreateNestedManyWithoutTodoInput
  }

  export type TodoCreateOrConnectWithoutParentInput = {
    where: TodoWhereUniqueInput
    create: XOR<TodoCreateWithoutParentInput, TodoUncheckedCreateWithoutParentInput>
  }

  export type TodoCreateManyParentInputEnvelope = {
    data: TodoCreateManyParentInput | TodoCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type DailyPlanItemCreateWithoutTodoInput = {
    title: string
    description?: string | null
    time?: Date | string | null
    priority?: number | null
    completed?: boolean
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    dailyPlan: DailyPlanCreateNestedOneWithoutItemsInput
    habit?: HabitCreateNestedOneWithoutDailyPlanItemInput
  }

  export type DailyPlanItemUncheckedCreateWithoutTodoInput = {
    id?: number
    dailyPlanId: number
    habitId?: number | null
    title: string
    description?: string | null
    time?: Date | string | null
    priority?: number | null
    completed?: boolean
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DailyPlanItemCreateOrConnectWithoutTodoInput = {
    where: DailyPlanItemWhereUniqueInput
    create: XOR<DailyPlanItemCreateWithoutTodoInput, DailyPlanItemUncheckedCreateWithoutTodoInput>
  }

  export type DailyPlanItemCreateManyTodoInputEnvelope = {
    data: DailyPlanItemCreateManyTodoInput | DailyPlanItemCreateManyTodoInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutTodosInput = {
    update: XOR<UserUpdateWithoutTodosInput, UserUncheckedUpdateWithoutTodosInput>
    create: XOR<UserCreateWithoutTodosInput, UserUncheckedCreateWithoutTodosInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTodosInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTodosInput, UserUncheckedUpdateWithoutTodosInput>
  }

  export type UserUpdateWithoutTodosInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    appleId?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    habits?: HabitUpdateManyWithoutUserNestedInput
    dailyPlans?: DailyPlanUpdateManyWithoutUserNestedInput
    settings?: UserSettingsUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTodosInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    appleId?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    habits?: HabitUncheckedUpdateManyWithoutUserNestedInput
    dailyPlans?: DailyPlanUncheckedUpdateManyWithoutUserNestedInput
    settings?: UserSettingsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type CategoryUpsertWithoutTodosInput = {
    update: XOR<CategoryUpdateWithoutTodosInput, CategoryUncheckedUpdateWithoutTodosInput>
    create: XOR<CategoryCreateWithoutTodosInput, CategoryUncheckedCreateWithoutTodosInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutTodosInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutTodosInput, CategoryUncheckedUpdateWithoutTodosInput>
  }

  export type CategoryUpdateWithoutTodosInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    habits?: HabitUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutTodosInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    habits?: HabitUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type TodoUpsertWithoutSubtasksInput = {
    update: XOR<TodoUpdateWithoutSubtasksInput, TodoUncheckedUpdateWithoutSubtasksInput>
    create: XOR<TodoCreateWithoutSubtasksInput, TodoUncheckedCreateWithoutSubtasksInput>
    where?: TodoWhereInput
  }

  export type TodoUpdateToOneWithWhereWithoutSubtasksInput = {
    where?: TodoWhereInput
    data: XOR<TodoUpdateWithoutSubtasksInput, TodoUncheckedUpdateWithoutSubtasksInput>
  }

  export type TodoUpdateWithoutSubtasksInput = {
    title?: StringFieldUpdateOperationsInput | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTodosNestedInput
    category?: CategoryUpdateOneWithoutTodosNestedInput
    parent?: TodoUpdateOneWithoutSubtasksNestedInput
    dailyPlanItem?: DailyPlanItemUpdateManyWithoutTodoNestedInput
  }

  export type TodoUncheckedUpdateWithoutSubtasksInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dailyPlanItem?: DailyPlanItemUncheckedUpdateManyWithoutTodoNestedInput
  }

  export type TodoUpsertWithWhereUniqueWithoutParentInput = {
    where: TodoWhereUniqueInput
    update: XOR<TodoUpdateWithoutParentInput, TodoUncheckedUpdateWithoutParentInput>
    create: XOR<TodoCreateWithoutParentInput, TodoUncheckedCreateWithoutParentInput>
  }

  export type TodoUpdateWithWhereUniqueWithoutParentInput = {
    where: TodoWhereUniqueInput
    data: XOR<TodoUpdateWithoutParentInput, TodoUncheckedUpdateWithoutParentInput>
  }

  export type TodoUpdateManyWithWhereWithoutParentInput = {
    where: TodoScalarWhereInput
    data: XOR<TodoUpdateManyMutationInput, TodoUncheckedUpdateManyWithoutParentInput>
  }

  export type DailyPlanItemUpsertWithWhereUniqueWithoutTodoInput = {
    where: DailyPlanItemWhereUniqueInput
    update: XOR<DailyPlanItemUpdateWithoutTodoInput, DailyPlanItemUncheckedUpdateWithoutTodoInput>
    create: XOR<DailyPlanItemCreateWithoutTodoInput, DailyPlanItemUncheckedCreateWithoutTodoInput>
  }

  export type DailyPlanItemUpdateWithWhereUniqueWithoutTodoInput = {
    where: DailyPlanItemWhereUniqueInput
    data: XOR<DailyPlanItemUpdateWithoutTodoInput, DailyPlanItemUncheckedUpdateWithoutTodoInput>
  }

  export type DailyPlanItemUpdateManyWithWhereWithoutTodoInput = {
    where: DailyPlanItemScalarWhereInput
    data: XOR<DailyPlanItemUpdateManyMutationInput, DailyPlanItemUncheckedUpdateManyWithoutTodoInput>
  }

  export type DailyPlanItemScalarWhereInput = {
    AND?: DailyPlanItemScalarWhereInput | DailyPlanItemScalarWhereInput[]
    OR?: DailyPlanItemScalarWhereInput[]
    NOT?: DailyPlanItemScalarWhereInput | DailyPlanItemScalarWhereInput[]
    id?: IntFilter<"DailyPlanItem"> | number
    dailyPlanId?: IntFilter<"DailyPlanItem"> | number
    todoId?: IntNullableFilter<"DailyPlanItem"> | number | null
    habitId?: IntNullableFilter<"DailyPlanItem"> | number | null
    title?: StringFilter<"DailyPlanItem"> | string
    description?: StringNullableFilter<"DailyPlanItem"> | string | null
    time?: DateTimeNullableFilter<"DailyPlanItem"> | Date | string | null
    priority?: IntNullableFilter<"DailyPlanItem"> | number | null
    completed?: BoolFilter<"DailyPlanItem"> | boolean
    order?: IntFilter<"DailyPlanItem"> | number
    createdAt?: DateTimeFilter<"DailyPlanItem"> | Date | string
    updatedAt?: DateTimeFilter<"DailyPlanItem"> | Date | string
  }

  export type UserCreateWithoutHabitsInput = {
    email: string
    password: string
    appleId?: string | null
    googleId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    todos?: TodoCreateNestedManyWithoutUserInput
    dailyPlans?: DailyPlanCreateNestedManyWithoutUserInput
    settings?: UserSettingsCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutHabitsInput = {
    id?: number
    email: string
    password: string
    appleId?: string | null
    googleId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    todos?: TodoUncheckedCreateNestedManyWithoutUserInput
    dailyPlans?: DailyPlanUncheckedCreateNestedManyWithoutUserInput
    settings?: UserSettingsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutHabitsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutHabitsInput, UserUncheckedCreateWithoutHabitsInput>
  }

  export type CategoryCreateWithoutHabitsInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    todos?: TodoCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutHabitsInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    todos?: TodoUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutHabitsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutHabitsInput, CategoryUncheckedCreateWithoutHabitsInput>
  }

  export type DailyPlanItemCreateWithoutHabitInput = {
    title: string
    description?: string | null
    time?: Date | string | null
    priority?: number | null
    completed?: boolean
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    dailyPlan: DailyPlanCreateNestedOneWithoutItemsInput
    todo?: TodoCreateNestedOneWithoutDailyPlanItemInput
  }

  export type DailyPlanItemUncheckedCreateWithoutHabitInput = {
    id?: number
    dailyPlanId: number
    todoId?: number | null
    title: string
    description?: string | null
    time?: Date | string | null
    priority?: number | null
    completed?: boolean
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DailyPlanItemCreateOrConnectWithoutHabitInput = {
    where: DailyPlanItemWhereUniqueInput
    create: XOR<DailyPlanItemCreateWithoutHabitInput, DailyPlanItemUncheckedCreateWithoutHabitInput>
  }

  export type DailyPlanItemCreateManyHabitInputEnvelope = {
    data: DailyPlanItemCreateManyHabitInput | DailyPlanItemCreateManyHabitInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutHabitsInput = {
    update: XOR<UserUpdateWithoutHabitsInput, UserUncheckedUpdateWithoutHabitsInput>
    create: XOR<UserCreateWithoutHabitsInput, UserUncheckedCreateWithoutHabitsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutHabitsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutHabitsInput, UserUncheckedUpdateWithoutHabitsInput>
  }

  export type UserUpdateWithoutHabitsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    appleId?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    todos?: TodoUpdateManyWithoutUserNestedInput
    dailyPlans?: DailyPlanUpdateManyWithoutUserNestedInput
    settings?: UserSettingsUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutHabitsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    appleId?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    todos?: TodoUncheckedUpdateManyWithoutUserNestedInput
    dailyPlans?: DailyPlanUncheckedUpdateManyWithoutUserNestedInput
    settings?: UserSettingsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type CategoryUpsertWithoutHabitsInput = {
    update: XOR<CategoryUpdateWithoutHabitsInput, CategoryUncheckedUpdateWithoutHabitsInput>
    create: XOR<CategoryCreateWithoutHabitsInput, CategoryUncheckedCreateWithoutHabitsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutHabitsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutHabitsInput, CategoryUncheckedUpdateWithoutHabitsInput>
  }

  export type CategoryUpdateWithoutHabitsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    todos?: TodoUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutHabitsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    todos?: TodoUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type DailyPlanItemUpsertWithWhereUniqueWithoutHabitInput = {
    where: DailyPlanItemWhereUniqueInput
    update: XOR<DailyPlanItemUpdateWithoutHabitInput, DailyPlanItemUncheckedUpdateWithoutHabitInput>
    create: XOR<DailyPlanItemCreateWithoutHabitInput, DailyPlanItemUncheckedCreateWithoutHabitInput>
  }

  export type DailyPlanItemUpdateWithWhereUniqueWithoutHabitInput = {
    where: DailyPlanItemWhereUniqueInput
    data: XOR<DailyPlanItemUpdateWithoutHabitInput, DailyPlanItemUncheckedUpdateWithoutHabitInput>
  }

  export type DailyPlanItemUpdateManyWithWhereWithoutHabitInput = {
    where: DailyPlanItemScalarWhereInput
    data: XOR<DailyPlanItemUpdateManyMutationInput, DailyPlanItemUncheckedUpdateManyWithoutHabitInput>
  }

  export type UserCreateWithoutDailyPlansInput = {
    email: string
    password: string
    appleId?: string | null
    googleId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    todos?: TodoCreateNestedManyWithoutUserInput
    habits?: HabitCreateNestedManyWithoutUserInput
    settings?: UserSettingsCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDailyPlansInput = {
    id?: number
    email: string
    password: string
    appleId?: string | null
    googleId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    todos?: TodoUncheckedCreateNestedManyWithoutUserInput
    habits?: HabitUncheckedCreateNestedManyWithoutUserInput
    settings?: UserSettingsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDailyPlansInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDailyPlansInput, UserUncheckedCreateWithoutDailyPlansInput>
  }

  export type DailyPlanItemCreateWithoutDailyPlanInput = {
    title: string
    description?: string | null
    time?: Date | string | null
    priority?: number | null
    completed?: boolean
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    todo?: TodoCreateNestedOneWithoutDailyPlanItemInput
    habit?: HabitCreateNestedOneWithoutDailyPlanItemInput
  }

  export type DailyPlanItemUncheckedCreateWithoutDailyPlanInput = {
    id?: number
    todoId?: number | null
    habitId?: number | null
    title: string
    description?: string | null
    time?: Date | string | null
    priority?: number | null
    completed?: boolean
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DailyPlanItemCreateOrConnectWithoutDailyPlanInput = {
    where: DailyPlanItemWhereUniqueInput
    create: XOR<DailyPlanItemCreateWithoutDailyPlanInput, DailyPlanItemUncheckedCreateWithoutDailyPlanInput>
  }

  export type DailyPlanItemCreateManyDailyPlanInputEnvelope = {
    data: DailyPlanItemCreateManyDailyPlanInput | DailyPlanItemCreateManyDailyPlanInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutDailyPlansInput = {
    update: XOR<UserUpdateWithoutDailyPlansInput, UserUncheckedUpdateWithoutDailyPlansInput>
    create: XOR<UserCreateWithoutDailyPlansInput, UserUncheckedCreateWithoutDailyPlansInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDailyPlansInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDailyPlansInput, UserUncheckedUpdateWithoutDailyPlansInput>
  }

  export type UserUpdateWithoutDailyPlansInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    appleId?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    todos?: TodoUpdateManyWithoutUserNestedInput
    habits?: HabitUpdateManyWithoutUserNestedInput
    settings?: UserSettingsUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDailyPlansInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    appleId?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    todos?: TodoUncheckedUpdateManyWithoutUserNestedInput
    habits?: HabitUncheckedUpdateManyWithoutUserNestedInput
    settings?: UserSettingsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type DailyPlanItemUpsertWithWhereUniqueWithoutDailyPlanInput = {
    where: DailyPlanItemWhereUniqueInput
    update: XOR<DailyPlanItemUpdateWithoutDailyPlanInput, DailyPlanItemUncheckedUpdateWithoutDailyPlanInput>
    create: XOR<DailyPlanItemCreateWithoutDailyPlanInput, DailyPlanItemUncheckedCreateWithoutDailyPlanInput>
  }

  export type DailyPlanItemUpdateWithWhereUniqueWithoutDailyPlanInput = {
    where: DailyPlanItemWhereUniqueInput
    data: XOR<DailyPlanItemUpdateWithoutDailyPlanInput, DailyPlanItemUncheckedUpdateWithoutDailyPlanInput>
  }

  export type DailyPlanItemUpdateManyWithWhereWithoutDailyPlanInput = {
    where: DailyPlanItemScalarWhereInput
    data: XOR<DailyPlanItemUpdateManyMutationInput, DailyPlanItemUncheckedUpdateManyWithoutDailyPlanInput>
  }

  export type DailyPlanCreateWithoutItemsInput = {
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDailyPlansInput
  }

  export type DailyPlanUncheckedCreateWithoutItemsInput = {
    id?: number
    userId: number
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DailyPlanCreateOrConnectWithoutItemsInput = {
    where: DailyPlanWhereUniqueInput
    create: XOR<DailyPlanCreateWithoutItemsInput, DailyPlanUncheckedCreateWithoutItemsInput>
  }

  export type TodoCreateWithoutDailyPlanItemInput = {
    title: string
    dueDate?: Date | string | null
    description?: string | null
    priority?: number | null
    completed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTodosInput
    category?: CategoryCreateNestedOneWithoutTodosInput
    parent?: TodoCreateNestedOneWithoutSubtasksInput
    subtasks?: TodoCreateNestedManyWithoutParentInput
  }

  export type TodoUncheckedCreateWithoutDailyPlanItemInput = {
    id?: number
    userId: number
    categoryId?: number | null
    title: string
    dueDate?: Date | string | null
    description?: string | null
    priority?: number | null
    parentId?: number | null
    completed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    subtasks?: TodoUncheckedCreateNestedManyWithoutParentInput
  }

  export type TodoCreateOrConnectWithoutDailyPlanItemInput = {
    where: TodoWhereUniqueInput
    create: XOR<TodoCreateWithoutDailyPlanItemInput, TodoUncheckedCreateWithoutDailyPlanItemInput>
  }

  export type HabitCreateWithoutDailyPlanItemInput = {
    title: string
    description?: string | null
    autoInclude?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutHabitsInput
    category?: CategoryCreateNestedOneWithoutHabitsInput
  }

  export type HabitUncheckedCreateWithoutDailyPlanItemInput = {
    id?: number
    userId: number
    categoryId?: number | null
    title: string
    description?: string | null
    autoInclude?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HabitCreateOrConnectWithoutDailyPlanItemInput = {
    where: HabitWhereUniqueInput
    create: XOR<HabitCreateWithoutDailyPlanItemInput, HabitUncheckedCreateWithoutDailyPlanItemInput>
  }

  export type DailyPlanUpsertWithoutItemsInput = {
    update: XOR<DailyPlanUpdateWithoutItemsInput, DailyPlanUncheckedUpdateWithoutItemsInput>
    create: XOR<DailyPlanCreateWithoutItemsInput, DailyPlanUncheckedCreateWithoutItemsInput>
    where?: DailyPlanWhereInput
  }

  export type DailyPlanUpdateToOneWithWhereWithoutItemsInput = {
    where?: DailyPlanWhereInput
    data: XOR<DailyPlanUpdateWithoutItemsInput, DailyPlanUncheckedUpdateWithoutItemsInput>
  }

  export type DailyPlanUpdateWithoutItemsInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDailyPlansNestedInput
  }

  export type DailyPlanUncheckedUpdateWithoutItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TodoUpsertWithoutDailyPlanItemInput = {
    update: XOR<TodoUpdateWithoutDailyPlanItemInput, TodoUncheckedUpdateWithoutDailyPlanItemInput>
    create: XOR<TodoCreateWithoutDailyPlanItemInput, TodoUncheckedCreateWithoutDailyPlanItemInput>
    where?: TodoWhereInput
  }

  export type TodoUpdateToOneWithWhereWithoutDailyPlanItemInput = {
    where?: TodoWhereInput
    data: XOR<TodoUpdateWithoutDailyPlanItemInput, TodoUncheckedUpdateWithoutDailyPlanItemInput>
  }

  export type TodoUpdateWithoutDailyPlanItemInput = {
    title?: StringFieldUpdateOperationsInput | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTodosNestedInput
    category?: CategoryUpdateOneWithoutTodosNestedInput
    parent?: TodoUpdateOneWithoutSubtasksNestedInput
    subtasks?: TodoUpdateManyWithoutParentNestedInput
  }

  export type TodoUncheckedUpdateWithoutDailyPlanItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subtasks?: TodoUncheckedUpdateManyWithoutParentNestedInput
  }

  export type HabitUpsertWithoutDailyPlanItemInput = {
    update: XOR<HabitUpdateWithoutDailyPlanItemInput, HabitUncheckedUpdateWithoutDailyPlanItemInput>
    create: XOR<HabitCreateWithoutDailyPlanItemInput, HabitUncheckedCreateWithoutDailyPlanItemInput>
    where?: HabitWhereInput
  }

  export type HabitUpdateToOneWithWhereWithoutDailyPlanItemInput = {
    where?: HabitWhereInput
    data: XOR<HabitUpdateWithoutDailyPlanItemInput, HabitUncheckedUpdateWithoutDailyPlanItemInput>
  }

  export type HabitUpdateWithoutDailyPlanItemInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    autoInclude?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutHabitsNestedInput
    category?: CategoryUpdateOneWithoutHabitsNestedInput
  }

  export type HabitUncheckedUpdateWithoutDailyPlanItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    autoInclude?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TodoCreateManyUserInput = {
    id?: number
    categoryId?: number | null
    title: string
    dueDate?: Date | string | null
    description?: string | null
    priority?: number | null
    parentId?: number | null
    completed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HabitCreateManyUserInput = {
    id?: number
    categoryId?: number | null
    title: string
    description?: string | null
    autoInclude?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DailyPlanCreateManyUserInput = {
    id?: number
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TodoUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneWithoutTodosNestedInput
    parent?: TodoUpdateOneWithoutSubtasksNestedInput
    subtasks?: TodoUpdateManyWithoutParentNestedInput
    dailyPlanItem?: DailyPlanItemUpdateManyWithoutTodoNestedInput
  }

  export type TodoUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subtasks?: TodoUncheckedUpdateManyWithoutParentNestedInput
    dailyPlanItem?: DailyPlanItemUncheckedUpdateManyWithoutTodoNestedInput
  }

  export type TodoUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HabitUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    autoInclude?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneWithoutHabitsNestedInput
    dailyPlanItem?: DailyPlanItemUpdateManyWithoutHabitNestedInput
  }

  export type HabitUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    autoInclude?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dailyPlanItem?: DailyPlanItemUncheckedUpdateManyWithoutHabitNestedInput
  }

  export type HabitUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    autoInclude?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyPlanUpdateWithoutUserInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: DailyPlanItemUpdateManyWithoutDailyPlanNestedInput
  }

  export type DailyPlanUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: DailyPlanItemUncheckedUpdateManyWithoutDailyPlanNestedInput
  }

  export type DailyPlanUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TodoCreateManyCategoryInput = {
    id?: number
    userId: number
    title: string
    dueDate?: Date | string | null
    description?: string | null
    priority?: number | null
    parentId?: number | null
    completed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HabitCreateManyCategoryInput = {
    id?: number
    userId: number
    title: string
    description?: string | null
    autoInclude?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TodoUpdateWithoutCategoryInput = {
    title?: StringFieldUpdateOperationsInput | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTodosNestedInput
    parent?: TodoUpdateOneWithoutSubtasksNestedInput
    subtasks?: TodoUpdateManyWithoutParentNestedInput
    dailyPlanItem?: DailyPlanItemUpdateManyWithoutTodoNestedInput
  }

  export type TodoUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subtasks?: TodoUncheckedUpdateManyWithoutParentNestedInput
    dailyPlanItem?: DailyPlanItemUncheckedUpdateManyWithoutTodoNestedInput
  }

  export type TodoUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HabitUpdateWithoutCategoryInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    autoInclude?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutHabitsNestedInput
    dailyPlanItem?: DailyPlanItemUpdateManyWithoutHabitNestedInput
  }

  export type HabitUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    autoInclude?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dailyPlanItem?: DailyPlanItemUncheckedUpdateManyWithoutHabitNestedInput
  }

  export type HabitUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    autoInclude?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TodoCreateManyParentInput = {
    id?: number
    userId: number
    categoryId?: number | null
    title: string
    dueDate?: Date | string | null
    description?: string | null
    priority?: number | null
    completed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DailyPlanItemCreateManyTodoInput = {
    id?: number
    dailyPlanId: number
    habitId?: number | null
    title: string
    description?: string | null
    time?: Date | string | null
    priority?: number | null
    completed?: boolean
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TodoUpdateWithoutParentInput = {
    title?: StringFieldUpdateOperationsInput | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTodosNestedInput
    category?: CategoryUpdateOneWithoutTodosNestedInput
    subtasks?: TodoUpdateManyWithoutParentNestedInput
    dailyPlanItem?: DailyPlanItemUpdateManyWithoutTodoNestedInput
  }

  export type TodoUncheckedUpdateWithoutParentInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subtasks?: TodoUncheckedUpdateManyWithoutParentNestedInput
    dailyPlanItem?: DailyPlanItemUncheckedUpdateManyWithoutTodoNestedInput
  }

  export type TodoUncheckedUpdateManyWithoutParentInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyPlanItemUpdateWithoutTodoInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dailyPlan?: DailyPlanUpdateOneRequiredWithoutItemsNestedInput
    habit?: HabitUpdateOneWithoutDailyPlanItemNestedInput
  }

  export type DailyPlanItemUncheckedUpdateWithoutTodoInput = {
    id?: IntFieldUpdateOperationsInput | number
    dailyPlanId?: IntFieldUpdateOperationsInput | number
    habitId?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyPlanItemUncheckedUpdateManyWithoutTodoInput = {
    id?: IntFieldUpdateOperationsInput | number
    dailyPlanId?: IntFieldUpdateOperationsInput | number
    habitId?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyPlanItemCreateManyHabitInput = {
    id?: number
    dailyPlanId: number
    todoId?: number | null
    title: string
    description?: string | null
    time?: Date | string | null
    priority?: number | null
    completed?: boolean
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DailyPlanItemUpdateWithoutHabitInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dailyPlan?: DailyPlanUpdateOneRequiredWithoutItemsNestedInput
    todo?: TodoUpdateOneWithoutDailyPlanItemNestedInput
  }

  export type DailyPlanItemUncheckedUpdateWithoutHabitInput = {
    id?: IntFieldUpdateOperationsInput | number
    dailyPlanId?: IntFieldUpdateOperationsInput | number
    todoId?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyPlanItemUncheckedUpdateManyWithoutHabitInput = {
    id?: IntFieldUpdateOperationsInput | number
    dailyPlanId?: IntFieldUpdateOperationsInput | number
    todoId?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyPlanItemCreateManyDailyPlanInput = {
    id?: number
    todoId?: number | null
    habitId?: number | null
    title: string
    description?: string | null
    time?: Date | string | null
    priority?: number | null
    completed?: boolean
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DailyPlanItemUpdateWithoutDailyPlanInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    todo?: TodoUpdateOneWithoutDailyPlanItemNestedInput
    habit?: HabitUpdateOneWithoutDailyPlanItemNestedInput
  }

  export type DailyPlanItemUncheckedUpdateWithoutDailyPlanInput = {
    id?: IntFieldUpdateOperationsInput | number
    todoId?: NullableIntFieldUpdateOperationsInput | number | null
    habitId?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyPlanItemUncheckedUpdateManyWithoutDailyPlanInput = {
    id?: IntFieldUpdateOperationsInput | number
    todoId?: NullableIntFieldUpdateOperationsInput | number | null
    habitId?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}