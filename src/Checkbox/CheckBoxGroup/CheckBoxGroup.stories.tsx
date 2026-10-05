import preview from "../../../.storybook/preview";
import { Group } from "@mantine/core";
import { CheckboxGroup } from "./CheckBoxGroup";
import { Checkbox } from "../Checkbox";
import { submitShowsError } from "../../../.storybook/play";

const meta = preview.meta({
  title: "Toggles/CheckboxGroup",
  component: CheckboxGroup,
  args: {
    children: (
      <Group mt="xs">
        <Checkbox.Item value="react" label="React" />
        <Checkbox.Item value="svelte" label="Svelte" />
        <Checkbox.Item value="ng" label="Angular" />
        <Checkbox.Item value="vue" label="Vue" />
      </Group>
    ),
  },
});

export const Primary = meta.story({
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
});

export const WithValidation = meta.story({
  tags: ["validation"],
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
});

WithValidation.test(
  "shows the error on submit",
  submitShowsError("Please select at least one option"),
);
