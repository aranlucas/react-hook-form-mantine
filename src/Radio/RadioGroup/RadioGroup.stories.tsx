import { type Meta, type StoryObj } from "@storybook/react";
import { RadioGroup } from "./RadioGroup";
import { Group } from "@mantine/core";
import { Radio } from "../Radio";

export default {
  title: "Components/RadioGroup",
  component: RadioGroup,
} satisfies Meta<typeof RadioGroup>;

type Story = StoryObj<typeof RadioGroup>;

export const Primary: Story = {
  render: (args) => (
    <RadioGroup {...args}>
      <Group mt="xs">
        <Radio.Item value="react" label="React" />
        <Radio.Item value="svelte" label="Svelte" />
        <Radio.Item value="ng" label="Angular" />
        <Radio.Item value="vue" label="Vue" />
      </Group>
    </RadioGroup>
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
