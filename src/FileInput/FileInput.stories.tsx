import { type Meta, type StoryObj } from "@storybook/react";
import { FileInput } from "./FileInput";

export default {
  title: "Components/FileInput",
  component: FileInput,
} satisfies Meta<typeof FileInput>;

type Story = StoryObj<typeof FileInput>;

export const Primary: Story = {
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
};

export const WithValidation: Story = {
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
};
