import preview from "../../../.storybook/preview";
import { RadioGroup } from "./RadioGroup";
import { Group } from "@mantine/core";
import { Radio } from "../Radio";
import { submitShowsError } from "../../../.storybook/play";

const meta = preview.meta({
  title: "Toggles/RadioGroup",
  component: RadioGroup,
  args: {
    children: (
      <Group mt="xs">
        <Radio.Item value="react" label="React" />
        <Radio.Item value="svelte" label="Svelte" />
        <Radio.Item value="ng" label="Angular" />
        <Radio.Item value="vue" label="Vue" />
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
        test: "react",
      },
    },
  },
});

export const WithValidation = meta.story({
  tags: ["validation"],
  args: {
    name: "test",
    label: "Pick a framework",
    rules: {
      required: {
        value: true,
        message: "Please select a framework",
      },
    },
  },
  parameters: {
    form: {
      defaultValues: {
        test: "",
      },
    },
  },
});

WithValidation.test("shows the error on submit", submitShowsError("Please select a framework"));
