import preview from "../../.storybook/preview";
import { NumberInput } from "./NumberInput";
import { submitShowsError } from "../../.storybook/play";

const meta = preview.meta({
  title: "Inputs/NumberInput",
  component: NumberInput,
});

export const Primary = meta.story({
  args: {
    name: "test",
    placeholder: "Your age",
    label: "Your age",
    description: "Must be 18 or older",
    min: 0,
    max: 120,
  },
  parameters: {
    form: {
      defaultValues: {
        test: 18,
      },
    },
  },
});

export const WithValidation = meta.story({
  tags: ["validation"],
  args: {
    name: "test",
    placeholder: "Quantity",
    label: "Quantity",
    min: 1,
    max: 10,
    rules: {
      required: {
        value: true,
        message: "Quantity is required",
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

WithValidation.test("shows the error on submit", submitShowsError("Quantity is required"));
