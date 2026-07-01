import { type Meta, type StoryObj } from "@storybook/react";
import { SegmentedControl } from "./SegmentedControl";

export default {
  title: "Components/SegmentedControl",
  component: SegmentedControl,
} satisfies Meta<typeof SegmentedControl>;

type Story = StoryObj<typeof SegmentedControl>;

export const Primary: Story = {
  args: {
    name: "test",
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
    data: [
      { label: "React", value: "react" },
      { label: "Angular", value: "ng" },
      { label: "Vue", value: "vue" },
    ],
    rules: {
      required: {
        value: true,
        message: "Please select an option",
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
