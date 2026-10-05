import preview from "../../.storybook/preview";
import { PinInput } from "./PinInput";

const meta = preview.meta({
  title: "Inputs/PinInput",
  component: PinInput,
});

export const Primary = meta.story({
  args: {
    name: "test",
    length: 6,
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
    length: 4,
    type: "number",
  },
  parameters: {
    form: {
      defaultValues: {
        test: "1234",
      },
    },
  },
});
