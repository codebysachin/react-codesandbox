import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header Tests", () => {
  it("read the text from the h1", () => {
    render(<Header />);
    const h1Element = screen.getByText(/Hi from Header file/i);
    expect(h1Element).toBeInTheDocument();
  });

  it("works", () => {
    expect(1 + 1).toBe(2);
  });
});
