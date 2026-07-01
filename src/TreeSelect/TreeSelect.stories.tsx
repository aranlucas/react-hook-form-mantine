import { type Meta, type StoryObj } from "@storybook/react";
import { TreeSelect } from "./TreeSelect";

export default {
  title: "Components/TreeSelect",
  component: TreeSelect,
} satisfies Meta<typeof TreeSelect>;

type Story = StoryObj<typeof TreeSelect>;

export const Primary: Story = {
  args: {
    name: "test",
    label: "Pick a folder",
    placeholder: "Pick a folder",
    description: "Select a folder from the tree",
    data: [
      {
        value: "documents",
        label: "Documents",
        children: [
          { value: "projects", label: "Projects" },
          { value: "reports", label: "Reports" },
        ],
      },
      {
        value: "downloads",
        label: "Downloads",
        children: [
          { value: "images", label: "Images" },
          { value: "videos", label: "Videos" },
        ],
      },
    ],
  },
  parameters: {
    form: {
      defaultValues: {
        test: "projects",
      },
    },
  },
};
