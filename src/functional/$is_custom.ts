import { Customizable } from "../typings/Customizable";

import { $dictionary } from "./$dictionary";

export const $is_custom = <Type extends keyof Customizable>(
    name: string,
    type: Type,
    text: string,
    value: Customizable[Type],
): boolean => {
    const validator = $dictionary.get(name)?.get(type);
    if (validator === undefined) return true;
    return validator(text)(value);
};
