import preview from "../../.storybook/preview";
import { FileInput } from "./FileInput";
import { submitShowsError } from "../../.storybook/play";

const meta = preview.meta({
  title: "Inputs/FileInput",
  component: FileInput,
});

export const Primary = meta.story({
  args: {
    name: "test",
    label: "Your Resume",
    placeholder: "Pick file",
    description: "Upload your resume (PDF, DOC, DOCX)",
    accept: ".pdf,.doc,.docx",
  },
  parameters: {
    form: {
      defaultValues: {
        test: null,
      },
    },
  },
});

export const WithValidation = meta.story({
  tags: ["validation"],
  args: {
    name: "test",
    label: "Upload file",
    placeholder: "Pick file",
    description: "Required file upload",
    rules: {
      required: {
        value: true,
        message: "File is required",
      },
    },
  },
  parameters: {
    form: {
      defaultValues: {
        test: null,
      },
    },
  },
});

WithValidation.test("shows the error on submit", submitShowsError("File is required"));
