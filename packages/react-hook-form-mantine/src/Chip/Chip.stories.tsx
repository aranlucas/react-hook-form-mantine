import type { Meta, StoryObj } from "@storybook/react";
import { Chip } from "./Chip";
import { withReactHookForm } from "../stories/decorator";

export default {
  title: "Components/Chip",
  component: Chip,
  decorators: [withReactHookForm],
} satisfies Meta<typeof Chip>;

type Story = StoryObj<typeof Chip>;
type StoryGroup = StoryObj<typeof Chip.Group>;

export const Primary: Story = {
  args: {
    name: "test",
    children: "Test",
  },
  parameters: {
    form: {
      defaultValues: {
        test: false,
      },
    },
  },
};

export const ChipGroupSingle: StoryGroup = {
  render: (args) => (
    <Chip.Group {...args}>
      <Chip.Item value="react">React</Chip.Item>
      <Chip.Item value="ng">Angular</Chip.Item>
      <Chip.Item value="svelte">Svelte</Chip.Item>
      <Chip.Item value="vue">Vue</Chip.Item>
    </Chip.Group>
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
    <Chip.Group {...args}>
      <Chip.Item value="react">React</Chip.Item>
      <Chip.Item value="ng">Angular</Chip.Item>
      <Chip.Item value="svelte">Svelte</Chip.Item>
      <Chip.Item value="vue">Vue</Chip.Item>
    </Chip.Group>
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
