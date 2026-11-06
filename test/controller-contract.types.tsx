import { CheckboxGroup, FileInput, type CheckboxGroupProps } from "@/index";

type ChoiceValues = { choices: string[] };

// Checked by the repository typecheck; preserve the existing public props.
export function checkboxGroupTypeContract() {
  const props: CheckboxGroupProps<ChoiceValues> = {
    name: "choices",
    defaultValue: ["a"],
    children: null,
    onBlur: (event) => {
      event.currentTarget.focus();
    },
    onChange: (values) => {
      values.map((value) => value.toUpperCase());
    },
  };

  return <CheckboxGroup {...props} value={["b"]} />;
}

// Mantine supports both single and multiple file payloads; the adapter must preserve inference.
export function fileInputTypeContract() {
  return (
    <>
      <FileInput name="file" onChange={(file) => file?.slice()} />
      <FileInput multiple name="files" onChange={(files) => files.map((file) => file.name)} />
    </>
  );
}
