import { it, expect, describe } from "vitest";
import { screen, render } from "@testing-library/react";
import TitlePage from "../components/UI/TitlePage";
import '@testing-library/jest-dom/vitest'

describe('<TitlePage />', () => {

    it("should render the text", () => {
        render(<TitlePage name="Home Page" />);
    
    })

})