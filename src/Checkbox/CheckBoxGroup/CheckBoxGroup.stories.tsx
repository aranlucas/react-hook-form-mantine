import { Group } from "@mantine/core";
import { type Meta, type StoryObj } from "@storybook/react";
import { CheckboxGroup } from "./CheckBoxGroup";
import { Checkbox } from "../Checkbox";

type StoryGroup = StoryObj<typeof CheckboxGroup>;

export default {
  title: "Components/CheckboxGroup",
  component: CheckboxGroup,
} satisfies Meta<typeof CheckboxGroup>;

export const Primary: StoryGroup = {
  render: (args) => (
    <CheckboxGroup {...args}>
      <Group mt="xs">
        <Checkbox.Item value="react" label="React" />
        <Checkbox.Item value="svelte" label="Svelte" />
        <Checkbox.Item value="ng" label="Angular" />
        <Checkbox.Item value="vue" label="Vue" />
      </Group>
    </CheckboxGroup>
  ),
  args: {
    name: "test",
    label: "Select your favorite frameworks/libraries",
    description: "Choose all that apply",
  },
  parameters: {
    form: {
      defaultValues: {
        test: ["react"],
      },
    },
  },
};

export const WithValidation: StoryGroup = {
  render: (args) => (
    <CheckboxGroup {...args}>
      <Group mt="xs">
        <Checkbox.Item value="react" label="React" />
        <Checkbox.Item value="svelte" label="Svelte" />
        <Checkbox.Item value="ng" label="Angular" />
        <Checkbox.Item value="vue" label="Vue" />
      </Group>
    </CheckboxGroup>
  ),
  args: {
    name: "test",
    label: "Required selection",
    rules: {
      required: {
        value: true,
        message: "Please select at least one option",
      },
    },
  },
  parameters: {
    form: {
      defaultValues: {
        test: [],
      },
    },
  },
};
