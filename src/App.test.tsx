import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Houseware duplicate remover", () => {
  render(<App />);
  const linkElement = screen.getByText(/Houseware duplicate remover/i);
  expect(linkElement).toBeInTheDocument();
});
