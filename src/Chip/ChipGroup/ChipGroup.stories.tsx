import { type Meta, type StoryObj } from "@storybook/react";
import { ChipGroup } from "./ChipGroup";
import { Chip } from "../Chip";

export default {
  title: "Components/ChipGroup",
  component: ChipGroup,
} satisfies Meta<typeof ChipGroup>;

type StoryGroup = StoryObj<typeof ChipGroup>;

export const ChipGroupSingle: StoryGroup = {
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
  },
  parameters: {
    form: {
      defaultValues: {
        test: "react",
      },
    },
  },
};

export const ChipGroupMultiple: StoryGroup = {
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
        test: ["react"],
      },
    },
  },
};
