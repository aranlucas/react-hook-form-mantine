import type { Meta, StoryObj } from "@storybook/react";
import { withReactHookForm } from "../stories/decorator";
import { JsonInput } from "./JsonInput";

export default {
  component: JsonInput,
  decorators: [withReactHookForm],
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
      onSubmit: (data: any) => {
        console.log(data);
      },
    },
  },
};
