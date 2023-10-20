import { render, screen } from "@testing-library/react";
import App from "./App";

test("Free NFT for early birds", () => {
    render(<App />);
    const linkElement = screen.getByText("Free NFT for early birds");
    expect(linkElement).toBeInTheDocument();
});
