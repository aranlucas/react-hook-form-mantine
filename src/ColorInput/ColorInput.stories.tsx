import type { Meta, StoryObj } from "@storybook/react";
import { withReactHookForm } from "../stories/decorator";
import { ColorInput } from "./ColorInput";

export default {
  component: ColorInput,
  decorators: [withReactHookForm],
} satisfies Meta<typeof ColorInput>;

type Story = StoryObj<typeof ColorInput>;

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
