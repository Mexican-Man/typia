import typia from "../../../../src";
import { _test_random } from "../../../internal/_test_random";
import { ArrayUnion } from "../../../structures/ArrayUnion";

export const test_createRandom_ArrayUnion = _test_random(
    "ArrayUnion",
    (
        generator?: Partial<typia.IRandomGenerator>,
    ): typia.Primitive<ArrayUnion> => {
        const $generator = (typia.createRandom as any).generator;
        const $pick = (typia.createRandom as any).pick;
        return (generator?.array ?? $generator.array)(() =>
            $pick([
                () =>
                    (generator?.array ?? $generator.array)(
                        () =>
                            (
                                generator?.customs ?? $generator.customs
                            )?.string?.([]) ??
                            (generator?.string ?? $generator.string)(),
                    ),
                () =>
                    (generator?.array ?? $generator.array)(() =>
                        (generator?.boolean ?? $generator.boolean)(),
                    ),
                () =>
                    (generator?.array ?? $generator.array)(
                        () =>
                            (
                                generator?.customs ?? $generator.customs
                            )?.number?.([]) ??
                            (generator?.number ?? $generator.number)(0, 100),
                    ),
            ])(),
        );
    },
    (input: any): typia.Primitive<ArrayUnion> => {
        const __is = (input: any): input is typia.Primitive<ArrayUnion> => {
            const $ip0 = (input: any) => {
                const array = input;
                const top = input[0];
                if (0 === input.length) return true;
                const arrayPredicators = [
                    [
                        (top: any): any => "string" === typeof top,
                        (entire: any[]): any =>
                            entire.every(
                                (elem: any) => "string" === typeof elem,
                            ),
                    ],
                    [
                        (top: any): any => "boolean" === typeof top,
                        (entire: any[]): any =>
                            entire.every(
                                (elem: any) => "boolean" === typeof elem,
                            ),
                    ],
                    [
                        (top: any): any =>
                            "number" === typeof top && Number.isFinite(top),
                        (entire: any[]): any =>
                            entire.every(
                                (elem: any) =>
                                    "number" === typeof elem &&
                                    Number.isFinite(elem),
                            ),
                    ],
                ];
                const passed = arrayPredicators.filter((pred: any) =>
                    pred[0](top),
                );
                if (1 === passed.length) return passed[0][1](array);
                else if (1 < passed.length)
                    for (const pred of passed)
                        if (
                            array.every((value: any) => true === pred[0](value))
                        )
                            return pred[1](array);
                return false;
            };
            return (
                Array.isArray(input) &&
                input.every(
                    (elem: any) => Array.isArray(elem) && ($ip0(elem) || false),
                )
            );
        };
        if (false === __is(input))
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is typia.Primitive<ArrayUnion> => {
                const $guard = (typia.createAssert as any).guard;
                const $ap0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ) => {
                    const array = input;
                    const top = input[0];
                    if (0 === input.length) return true;
                    const arrayPredicators = [
                        [
                            (top: any): any => "string" === typeof top,
                            (entire: any[]): any =>
                                entire.every(
                                    (elem: any, _index5: number) =>
                                        "string" === typeof elem ||
                                        $guard(_exceptionable, {
                                            path: _path + "[" + _index5 + "]",
                                            expected: "string",
                                            value: elem,
                                        }),
                                ),
                        ],
                        [
                            (top: any): any => "boolean" === typeof top,
                            (entire: any[]): any =>
                                entire.every(
                                    (elem: any, _index6: number) =>
                                        "boolean" === typeof elem ||
                                        $guard(_exceptionable, {
                                            path: _path + "[" + _index6 + "]",
                                            expected: "boolean",
                                            value: elem,
                                        }),
                                ),
                        ],
                        [
                            (top: any): any =>
                                "number" === typeof top && Number.isFinite(top),
                            (entire: any[]): any =>
                                entire.every(
                                    (elem: any, _index7: number) =>
                                        ("number" === typeof elem &&
                                            Number.isFinite(elem)) ||
                                        $guard(_exceptionable, {
                                            path: _path + "[" + _index7 + "]",
                                            expected: "number",
                                            value: elem,
                                        }),
                                ),
                        ],
                    ];
                    const passed = arrayPredicators.filter((pred: any) =>
                        pred[0](top),
                    );
                    if (1 === passed.length) return passed[0][1](array);
                    else if (1 < passed.length)
                        for (const pred of passed)
                            if (
                                array.every(
                                    (value: any) => true === pred[0](value),
                                )
                            )
                                return pred[1](array);
                    return $guard(_exceptionable, {
                        path: _path,
                        expected:
                            "(Array<string> | Array<boolean> | Array<number>)",
                        value: input,
                    });
                };
                return (
                    ((Array.isArray(input) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "ArrayUnion",
                            value: input,
                        })) &&
                        input.every(
                            (elem: any, _index1: number) =>
                                ((Array.isArray(elem) ||
                                    $guard(true, {
                                        path: _path + "[" + _index1 + "]",
                                        expected:
                                            "(Array<boolean> | Array<number> | Array<string>)",
                                        value: elem,
                                    })) &&
                                    ($ap0(
                                        elem,
                                        _path + "[" + _index1 + "]",
                                        true && _exceptionable,
                                    ) ||
                                        $guard(_exceptionable, {
                                            path: _path + "[" + _index1 + "]",
                                            expected:
                                                "Array<string> | Array<boolean> | Array<number>",
                                            value: elem,
                                        }))) ||
                                $guard(true, {
                                    path: _path + "[" + _index1 + "]",
                                    expected:
                                        "(Array<boolean> | Array<number> | Array<string>)",
                                    value: elem,
                                }),
                        )) ||
                    $guard(true, {
                        path: _path + "",
                        expected: "ArrayUnion",
                        value: input,
                    })
                );
            })(input, "$input", true);
        return input;
    },
);
