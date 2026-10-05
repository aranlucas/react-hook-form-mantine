import preview from "../../.storybook/preview";
import { SegmentedControl } from "./SegmentedControl";
import { submitShowsError } from "../../.storybook/play";
import { Input } from "@mantine/core";
import { useFormContext } from "react-hook-form";

const meta = preview.meta({
  title: "Toggles/SegmentedControl",
  component: SegmentedControl,
});

export const Primary = meta.story({
  args: {
    name: "test",
    data: [
      { label: "React", value: "react" },
      { label: "Angular", value: "ng" },
      { label: "Vue", value: "vue" },
      { label: "Svelte", value: "svelte" },
    ],
  },
  parameters: {
    form: {
      defaultValues: {
        test: "react",
      },
    },
  },
});

export const WithValidation = meta.story({
  tags: ["validation"],
  args: {
    name: "test",
    data: [
      { label: "React", value: "react" },
      { label: "Angular", value: "ng" },
      { label: "Vue", value: "vue" },
    ],
    rules: {
      required: {
        value: true,
        message: "Please select an option",
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
  // SegmentedControl has no error prop, so the story renders the message itself.
  render: function Render(args) {
    const { formState, getFieldState } = useFormContext();
    const { error } = getFieldState(args.name, formState);

    return (
      <>
        <SegmentedControl {...args} />
        {error && <Input.Error mt={5}>{error.message}</Input.Error>}
      </>
    );
  },
});

WithValidation.test("shows the error on submit", submitShowsError("Please select an option"));
