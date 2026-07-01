import type { Meta, StoryObj } from "@storybook/react";
import { Autocomplete } from "./Autocomplete";

export default {
  title: "Components/Autocomplete",
  component: Autocomplete,
} satisfies Meta<typeof Autocomplete>;

type Story = StoryObj<typeof Autocomplete>;

export const Primary: Story = {
  args: {
    name: "test",
    label: "Your favorite framework",
    placeholder: "Pick one",
    description: "Start typing to see suggestions",
    data: ["React", "Angular", "Vue", "Svelte"],
  },
  parameters: {
    form: {
      defaultValues: {
        test: "React",
      },
    },
  },
};

export const WithValidation: Story = {
  args: {
    name: "test",
    label: "Required framework",
    placeholder: "Pick one",
    data: ["React", "Angular", "Vue", "Svelte"],
    rules: {
      required: {
        value: true,
        message: "Please select a framework",
      },
    },
  },
  parameters: {
    form: {
      defaultValues: {
        test: "",
      },
    },
  },
};
