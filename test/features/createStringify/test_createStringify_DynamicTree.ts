import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_createStringify_DynamicTree = _test_stringify(
    "DynamicTree",
    DynamicTree.generate,
    typia.createStringify<DynamicTree>(),
);
