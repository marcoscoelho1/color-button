import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { replaceCamelWithSapaces } from "./App";

test("button has correct initial color", () => {
  render(<App />);

  //find an element with a role of button and text of 'Change to blue'
  const colorButton = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });

  expect(colorButton).toHaveStyle({ backgroundColor: "Medium Violet Red" });

  //click
  fireEvent.click(colorButton);

  //expect the background color to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: "Midnight Blue" });

  // expect the button text to be 'Change to red'
  expect(colorButton).toHaveTextContent("Change to Medium Violet Red");
});

test("initial conditions", () => {
  render(<App />);

  //Check that the button starts enabled
  const colorButton = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });
  expect(colorButton).toBeEnabled();

  //Check that the checkbox starts out unchecked
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

test("checkbox events to enable / disable blutton", () => {
  render(<App />);

  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  const colorButton = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });

  //Expect that the checkbox be checked after click the color button be disabled
  fireEvent.click(checkbox);
  expect(checkbox).toBeChecked();
  expect(colorButton).toBeDisabled();

  //Expect that the checkbox be unchecked after click and the color button be enabled
  fireEvent.click(checkbox);
  expect(checkbox).not.toBeChecked();
  expect(colorButton).toBeEnabled();
});

test("disable color/enable colors when button is Medium Violet Red", () => {
  render(<App />);

  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  const colorButton = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });

  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: "gray" });

  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: "Medium Violet Red" });
});

test("disable/enable colors when button is Midnight Blue", () => {
  render(<App />);

  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  const colorButton = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });

  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ backgroundColor: "Midnight Blue" });

  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: "gray" });

  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: "Midnight Blue" });
});

describe("Spaces before camel-case capital letters", () => {
  test("Works for no inner capital letters", () => {
    expect(replaceCamelWithSapaces("Red")).toBe("Red");
  });

  test("Works for one inner capital letter", () => {
    expect(replaceCamelWithSapaces("MidnightBlue")).toBe("Midnight Blue");
  });

  test("Works for multiple inner capital letters", () => {
    expect(replaceCamelWithSapaces("MediumVioletRed")).toBe(
      "Medium Violet Red"
    );
  });
});
