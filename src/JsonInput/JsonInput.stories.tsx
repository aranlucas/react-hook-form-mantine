import preview from "../../.storybook/preview";
import { JsonInput } from "./JsonInput";

const meta = preview.meta({
  title: "Inputs/JsonInput",
  component: JsonInput,
});

export const Primary = meta.story({
  args: {
    name: "test",
    label: "Your package.json",
    placeholder: "Textarea will autosize to fit the content",
    description: "Paste a valid JSON document",
    formatOnBlur: true,
    autosize: true,
    minRows: 4,
  },
  parameters: {
    form: {
      defaultValues: {
        test: "",
      },
    },
  },
});

export const WithValue = meta.story({
  args: {
    name: "test",
    label: "JSON input",
    placeholder: "Enter JSON",
    formatOnBlur: true,
    validationError: "Invalid JSON",
  },
  parameters: {
    form: {
      defaultValues: {
        test: '{"name": "test", "value": 42}',
      },
    },
  },
});
