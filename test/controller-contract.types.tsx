import { CheckboxGroup, type CheckboxGroupProps } from "@/index";

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
