import preview from "../../.storybook/preview";
import { MultiSelect } from "./MultiSelect";
import { submitShowsError } from "../../.storybook/play";

const meta = preview.meta({
  title: "Combobox/MultiSelect",
  component: MultiSelect,
});

export const Primary = meta.story({
  args: {
    name: "test",
    label: "Your favorite frameworks/libraries",
    placeholder: "Pick all that you like",
    description: "Choose all that apply",
    data: ["React", "Angular", "Vue", "Svelte"],
  },
  parameters: {
    form: {
      defaultValues: {
        test: ["React", "Vue"],
      },
    },
  },
});

export const WithValidation = meta.story({
  tags: ["validation"],
  args: {
    name: "test",
    label: "Required selection",
    placeholder: "Pick at least one",
    data: ["React", "Angular", "Vue", "Svelte"],
    rules: {
      required: {
        value: true,
        message: "Please select at least one framework",
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
  submitShowsError("Please select at least one framework"),
);
