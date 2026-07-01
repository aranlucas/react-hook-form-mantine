import { type Meta, type StoryObj } from "@storybook/react";
import { NumberInput } from "./NumberInput";

export default {
  title: "Components/NumberInput",
  component: NumberInput,
} satisfies Meta<typeof NumberInput>;

type Story = StoryObj<typeof NumberInput>;

export const Primary: Story = {
  args: {
    name: "test",
    placeholder: "Your age",
    label: "Your age",
    description: "Must be 18 or older",
    min: 0,
    max: 120,
  },
  parameters: {
    form: {
      defaultValues: {
        test: 18,
      },
    },
  },
};

export const WithValidation: Story = {
  args: {
    name: "test",
    placeholder: "Quantity",
    label: "Quantity",
    min: 1,
    max: 10,
    rules: {
      required: {
        value: true,
        message: "Quantity is required",
      },
    },
  },
  parameters: {
    form: {
      defaultValues: {
        test: 1,
      },
    },
  },
};
