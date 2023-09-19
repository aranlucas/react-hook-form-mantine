import { type Meta, type StoryObj } from "@storybook/react";
import { SwitchGroup } from "./SwitchGroup";
import { Group } from "@mantine/core";
import { Switch } from "../Switch";

export default {
  title: "Components/SwitchGroup",
  component: SwitchGroup,
} satisfies Meta<typeof SwitchGroup>;

type StoryGroup = StoryObj<typeof SwitchGroup>;

export const Primary: StoryGroup = {
  render: (args) => (
    <SwitchGroup {...args}>
      <Group mt="xs">
        <Switch.Item value="react" label="React" />
        <Switch.Item value="svelte" label="Svelte" />
        <Switch.Item value="ng" label="Angular" />
        <Switch.Item value="vue" label="Vue" />
      </Group>
    </SwitchGroup>
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
