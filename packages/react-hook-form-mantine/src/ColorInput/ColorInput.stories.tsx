import type { Meta, StoryObj } from "@storybook/react";
import { withReactHookForm } from "../stories/decorator";
import { ColorInput } from "./ColorInput";

export default {
  title: "Components/ColorInput",
  component: ColorInput,
  decorators: [withReactHookForm],
} satisfies Meta<typeof ColorInput>;

type Story = StoryObj<typeof ColorInput>;

export const Primary: Story = {
  args: {
    name: "test",
    placeholder: "Pick color",
  },
  parameters: {
    form: {
      defaultValues: {
        test: "#C5D899",
      },
    },
  },
};
