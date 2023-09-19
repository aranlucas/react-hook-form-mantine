import type { Meta, StoryObj } from "@storybook/react";
import { withReactHookForm } from "../stories/decorator";
import { MultiSelect } from "./MultiSelect";

export default {
  title: "Components/MultiSelect",
  component: MultiSelect,
  decorators: [withReactHookForm],
} satisfies Meta<typeof MultiSelect>;

type Story = StoryObj<typeof MultiSelect>;

export const Primary: Story = {
  args: {
    name: "test",
    label: "Your favorite frameworks/libraries",
    placeholder: "Pick all that you like",
    data: ["React", "Angular", "Vue", "Svelte"],
  },
  parameters: {
    form: {
      defaultValues: {
        test: [],
      },
    },
  },
};
