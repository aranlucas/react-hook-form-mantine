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
