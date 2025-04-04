import { add } from "./add";

describe("string calculator - test cases of add function", () => {
    test("for blank string it should return 0", () => {
        expect(add("")).toBe(0);
    });
    test("check for sum of two numbers seperate by comma", () => {
        expect(add("1,2")).toBe(3);
    });
});
