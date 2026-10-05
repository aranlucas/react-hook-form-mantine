import preview from "../../../.storybook/preview";
import { SwitchGroup } from "./SwitchGroup";
import { Group } from "@mantine/core";
import { Switch } from "../Switch";

const meta = preview.meta({
  title: "Toggles/SwitchGroup",
  component: SwitchGroup,
  args: {
    children: (
      <Group mt="xs">
        <Switch.Item value="react" label="React" />
        <Switch.Item value="svelte" label="Svelte" />
        <Switch.Item value="ng" label="Angular" />
        <Switch.Item value="vue" label="Vue" />
      </Group>
    ),
  },
});

export const Primary = meta.story({
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
});
