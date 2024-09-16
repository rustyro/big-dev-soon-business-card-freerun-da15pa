import React from "react";
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "@/app/page";

describe("Test Business Card Page", () => {

        it('renders the business page ', () => {
            render(<Home/>);
            const cardContainer = screen.getByTestId("business-card-container")
            expect(cardContainer).toBeInTheDocument()
            expect(screen.getByText("Email")).toBeInTheDocument()
            expect(screen.getByText("Phone")).toBeInTheDocument()
            expect(screen.getByText("Find me on")).toBeInTheDocument()
        });
    }
)