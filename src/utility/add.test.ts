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
    test("should support custom delimiters", () => {
        expect(add("//;\n1;2")).toBe(3);
    });
    test("should throw an error for if negative number in string", () => {
        expect(() => add("-1,2,-3")).toThrow("negative numbers not allowed: -1, -3");
    });
    test("should return the number itself if single number provided", () => {
        expect(add("5")).toBe(5);
    });
    test("should support custom delimiters with multicharcter", () => {
        expect(add("//;;s\n1;;s2")).toBe(3);
    });
    test("should throw an error for invalid input value with non-numeric characters except delimiters", () => {
        expect(() => add("1,a,3")).toThrow("Given String is not valid: 1,a,3");
      });

});
