import { expect, test } from "e2e";
import { z } from "zod";

test("validates, submits typed form values, and resets the example", async ({ app, screen }) => {
  await app.open("/");
  await screen.getByRole("button", "Submit").tap();
  await expect(screen.getByText("Enter your full name")).toBeVisible();
  await expect(screen.getByText("You must accept the terms")).toBeVisible();
  await expect(screen.getByTestId("submitted")).not.toBeAttached();
  await expect(screen.getByRole("textbox", { name: /Full name/ })).toBeFocused();

  await screen.getByRole("textbox", { name: /Full name/ }).fill("Ada Example");
  await screen.getByRole("checkbox", "I accept the terms").check();
  await screen
    .getByRole("group", { name: /Frameworks you have used/ })
    .getByRole("checkbox", "React")
    .check();
  await screen.getByLabel(/Start date/).tap();
  // Day 15 exists in every month; match the full day label rather than a relative date.
  await screen.getByRole("button", { name: /^15 / }).tap();
  await screen.getByRole("combobox", { name: /Frameworks your team uses/ }).tap();
  await screen.getByRole("option", "React").tap();
  await screen.getByRole("combobox", { name: /Frameworks your team uses/ }).press("Escape");
  await screen.getByLabel(/^Password/).fill("example-password");
  const pin = screen.getByRole("textbox", { name: "Verification code" });

  await pin.nth(0).fill("1");
  await pin.nth(1).fill("2");
  await pin.nth(2).fill("3");
  await pin.nth(3).fill("4");

  await screen
    .getByRole("radiogroup", { name: /Favorite framework/ })
    .getByRole("radio", "React")
    .check();
  await screen.getByRole("combobox", { name: /Framework you know best/ }).tap();
  await screen.getByRole("option", "Vue").tap();
  await screen.getByRole("button", "Submit").tap();

  const submitted = screen.getByTestId("submitted");
  await expect(submitted).toBeVisible();
  const values: unknown = JSON.parse((await submitted.textContent()) ?? "null");
  expect(values).toMatchObject({
    fullName: "Ada Example",
    checkbox: true,
    checkboxGroup: ["react"],
    multiSelect: ["react"],
    numberInput: 18,
    pinInput: "1234",
    radio: "react",
    select: "vue",
  });
  expect(z.object({ datePicker: z.string() }).parse(values).datePicker).toMatch(/^\d{4}-\d{2}-15$/);
  await screen.getByRole("button", "Reset").tap();
  await expect(submitted).not.toBeAttached();
  await expect(screen.getByRole("textbox", { name: /Full name/ })).toHaveValue("");
  await expect(screen.getByRole("checkbox", "I accept the terms")).not.toBeChecked();
  await expect(screen.getByText("Enter your full name")).not.toBeAttached();
});
