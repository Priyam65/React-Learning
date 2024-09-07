import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("should load contact us component", () => {
  render(<Contact />);

  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});

test("should load button inside contact us component", () => {
  render(<Contact />);

  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});

it("should load ipput using placeholder inside contact us component", () => {
  render(<Contact />);

  const inputName = screen.getByPlaceholderText("Name");
  expect(inputName).toBeInTheDocument();
});

test("should load 2 input boxes inside contact us compponent", () => {
  render(<Contact />);

  const inputBoxes = screen.getAllByRole("textbox");
  expect(inputBoxes.length).toBe(2);
});
