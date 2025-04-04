import { add } from "./add";

describe("string calculator - test cases of add function", () => {
    test("for blank string it should return 0", () => {
        expect(add("")).toBe(0);
    });
    test("check for sum of two numbers seperate by comma", () => {
        expect(add("1,2")).toBe(3);
    });
    test("should handle addition of n numbers", () => {
        expect(add("1,2,3,4,5,6,7,8,9,0")).toBe(45);
    });
    test("should handle new line as a delimiter", () => {
        expect(add("1\n2,3\n4")).toBe(10);
    });
});
