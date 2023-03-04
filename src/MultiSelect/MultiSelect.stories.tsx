import type { Meta, StoryObj } from "@storybook/react";
import { withReactHookForm } from "../stories/decorator";
import { MultiSelect } from "./MultiSelect";

export default {
  component: MultiSelect,
  decorators: [withReactHookForm],
} satisfies Meta<typeof MultiSelect>;

type Story = StoryObj<typeof MultiSelect>;

export const Primary: Story = {
  args: {
    name: "test",
    label: "Your favorite frameworks/libraries",
    placeholder: "Pick all that you like",
    data: [
      { value: "react", label: "React" },
      { value: "ng", label: "Angular" },
      { value: "svelte", label: "Svelte" },
      { value: "vue", label: "Vue" },
      { value: "riot", label: "Riot" },
      { value: "next", label: "Next.js" },
      { value: "blitz", label: "Blitz.js" },
    ],
  },
  parameters: {
    form: {
      defaultValues: {
        test: [],
      },
      onSubmit: (data: any) => {
        console.log(data);
      },
    },
  },
};
