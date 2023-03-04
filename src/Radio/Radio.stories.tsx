import type { Meta, StoryObj } from "@storybook/react";
import { withReactHookForm } from "../stories/decorator";
import { Radio } from "./Radio";
import { Group } from "@mantine/core";

export default {
  component: Radio,
  decorators: [withReactHookForm],
} satisfies Meta<typeof Radio>;

type Story = StoryObj<typeof Radio>;
type StoryGroup = StoryObj<typeof Radio.Group>;

export const Primary: Story = {
  args: {
    name: "test",
    label: "I cannot be unchecked",
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

export const RadioGroup: StoryGroup = {
  render: (args) => (
    <Radio.Group {...args}>
      <Group mt="xs">
        <Radio.Item value="react" label="React" />
        <Radio.Item value="svelte" label="Svelte" />
        <Radio.Item value="ng" label="Angular" />
        <Radio.Item value="vue" label="Vue" />
      </Group>
    </Radio.Group>
  ),
  args: {
    name: "test",
    label: "Select your favorite framework/library",
    description: "This is anonymous",
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
