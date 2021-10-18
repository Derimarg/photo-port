// __tests__/Gallery.test.js
import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Gallery from "..";
const portrait = {
  name: "portraits",
  description: "Portraits of people in my life",
};

afterEach(cleanup);

describe("Gallery is rendering", () => {
  it("renders1", () => {
    render(<Gallery currentCategory={portrait} />);
  });

  it("renders2", () => {
    const { asFragment } = render(<Gallery currentCategory={portrait} />);
    expect(asFragment()).toMatchSnapshot();
  });
});

it("renders3", () => {
  const { getByTestId } = render(<Gallery currentCategory={portrait} />);
  expect(getByTestId("h1tag")).toHaveTextContent("Portraits");
});
