import preview from "../../.storybook/preview";
import { Select } from "./Select";
import { submitShowsError } from "../../.storybook/play";

const meta = preview.meta({
  title: "Combobox/Select",
  component: Select,
});

export const Primary = meta.story({
  args: {
    name: "test",
    label: "Your favorite framework/library",
    placeholder: "Pick one",
    description: "Select one option",
    data: [
      { label: "React", value: "react" },
      { label: "Angular", value: "ng" },
      { label: "Vue", value: "vue" },
      { label: "Svelte", value: "svelte" },
    ],
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
    label: "Required selection",
    placeholder: "Pick one",
    data: [
      { label: "React", value: "react" },
      { label: "Angular", value: "ng" },
      { label: "Vue", value: "vue" },
      { label: "Svelte", value: "svelte" },
    ],
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
        test: null,
      },
    },
  },
});

WithValidation.test("shows the error on submit", submitShowsError("Please select a framework"));

export const Searchable = meta.story({
  args: {
    name: "test",
    label: "Searchable select",
    placeholder: "Search...",
    searchable: true,
    nothingFoundMessage: "No options found",
    data: [
      { label: "React", value: "react" },
      { label: "Angular", value: "ng" },
      { label: "Vue", value: "vue" },
      { label: "Svelte", value: "svelte" },
    ],
  },
  parameters: {
    form: {
      defaultValues: {
        test: null,
      },
    },
  },
});
