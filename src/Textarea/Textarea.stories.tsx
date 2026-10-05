import preview from "../../.storybook/preview";
import { Textarea } from "./Textarea";
import { submitShowsError } from "../../.storybook/play";

const meta = preview.meta({
  title: "Inputs/Textarea",
  component: Textarea,
});

export const Primary = meta.story({
  args: {
    name: "test",
    placeholder: "Your comment",
    label: "Your comment",
    description: "Share your thoughts",
    autosize: true,
    minRows: 3,
    maxRows: 6,
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
    placeholder: "Your comment",
    label: "Required comment",
    rules: {
      required: {
        value: true,
        message: "Comment is required",
      },
      minLength: {
        value: 10,
        message: "Comment must be at least 10 characters",
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

WithValidation.test("shows the error on submit", submitShowsError("Comment is required"));
