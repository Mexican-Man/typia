import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { TagInfinite } from "../../../structures/TagInfinite";

export const test_is_TagInfinite = _test_is(
    "TagInfinite",
    TagInfinite.generate,
    (input) =>
        ((input: any): input is TagInfinite => {
            return (
                "object" === typeof input &&
                null !== input &&
                "number" === typeof (input as any).value &&
                Number.isFinite((input as any).value) &&
                "number" === typeof (input as any).ranged &&
                0 <= (input as any).ranged &&
                100 >= (input as any).ranged &&
                "number" === typeof (input as any).minimum &&
                Number.isFinite((input as any).minimum) &&
                0 <= (input as any).minimum &&
                "number" === typeof (input as any).maximum &&
                Number.isFinite((input as any).maximum) &&
                100 >= (input as any).maximum &&
                "number" === typeof (input as any).multipleOf &&
                0 === (input as any).multipleOf % 3 &&
                "number" === typeof (input as any).typed &&
                Number.isFinite((input as any).typed) &&
                parseInt((input as any).typed) === (input as any).typed
            );
        })(input),
    TagInfinite.SPOILERS,
);
