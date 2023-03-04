import type { Meta, StoryObj } from "@storybook/react";
import { withReactHookForm } from "../stories/decorator";
import { TransferList } from "./TransferList";

export default {
  component: TransferList,
  decorators: [withReactHookForm],
} satisfies Meta<typeof TransferList>;

type Story = StoryObj<typeof TransferList>;

export const Primary: Story = {
  args: {
    name: "test",
    value: [
      [
        { value: "react", label: "React" },
        { value: "ng", label: "Angular" },
        { value: "next", label: "Next.js" },
        { value: "blitz", label: "Blitz.js" },
        { value: "gatsby", label: "Gatsby.js" },
        { value: "vue", label: "Vue" },
        { value: "jq", label: "jQuery" },
      ],
      [
        { value: "sv", label: "Svelte" },
        { value: "rw", label: "Redwood" },
        { value: "np", label: "NumPy" },
        { value: "dj", label: "Django" },
        { value: "fl", label: "Flask" },
      ],
    ],
  },
  parameters: {
    form: {
      defaultValues: {
        test: false,
      },
      onSubmit: (data: any) => {
        console.log(data);
      },
    },
  },
};
