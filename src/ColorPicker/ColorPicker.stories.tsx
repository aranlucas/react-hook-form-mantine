import type { Meta, StoryObj } from "@storybook/react";
import { withReactHookForm } from "../stories/decorator";
import { ColorPicker } from "./ColorPicker";

export default {
  component: ColorPicker,
  decorators: [withReactHookForm],
} satisfies Meta<typeof ColorPicker>;

type Story = StoryObj<typeof ColorPicker>;

export const Primary: Story = {
  args: {
    name: "test",
    placeholder: "Test",
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
