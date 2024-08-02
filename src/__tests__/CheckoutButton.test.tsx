import { it, expect, describe } from "vitest";
import { screen, render } from "@testing-library/react";
import CheckoutButton from "../components/UI/CheckoutButton";
import '@testing-library/jest-dom/vitest'

describe('<CheckoutButton />', () => {

    it("should render the button with the text", () => {
        render(<CheckoutButton />);
    
        const button = screen.getByRole('button');

        expect(button).toHaveTextContent('Check Out')
    })

})