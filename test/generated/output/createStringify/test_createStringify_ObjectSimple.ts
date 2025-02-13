import typia from "../../../../src";
import { _test_stringify } from "../../../internal/_test_stringify";
import { ObjectSimple } from "../../../structures/ObjectSimple";

export const test_createStringify_ObjectSimple = _test_stringify(
    "ObjectSimple",
    ObjectSimple.generate,
    (input: ObjectSimple): string => {
        const $io1 = (input: any): boolean =>
            "number" === typeof input.x &&
            "number" === typeof input.y &&
            "number" === typeof input.z;
        const $number = (typia.createStringify as any).number;
        return `{"scale":${`{"x":${$number(
            ((input as any).scale as any).x,
        )},"y":${$number(((input as any).scale as any).y)},"z":${$number(
            ((input as any).scale as any).z,
        )}}`},"position":${`{"x":${$number(
            ((input as any).position as any).x,
        )},"y":${$number(((input as any).position as any).y)},"z":${$number(
            ((input as any).position as any).z,
        )}}`},"rotate":${`{"x":${$number(
            ((input as any).rotate as any).x,
        )},"y":${$number(((input as any).rotate as any).y)},"z":${$number(
            ((input as any).rotate as any).z,
        )}}`},"pivot":${`{"x":${$number(
            ((input as any).pivot as any).x,
        )},"y":${$number(((input as any).pivot as any).y)},"z":${$number(
            ((input as any).pivot as any).z,
        )}}`}}`;
    },
);
