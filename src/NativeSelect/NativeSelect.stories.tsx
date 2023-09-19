import { type Meta, type StoryObj } from "@storybook/react";
import { NativeSelect } from "./NativeSelect";

export default {
  title: "Components/NativeSelect",
  component: NativeSelect,
} satisfies Meta<typeof NativeSelect>;

type Story = StoryObj<typeof NativeSelect>;

export const Primary: Story = {
  args: {
    name: "test",
    label: "Select your favorite framework/library",
    description: "This is anonymous",
    data: ["React", "Vue", "Angular", "Svelte"],
  },
  parameters: {
    form: {
      defaultValues: {
        test: [],
      },
    },
  },
};
