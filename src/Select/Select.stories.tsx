import { type Meta, type StoryObj } from "@storybook/react";
import { Select } from "./Select";

export default {
  title: "Components/Select",
  component: Select,
} satisfies Meta<typeof Select>;

type Story = StoryObj<typeof Select>;

export const Primary: Story = {
  args: {
    name: "test",
    label: "Your favorite framework/library",
    placeholder: "Pick one",
    description: "Select one option",
    data: [
      { label: "React", value: "react" },
      { label: "Angular", value: "ng" },
      { label: "Vue", value: "vue" },
      { label: "Svelte", value: "svelte" },
    ],
  },
  parameters: {
    form: {
      defaultValues: {
        test: "react",
      },
    },
  },
};

export const WithValidation: Story = {
  args: {
    name: "test",
    label: "Required selection",
    placeholder: "Pick one",
    data: [
      { label: "React", value: "react" },
      { label: "Angular", value: "ng" },
      { label: "Vue", value: "vue" },
      { label: "Svelte", value: "svelte" },
    ],
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
        test: null,
      },
    },
  },
};

export const Searchable: Story = {
  args: {
    name: "test",
    label: "Searchable select",
    placeholder: "Search...",
    searchable: true,
    nothingFoundMessage: "No options found",
    data: [
      { label: "React", value: "react" },
      { label: "Angular", value: "ng" },
      { label: "Vue", value: "vue" },
      { label: "Svelte", value: "svelte" },
    ],
  },
  parameters: {
    form: {
      defaultValues: {
        test: null,
      },
    },
  },
};
