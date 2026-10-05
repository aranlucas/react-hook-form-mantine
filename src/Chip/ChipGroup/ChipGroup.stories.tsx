import preview from "../../../.storybook/preview";
import { ChipGroup } from "./ChipGroup";
import { Chip } from "../Chip";

const meta = preview.meta({
  title: "Toggles/ChipGroup",
  component: ChipGroup,
});

export const Single = meta.story({
  render: (args) => (
    <ChipGroup {...args}>
      <Chip.Item value="react">React</Chip.Item>
      <Chip.Item value="ng">Angular</Chip.Item>
      <Chip.Item value="svelte">Svelte</Chip.Item>
      <Chip.Item value="vue">Vue</Chip.Item>
    </ChipGroup>
  ),
  args: {
    name: "test",
    multiple: false,
  },
  parameters: {
    form: {
      defaultValues: {
        test: "react",
      },
    },
  },
});

export const Multiple = meta.story({
  render: (args) => (
    <ChipGroup {...args}>
      <Chip.Item value="react">React</Chip.Item>
      <Chip.Item value="ng">Angular</Chip.Item>
      <Chip.Item value="svelte">Svelte</Chip.Item>
      <Chip.Item value="vue">Vue</Chip.Item>
    </ChipGroup>
  ),
  args: {
    name: "test",
    multiple: true,
  },
  parameters: {
    form: {
      defaultValues: {
        test: ["react", "vue"],
      },
    },
  },
});
