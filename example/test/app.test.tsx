import { afterEach, describe, expect, it } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { MantineProvider } from "@mantine/core";
import App from "../src/App";

afterEach(cleanup);

describe("example form", () => {
  it("shows validation errors instead of submitting empty required fields", async () => {
    render(
      <MantineProvider env="test">
        <App />
      </MantineProvider>,
    );
    fireEvent.click(screen.getByRole("button", { name: "Submit" }));
    expect(await screen.findByText("Enter your full name")).toBeInTheDocument();
    expect(screen.getByText("You must accept the terms")).toBeInTheDocument();
    expect(screen.queryByTestId("submitted")).not.toBeInTheDocument();
  });

  it("restores the default name when the user resets the form", () => {
    render(
      <MantineProvider env="test">
        <App />
      </MantineProvider>,
    );
    const name = screen.getByRole("textbox", { name: "Full name" });
    fireEvent.change(name, { target: { value: "Jane Example" } });
    expect(name).toHaveValue("Jane Example");
    fireEvent.click(screen.getByRole("button", { name: "Reset" }));
    expect(name).toHaveValue("");
  });
});
