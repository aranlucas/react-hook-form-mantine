import { type Meta, type StoryObj } from "@storybook/react";
import { JsonInput } from "./JsonInput";

export default {
  title: "Components/JsonInput",
  component: JsonInput,
} satisfies Meta<typeof JsonInput>;

type Story = StoryObj<typeof JsonInput>;

export const Primary: Story = {
  args: {
    name: "test",
    label: "Your package.json",
    placeholder: "Textarea will autosize to fit the content",
    description: "Paste a valid JSON document",
    formatOnBlur: true,
    autosize: true,
    minRows: 4,
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
    label: "JSON input",
    placeholder: "Enter JSON",
    formatOnBlur: true,
    validationError: "Invalid JSON",
  },
  parameters: {
    form: {
      defaultValues: {
        test: '{"name": "test", "value": 42}',
      },
    },
  },
};
