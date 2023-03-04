import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";
import { withReactHookForm } from "../stories/decorator";

export default {
  component: Checkbox,
  decorators: [withReactHookForm],
} satisfies Meta<typeof Checkbox>;

type Story = StoryObj<typeof Checkbox>;
type StoryGroup = StoryObj<typeof Checkbox.Group>;

export const Primary: Story = {
  args: {
    name: "test",
    label: "I agree to sell my privacy",
    rules: {
      required: {
        value: true,
        message: "Need to be true",
      },
    },
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

export const Group: StoryGroup = {
  render: (args) => (
    <Checkbox.Group {...args}>
      <Checkbox.Item value="react" label="React" />
      <Checkbox.Item value="svelte" label="Svelte" />
    </Checkbox.Group>
  ),
  args: {
    name: "test",
    label: "Select your favorite frameworks/libraries",
    rules: {
      required: {
        value: true,
        message: "Need to be true",
      },
    },
  },
  parameters: {
    form: {
      defaultValues: {
        test: ["react"],
      },
      onSubmit: (data: any) => {
        console.log(data);
      },
    },
  },
};
