import preview from "../../.storybook/preview";
import { TreeSelect } from "./TreeSelect";

const meta = preview.meta({
  title: "Combobox/TreeSelect",
  component: TreeSelect,
});

export const Primary = meta.story({
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
});
