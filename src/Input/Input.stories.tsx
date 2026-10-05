import preview from "../../.storybook/preview";
import { Input } from "./Input";

const meta = preview.meta({
  title: "Inputs/Input",
  component: Input,
  // InputProps has no HTML attributes, so the accessible name is spread in untyped.
  render: (args) => <Input {...args} {...{ "aria-label": "Answer" }} />,
});

export const Primary = meta.story({
  args: {
    name: "test",
  },
  parameters: {
    form: {
      defaultValues: {
        test: "",
      },
    },
  },
});

export const WithError = meta.story({
  tags: ["validation"],
  args: {
    name: "test",
    rules: {
      required: {
        value: true,
        message: "Required",
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
