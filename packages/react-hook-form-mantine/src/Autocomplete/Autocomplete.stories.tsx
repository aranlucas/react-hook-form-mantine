import type { Meta, StoryObj } from "@storybook/react";
import { Autocomplete } from "./Autocomplete";
import { withReactHookForm } from "../stories/decorator";

export default {
  title: "Components/Autocomplete",
  component: Autocomplete,
  decorators: [withReactHookForm],
} satisfies Meta<typeof Autocomplete>;

type Story = StoryObj<typeof Autocomplete>;

export const Primary: Story = {
  args: {
    name: "test",
    rules: {
      required: true,
      minLength: {
        value: 20,
        message: "Too short",
      },
    },
    data: [
      { value: "Rick", group: "Used to be a pickle" },
      { value: "Morty", group: "Never was a pickle" },
      { value: "Beth", group: "Never was a pickle" },
      { value: "Summer", group: "Never was a pickle" },
    ],
    placeholder: "Pick one",
  },
  parameters: {
    form: {
      defaultValues: {
        test: "Rick",
      },
    },
  },
};
