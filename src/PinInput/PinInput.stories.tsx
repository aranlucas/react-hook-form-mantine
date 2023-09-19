import { type Meta, type StoryObj } from "@storybook/react";
import { PinInput } from "./PinInput";

export default {
  title: "Components/PinInput",
  component: PinInput,
} satisfies Meta<typeof PinInput>;

type Story = StoryObj<typeof PinInput>;

export const Primary: Story = {
  args: {
    name: "test",
  },
  parameters: {
    form: {
      defaultValues: {
        test: "",
      },
    },
  },
};
