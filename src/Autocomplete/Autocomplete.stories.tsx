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
    data: ["React", "Angular", "Vue", "Svelte"],
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
