// z.ZodTypeDefはZodの内部的な型定義に使用されます。
// 入力型は任意の型を受け入れるため、新しいジェネリクスIを導入します。
export const SchemaWithTypeCheck = () => (arg) => {
    return arg;
};
