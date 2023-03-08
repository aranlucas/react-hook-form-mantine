import type { Meta, StoryObj } from "@storybook/react";
import { withReactHookForm } from "../stories/decorator";
import { Switch } from "./Switch";
import { Group } from "@mantine/core";

export default {
  component: Switch,
  decorators: [withReactHookForm],
} satisfies Meta<typeof Switch>;

type Story = StoryObj<typeof Switch>;
type StoryGroup = StoryObj<typeof Switch.Group>;

export const Primary: Story = {
  args: {
    name: "test",
  },
  parameters: {
    form: {
      defaultValues: {
        test: false,
      },
    },
  },
};

export const SwitchGroup: StoryGroup = {
  render: (args) => (
    <Switch.Group {...args}>
      <Group mt="xs">
        <Switch.Item value="react" label="React" />
        <Switch.Item value="svelte" label="Svelte" />
        <Switch.Item value="ng" label="Angular" />
        <Switch.Item value="vue" label="Vue" />
      </Group>
    </Switch.Group>
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
    },
  },
};
