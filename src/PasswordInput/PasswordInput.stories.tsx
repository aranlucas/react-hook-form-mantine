import preview from "../../.storybook/preview";
import { PasswordInput } from "./PasswordInput";
import { submitShowsError } from "../../.storybook/play";

const meta = preview.meta({
  title: "Inputs/PasswordInput",
  component: PasswordInput,
});

export const Primary = meta.story({
  args: {
    name: "test",
    placeholder: "Password",
    label: "Password",
    description: "Password must include at least one letter, number and special character",
    visible: false,
  },
  parameters: {
    form: {
      defaultValues: {
        test: "",
      },
    },
  },
});

export const WithValidation = meta.story({
  tags: ["validation"],
  args: {
    name: "test",
    placeholder: "Password",
    label: "Password",
    rules: {
      required: {
        value: true,
        message: "Password is required",
      },
      minLength: {
        value: 8,
        message: "Password must be at least 8 characters",
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

WithValidation.test("shows the error on submit", submitShowsError("Password is required"));
