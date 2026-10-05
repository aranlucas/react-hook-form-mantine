import { type Meta, type StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "storybook/test";
import App from "./App";

export default {
  title: "Examples/Full form",
  component: App,
  // The example renders its own <form>, so skip the shared form decorator.
  parameters: { form: false, layout: "fullscreen" },
} satisfies Meta<typeof App>;

type Story = StoryObj<typeof App>;

export const FullForm: Story = {};

export const SubmitEmpty: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(canvas.getByRole("button", { name: "Submit" }));
    await expect(await canvas.findByText("Enter your full name")).toBeVisible();
    await expect(canvas.getByText("You must accept the terms")).toBeVisible();
    await expect(canvas.getByText("Enter all 4 digits")).toBeVisible();
    await expect(canvas.getByRole("textbox", { name: /Full name/ })).toHaveFocus();
    await expect(canvas.queryByText("Submitted values")).not.toBeInTheDocument();
  },
};
