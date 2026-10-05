import preview from "../../.storybook/preview";
import { Autocomplete } from "./Autocomplete";
import { submitShowsError } from "../../.storybook/play";

const meta = preview.meta({
  title: "Combobox/Autocomplete",
  component: Autocomplete,
});

export const Primary = meta.story({
  args: {
    name: "test",
    label: "Your favorite framework",
    placeholder: "Pick one",
    description: "Start typing to see suggestions",
    data: ["React", "Angular", "Vue", "Svelte"],
  },
  parameters: {
    form: {
      defaultValues: {
        test: "React",
      },
    },
  },
});

export const WithValidation = meta.story({
  tags: ["validation"],
  args: {
    name: "test",
    label: "Required framework",
    placeholder: "Pick one",
    data: ["React", "Angular", "Vue", "Svelte"],
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
