import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_validate_ObjectPropertyNullable = _test_validate(
    "ObjectPropertyNullable",
    ObjectPropertyNullable.generate,
    (input) => typia.validate(input),
    ObjectPropertyNullable.SPOILERS,
);
