/**
 * HTML要素を生成し、オプションのプロパティを設定する共通関数
 * @param tagName 作成する要素のタグ名
 * @param options 設定するプロパティのオブジェクト
 * @returns 生成されたHTML要素
 */
export const createElement = <T extends keyof HTMLElementTagNameMap>(
    tagName: T,
    options: Partial<HTMLElementTagNameMap[T]>,
): HTMLElementTagNameMap[T] => {
    const element = document.createElement(tagName);
    Object.assign(element, options);
    return element;
};
