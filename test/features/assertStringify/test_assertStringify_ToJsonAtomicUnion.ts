import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";

export const test_assertStringify_ToJsonAtomicUnion = _test_assertStringify(
    "ToJsonAtomicUnion",
    ToJsonAtomicUnion.generate,
    (input) => typia.assertStringify(input),
);
