import { type Meta, type StoryObj } from "@storybook/react";
import { TagsInput } from "./TagsInput";

export default {
  title: "Components/TagsInput",
  component: TagsInput,
} satisfies Meta<typeof TagsInput>;

type Story = StoryObj<typeof TagsInput>;

export const Primary: Story = {
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
};

export const Empty: Story = {
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
};
