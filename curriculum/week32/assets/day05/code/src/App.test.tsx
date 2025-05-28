import { describe, it } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react';
import App from "./App";
import { priceError } from "./translation";

/**
 * @vitest-environment jsdom
 */
describe("Testing App Component", () => {

  it("should render on the DOM", () => {

    //=> A(rrange)
    render(<App />);

    screen.getByText("eShop");
    // const heading = screen.getByRole('heading'); // Looking for ARIA roles (heading, paragraph)


  })

  it("should update the price input", () => {
    //=> A(ct) [fireEvent required for acting]
    const input = screen.getByTestId('price-input');
    // Access the Enter Price input
    // Clear the input
    // Type 100
    // fireEvent.EVENT( HTMLElement[ , { OPTIONS }] )
    fireEvent.change(input, { target: { value: '100' } })
    // screen.debug(); // Displaying the DOM
    // CHALLENGE: test that the '100' is now being displayed

  })

  it("should display the correct tax", () => {
    const input = screen.getByTestId('price-input');
    // Press the Calc button
    const btn = screen.getByText("Calculate total price + tax (25%)");
    // console.log("BEFORE");
    // screen.debug();
    fireEvent.click(btn);
    // console.log("AFTER");
    // screen.debug();

    //=> A(ssert)
    // Test the output: asserting/making sure that 'Total price: 125' is shown on the screen 
    screen.getByText("Total price: 125");

    fireEvent.change(input, { target: { value: '1000' } })
    fireEvent.click(btn);
    screen.getByText("Total price: 1250");

    // screen.debug();
    // Test that the <App /> component is rendered on the page (DOM).
    // expect(true).toEqual(true);
  })

  it("should display an error on a non-number", () => {
    const input = screen.getByTestId('price-input');
    const btn = screen.getByText("Calculate total price + tax (25%)");
    fireEvent.click(btn);
    fireEvent.change(input, { target: { value: 'AAA' } })
    fireEvent.click(btn);
    screen.getByText(priceError);
  })

});

