import { describe, it } from 'vitest'
import { render, screen } from '@testing-library/react';
import App from "./App";

/**
 * @vitest-environment jsdom
 */
describe("Testing App Component", ()=>{

  it("should render on the DOM", ()=>{

    render(<App />);

    screen.getByText("eShop");
    // const heading = screen.getByRole('heading'); // Looking for ARIA roles (heading, paragraph)

    // screen.debug();
    // Test that the <App /> component is rendered on the page (DOM).
    // expect(true).toEqual(true);
  })

});

