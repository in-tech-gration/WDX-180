import calcTotalPrice from "./utils";
import { expect, test } from 'vitest'

test("Make sure calcTotalPrice works", ()=>{
  const price = 100;
  const output = calcTotalPrice(price);
  const expected = 125;
  expect(output).toEqual(expected);
})

// test("That NaN are handled appropriately")

// test("That handles Strings")

// test("That handles null, undefined")
