import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_assert_ArrayMatrix = _test_assert(
    "ArrayMatrix",
    ArrayMatrix.generate,
    (input) => typia.assert(input),
    ArrayMatrix.SPOILERS,
);
