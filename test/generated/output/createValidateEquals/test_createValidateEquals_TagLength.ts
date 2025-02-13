import typia from "../../../../src";
import { _test_validateEquals } from "../../../internal/_test_validateEquals";
import { TagLength } from "../../../structures/TagLength";

export const test_createValidateEquals_TagLength = _test_validateEquals(
    "TagLength",
    TagLength.generate,
    (input: any): typia.IValidation<TagLength> => {
        const errors = [] as any[];
        const __is = (
            input: any,
            _exceptionable: boolean = true,
        ): input is TagLength => {
            const $io0 = (
                input: any,
                _exceptionable: boolean = true,
            ): boolean =>
                "string" === typeof input.fixed &&
                5 === input.fixed.length &&
                "string" === typeof input.minimum &&
                3 <= input.minimum.length &&
                "string" === typeof input.maximum &&
                7 >= input.maximum.length &&
                "string" === typeof input.minimum_and_maximum &&
                3 <= input.minimum_and_maximum.length &&
                7 >= input.minimum_and_maximum.length &&
                "string" === typeof input.equal &&
                10 <= input.equal.length &&
                19 >= input.equal.length &&
                (5 === Object.keys(input).length ||
                    Object.keys(input).every((key: any) => {
                        if (
                            [
                                "fixed",
                                "minimum",
                                "maximum",
                                "minimum_and_maximum",
                                "equal",
                            ].some((prop: any) => key === prop)
                        )
                            return true;
                        const value = input[key];
                        if (undefined === value) return true;
                        return false;
                    }));
            return (
                Array.isArray(input) &&
                input.every(
                    (elem: any, _index1: number) =>
                        "object" === typeof elem &&
                        null !== elem &&
                        $io0(elem, true),
                )
            );
        };
        if (false === __is(input)) {
            const $report = (typia.createValidateEquals as any).report(errors);
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is TagLength => {
                const $join = (typia.createValidateEquals as any).join;
                const $vo0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    [
                        ("string" === typeof input.fixed &&
                            (5 === input.fixed.length ||
                                $report(_exceptionable, {
                                    path: _path + ".fixed",
                                    expected: "string (@length 5)",
                                    value: input.fixed,
                                }))) ||
                            $report(_exceptionable, {
                                path: _path + ".fixed",
                                expected: "string",
                                value: input.fixed,
                            }),
                        ("string" === typeof input.minimum &&
                            (3 <= input.minimum.length ||
                                $report(_exceptionable, {
                                    path: _path + ".minimum",
                                    expected: "string (@minLength 3)",
                                    value: input.minimum,
                                }))) ||
                            $report(_exceptionable, {
                                path: _path + ".minimum",
                                expected: "string",
                                value: input.minimum,
                            }),
                        ("string" === typeof input.maximum &&
                            (7 >= input.maximum.length ||
                                $report(_exceptionable, {
                                    path: _path + ".maximum",
                                    expected: "string (@maxLength 7)",
                                    value: input.maximum,
                                }))) ||
                            $report(_exceptionable, {
                                path: _path + ".maximum",
                                expected: "string",
                                value: input.maximum,
                            }),
                        ("string" === typeof input.minimum_and_maximum &&
                            (3 <= input.minimum_and_maximum.length ||
                                $report(_exceptionable, {
                                    path: _path + ".minimum_and_maximum",
                                    expected: "string (@minLength 3)",
                                    value: input.minimum_and_maximum,
                                })) &&
                            (7 >= input.minimum_and_maximum.length ||
                                $report(_exceptionable, {
                                    path: _path + ".minimum_and_maximum",
                                    expected: "string (@maxLength 7)",
                                    value: input.minimum_and_maximum,
                                }))) ||
                            $report(_exceptionable, {
                                path: _path + ".minimum_and_maximum",
                                expected: "string",
                                value: input.minimum_and_maximum,
                            }),
                        ("string" === typeof input.equal &&
                            (10 <= input.equal.length ||
                                $report(_exceptionable, {
                                    path: _path + ".equal",
                                    expected: "string (@minLength 10)",
                                    value: input.equal,
                                })) &&
                            (19 >= input.equal.length ||
                                $report(_exceptionable, {
                                    path: _path + ".equal",
                                    expected: "string (@maxLength 19)",
                                    value: input.equal,
                                }))) ||
                            $report(_exceptionable, {
                                path: _path + ".equal",
                                expected: "string",
                                value: input.equal,
                            }),
                        5 === Object.keys(input).length ||
                            false === _exceptionable ||
                            Object.keys(input)
                                .map((key: any) => {
                                    if (
                                        [
                                            "fixed",
                                            "minimum",
                                            "maximum",
                                            "minimum_and_maximum",
                                            "equal",
                                        ].some((prop: any) => key === prop)
                                    )
                                        return true;
                                    const value = input[key];
                                    if (undefined === value) return true;
                                    return $report(_exceptionable, {
                                        path: _path + $join(key),
                                        expected: "undefined",
                                        value: value,
                                    });
                                })
                                .every((flag: boolean) => flag),
                    ].every((flag: boolean) => flag);
                return (
                    ((Array.isArray(input) ||
                        $report(true, {
                            path: _path + "",
                            expected: "TagLength",
                            value: input,
                        })) &&
                        input
                            .map(
                                (elem: any, _index1: number) =>
                                    ((("object" === typeof elem &&
                                        null !== elem) ||
                                        $report(true, {
                                            path: _path + "[" + _index1 + "]",
                                            expected: "TagLength.Type",
                                            value: elem,
                                        })) &&
                                        $vo0(
                                            elem,
                                            _path + "[" + _index1 + "]",
                                            true,
                                        )) ||
                                    $report(true, {
                                        path: _path + "[" + _index1 + "]",
                                        expected: "TagLength.Type",
                                        value: elem,
                                    }),
                            )
                            .every((flag: boolean) => flag)) ||
                    $report(true, {
                        path: _path + "",
                        expected: "TagLength",
                        value: input,
                    })
                );
            })(input, "$input", true);
        }
        const success = 0 === errors.length;
        return {
            success,
            errors,
            data: success ? input : undefined,
        } as any;
    },
);
