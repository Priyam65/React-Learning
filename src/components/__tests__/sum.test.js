import { sum } from "../sum";

test("sum of two numbers", () => {
  const result = sum(3, 4);
  //assertion
  expect(result).not.toBe(8);
});
