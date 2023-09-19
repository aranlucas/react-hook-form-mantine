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
  },
  parameters: {
    form: {
      defaultValues: {
        test: "",
      },
    },
  },
};
