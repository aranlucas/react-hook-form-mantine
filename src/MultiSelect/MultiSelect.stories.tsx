import type { Meta, StoryObj } from "@storybook/react";
import { MultiSelect } from "./MultiSelect";

export default {
  title: "Components/MultiSelect",
  component: MultiSelect,
} satisfies Meta<typeof MultiSelect>;

type Story = StoryObj<typeof MultiSelect>;

export const Primary: Story = {
  args: {
    name: "test",
    label: "Your favorite frameworks/libraries",
    placeholder: "Pick all that you like",
    description: "Choose all that apply",
    data: ["React", "Angular", "Vue", "Svelte"],
  },
  parameters: {
    form: {
      defaultValues: {
        test: ["React", "Vue"],
      },
    },
  },
};

export const WithValidation: Story = {
  args: {
    name: "test",
    label: "Required selection",
    placeholder: "Pick at least one",
    data: ["React", "Angular", "Vue", "Svelte"],
    rules: {
      required: {
        value: true,
        message: "Please select at least one framework",
      },
    },
  },
  parameters: {
    form: {
      defaultValues: {
        test: [],
      },
    },
  },
};
