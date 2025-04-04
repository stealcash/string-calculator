import { add } from "./add";

test("for blank string it should return 0", () => {
  expect(add("")).toBe(0);
});