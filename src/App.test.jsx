import { describe, test } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App.jsx";

describe("test 1", () => {
  test("displays a hello world title", () => {
    render(<App />);
    screen.getByText("hello world");
  });

  test("test 2", () => {
    render(<App />);
    screen.getByText("hello world 2");
  });
});
