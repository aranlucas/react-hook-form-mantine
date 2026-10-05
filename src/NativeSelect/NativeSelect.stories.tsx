import preview from "../../.storybook/preview";
import { NativeSelect } from "./NativeSelect";
import { submitShowsError } from "../../.storybook/play";

const meta = preview.meta({
  title: "Combobox/NativeSelect",
  component: NativeSelect,
});

export const Primary = meta.story({
  args: {
    name: "test",
    label: "Select your favorite framework/library",
    description: "This is anonymous",
    data: ["React", "Vue", "Angular", "Svelte"],
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
    label: "Required selection",
    data: ["React", "Vue", "Angular", "Svelte"],
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
