import preview from "../../.storybook/preview";
import { expect } from "storybook/test";
import App from "./App";

const meta = preview.meta({
  title: "Examples/Full form",
  component: App,
  tags: ["!autodocs", "example"],
  // The example renders its own <form>, so skip the shared form decorator.
  parameters: { form: false, controls: { disable: true } },
});

export const FullForm = meta.story();

FullForm.test(
  "shows every schema error and focuses the first field",
  async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole("button", { name: "Submit" }));

    await expect(await canvas.findByText("Enter your full name")).toBeVisible();
    await expect(canvas.getByText("You must accept the terms")).toBeVisible();
    await expect(canvas.getByText("Enter all 4 digits")).toBeVisible();
    await expect(canvas.getByRole("textbox", { name: /Full name/ })).toHaveFocus();
    await expect(canvas.queryByText("Submitted values")).not.toBeInTheDocument();
  },
);

/** The same form with the color scheme pinned through story globals. */
export const Dark = meta.story({
  globals: { colorScheme: "dark" },
});

/** The form on a phone-sized viewport. */
export const Mobile = meta.story({
  globals: { viewport: { value: "mobile2", isRotated: false } },
});
