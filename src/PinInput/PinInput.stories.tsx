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
    length: 6,
  },
  parameters: {
    form: {
      defaultValues: {
        test: "",
      },
    },
  },
};

export const WithValue: Story = {
  args: {
    name: "test",
    length: 4,
    type: "number",
  },
  parameters: {
    form: {
      defaultValues: {
        test: "1234",
      },
    },
  },
};
