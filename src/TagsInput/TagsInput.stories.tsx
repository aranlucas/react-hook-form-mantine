import preview from "../../.storybook/preview";
import { TagsInput } from "./TagsInput";

const meta = preview.meta({
  title: "Combobox/TagsInput",
  component: TagsInput,
});

export const Primary = meta.story({
  args: {
    name: "test",
    label: "Tags",
    placeholder: "Enter tags",
    description: "Press Enter to add a tag",
    data: ["React", "Angular", "Vue", "Svelte"],
  },
  parameters: {
    form: {
      defaultValues: {
        test: ["React"],
      },
    },
  },
});

export const Empty = meta.story({
  args: {
    name: "test",
    label: "Tags input",
    placeholder: "Type and press Enter",
    data: ["React", "Angular", "Vue", "Svelte"],
  },
  parameters: {
    form: {
      defaultValues: {
        test: [],
      },
    },
  },
});
