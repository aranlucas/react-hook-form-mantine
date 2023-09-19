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
      </Group>
    </CheckboxGroup>
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
