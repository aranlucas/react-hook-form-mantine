import type { Meta, StoryObj } from "@storybook/react";
import { withReactHookForm } from "../stories/decorator";
import { NativeSelect } from "./NativeSelect";

export default {
  component: NativeSelect,
  decorators: [withReactHookForm],
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
      onSubmit: (data: any) => {
        console.log(data);
      },
    },
  },
};
