import { it, expect, describe } from "vitest";
import { screen, render } from "@testing-library/react";
import PlaceOrderButton from "../components/UI/PlaceOrderButton";
import '@testing-library/jest-dom/vitest'

describe('<PlaceOrderButton />', () => {

    it("should render the button with the text", () => {
        render(<PlaceOrderButton />);
    
        const button = screen.getByRole('button');

        expect(button).toHaveTextContent('Place order')
    })

})