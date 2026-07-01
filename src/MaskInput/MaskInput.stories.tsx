import { type Meta, type StoryObj } from "@storybook/react";
import { MaskInput } from "./MaskInput";

export default {
  title: "Components/MaskInput",
  component: MaskInput,
} satisfies Meta<typeof MaskInput>;

type Story = StoryObj<typeof MaskInput>;

export const PhoneNumber: Story = {
  args: {
    name: "test",
    label: "Phone number",
    placeholder: "(555) 123-4567",
    description: "Enter your phone number",
    mask: "(000) 000-0000",
  },
  parameters: {
    form: {
      defaultValues: {
        test: "",
      },
    },
  },
};

export const CreditCard: Story = {
  args: {
    name: "test",
    label: "Credit card number",
    placeholder: "1234 5678 9012 3456",
    description: "Enter your credit card number",
    mask: "0000 0000 0000 0000",
  },
  parameters: {
    form: {
      defaultValues: {
        test: "",
      },
    },
  },
};
