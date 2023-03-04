import type { Meta, StoryObj } from "@storybook/react";
import { withReactHookForm } from "../stories/decorator";
import { MultiSelect } from "./MultiSelect";

export default {
  component: MultiSelect,
  decorators: [withReactHookForm],
} satisfies Meta<typeof MultiSelect>;

type Story = StoryObj<typeof MultiSelect>;

export const Primary: Story = {
  args: {
    name: "test",
    data: [],
  },
  parameters: {
    form: {
      defaultValues: {
        test: false,
      },
      onSubmit: (data: any) => {
        console.log(data);
      },
    },
  },
};
