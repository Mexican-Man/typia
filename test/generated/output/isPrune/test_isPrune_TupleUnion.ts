import typia from "../../../../src";
import { _test_isPrune } from "../../../internal/_test_isPrune";
import { TupleUnion } from "../../../structures/TupleUnion";

export const test_isPrune_TupleUnion = _test_isPrune(
    "TupleUnion",
    TupleUnion.generate,
    (input) =>
        ((input: any): input is Array<TupleUnion.Union> => {
            const is = (input: any): input is Array<TupleUnion.Union> => {
                const $ip0 = (input: any) => {
                    const array = input;
                    const tuplePredicators = [
                        [
                            (top: any[]): any =>
                                top.length === 3 &&
                                "number" === typeof top[0] &&
                                Number.isFinite(top[0]) &&
                                "string" === typeof top[1] &&
                                "boolean" === typeof top[2],
                            (entire: any[]): any =>
                                entire.length === 3 &&
                                "number" === typeof entire[0] &&
                                Number.isFinite(entire[0]) &&
                                "string" === typeof entire[1] &&
                                "boolean" === typeof entire[2],
                        ],
                        [
                            (top: any[]): any =>
                                top.length === 2 &&
                                "boolean" === typeof top[0] &&
                                "number" === typeof top[1] &&
                                Number.isFinite(top[1]),
                            (entire: any[]): any =>
                                entire.length === 2 &&
                                "boolean" === typeof entire[0] &&
                                "number" === typeof entire[1] &&
                                Number.isFinite(entire[1]),
                        ],
                        [
                            (top: any[]): any => top.length === 0,
                            (entire: any[]): any => entire.length === 0,
                        ],
                    ];
                    for (const pred of tuplePredicators)
                        if (pred[0](array)) return pred[1](array);
                    return false;
                };
                return (
                    Array.isArray(input) &&
                    input.every(
                        (elem: any) =>
                            Array.isArray(elem) && ($ip0(elem) || false),
                    )
                );
            };
            const prune = (input: Array<TupleUnion.Union>): void => {};
            if (!is(input)) return false;
            prune(input);
            return true;
        })(input),
    TupleUnion.SPOILERS,
);
