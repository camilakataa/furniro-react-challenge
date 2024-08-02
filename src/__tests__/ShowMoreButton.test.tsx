import { it, expect, describe } from "vitest";
import { screen, render } from "@testing-library/react";
import ShowMoreButton from "../components/UI/ShowMoreButton";
import '@testing-library/jest-dom/vitest'

describe('<ShowMoreButton />', () => {

    it("should render the button with the text", () => {
        render(<ShowMoreButton />);
    
        const button = screen.getByRole('button');

        expect(button).toHaveTextContent('Show More')
    })

})
