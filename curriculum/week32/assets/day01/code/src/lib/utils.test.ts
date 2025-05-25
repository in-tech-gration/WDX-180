import calcTotalPrice from "./utils";
import { expect, describe, it } from 'vitest'

/**
 * @vitest-environment jsdom
 */
describe("Testing calcTotalPrice", ()=>{

  it("Make sure calcTotalPrice works", ()=>{

    const price = 100;
    const output = calcTotalPrice(price);
    const expected = 125;
    expect(output).toEqual(expected);

  })

  it("Handles NaN values appropriately", ()=>{

    const price = NaN; // typeof "number"
    expect(()=> {
      calcTotalPrice(price);
    }).toThrow(/calcTotalPrice\(\) expects a number and not NaN. Check the argument passed to calcTotalPrice\(price\)/);

    // Throw an Error. Show in the console or the user?
    // UI/UX Rule?

  });

  it("Handles string input", ()=>{
    const input = "AAA";
    expect(()=> {
      // @ts-expect-error Testing purposes...
      calcTotalPrice(input);
    }).toThrowError("calcTotalPrice() expects a number");
  })

  it("That handles null, undefined", ()=>{
    const inputA = null;
    const inputB = undefined;
    // @ts-expect-error Testing purposes...
    expect(()=> calcTotalPrice(inputA)).toThrowError();
    // @ts-expect-error Testing purposes...
    expect(()=> calcTotalPrice(inputB)).toThrowError();
  })

  // Other edge cases we have not covered?
  // Numbers larger than Number.MAX_SAFE_INTEGER or smaller than Number.MIN_SAFE_INTEGER?
  // Handle Infinity/-Infinity, 0/-0?

});

describe.skip("Testing someOtherFunction()", ()=>{
  it.skip("description", ()=>{})
})


