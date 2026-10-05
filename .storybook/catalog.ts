export type Category = "Inputs" | "Combobox" | "Toggles" | "Sliders" | "Color" | "Dates";

type Entry = {
  name: string;
  category: Category;
  summary: string;
  /** Path on mantine.dev, e.g. `core/text-input`. */
  mantine: string;
};

export const categories: { name: Category; summary: string }[] = [
  { name: "Inputs", summary: "Free-form text, numbers, files and structured values." },
  { name: "Combobox", summary: "Pick one or many values from a list of options." },
  { name: "Toggles", summary: "Booleans, single choices and small option sets." },
  { name: "Sliders", summary: "Numeric values picked on a track or dial." },
  { name: "Color", summary: "Color values as text, swatches or channels." },
  { name: "Dates", summary: "Dates, months, years and times — inline or in a popover." },
];

export const catalog: Entry[] = [
  { name: "Input", category: "Inputs", summary: "The unstyled base input.", mantine: "core/input" },
  {
    name: "TextInput",
    category: "Inputs",
    summary: "Single-line text, with label and error.",
    mantine: "core/text-input",
  },
  {
    name: "PasswordInput",
    category: "Inputs",
    summary: "Text input with a visibility toggle.",
    mantine: "core/password-input",
  },
  {
    name: "Textarea",
    category: "Inputs",
    summary: "Multi-line text that can grow with its content.",
    mantine: "core/textarea",
  },
  {
    name: "NumberInput",
    category: "Inputs",
    summary: "Numbers with steppers, bounds and formatting.",
    mantine: "core/number-input",
  },
  {
    name: "MaskInput",
    category: "Inputs",
    summary: "Text constrained to a pattern like a phone number.",
    mantine: "core/mask-input",
  },
  {
    name: "JsonInput",
    category: "Inputs",
    summary: "A textarea that validates and formats JSON.",
    mantine: "core/json-input",
  },
  {
    name: "PinInput",
    category: "Inputs",
    summary: "One box per character for codes and PINs.",
    mantine: "core/pin-input",
  },
  {
    name: "FileInput",
    category: "Inputs",
    summary: "Pick one or more files from disk.",
    mantine: "core/file-input",
  },
  {
    name: "Select",
    category: "Combobox",
    summary: "Pick one option, optionally searchable.",
    mantine: "core/select",
  },
  {
    name: "MultiSelect",
    category: "Combobox",
    summary: "Pick several options, shown as pills.",
    mantine: "core/multi-select",
  },
  {
    name: "Autocomplete",
    category: "Combobox",
    summary: "Free text with suggestions.",
    mantine: "core/autocomplete",
  },
  {
    name: "TagsInput",
    category: "Combobox",
    summary: "Type and confirm any number of tags.",
    mantine: "core/tags-input",
  },
  {
    name: "NativeSelect",
    category: "Combobox",
    summary: "The browser's own select element.",
    mantine: "core/native-select",
  },
  {
    name: "TreeSelect",
    category: "Combobox",
    summary: "Pick from nested, expandable options.",
    mantine: "core/tree-select",
  },
  {
    name: "Checkbox",
    category: "Toggles",
    summary: "A single boolean.",
    mantine: "core/checkbox",
  },
  {
    name: "CheckboxGroup",
    category: "Toggles",
    summary: "An array of checked values.",
    mantine: "core/checkbox",
  },
  { name: "Chip", category: "Toggles", summary: "A boolean as a pill.", mantine: "core/chip" },
  {
    name: "ChipGroup",
    category: "Toggles",
    summary: "One or many values as pills.",
    mantine: "core/chip",
  },
  {
    name: "Radio",
    category: "Toggles",
    summary: "A single radio bound to a value.",
    mantine: "core/radio",
  },
  {
    name: "RadioGroup",
    category: "Toggles",
    summary: "Exactly one value from a set.",
    mantine: "core/radio",
  },
  {
    name: "Switch",
    category: "Toggles",
    summary: "A boolean as an on/off switch.",
    mantine: "core/switch",
  },
  {
    name: "SwitchGroup",
    category: "Toggles",
    summary: "An array of switched-on values.",
    mantine: "core/switch",
  },
  {
    name: "SegmentedControl",
    category: "Toggles",
    summary: "One value from a few, side by side.",
    mantine: "core/segmented-control",
  },
  {
    name: "Rating",
    category: "Toggles",
    summary: "A score out of a number of stars.",
    mantine: "core/rating",
  },
  {
    name: "Slider",
    category: "Sliders",
    summary: "One number on a track.",
    mantine: "core/slider",
  },
  {
    name: "RangeSlider",
    category: "Sliders",
    summary: "A [from, to] pair on a track.",
    mantine: "core/slider",
  },
  {
    name: "AngleSlider",
    category: "Sliders",
    summary: "An angle picked on a dial.",
    mantine: "core/angle-slider",
  },
  {
    name: "ColorInput",
    category: "Color",
    summary: "A color as text, with a picker dropdown.",
    mantine: "core/color-input",
  },
  {
    name: "ColorPicker",
    category: "Color",
    summary: "An inline saturation, hue and alpha picker.",
    mantine: "core/color-picker",
  },
  {
    name: "HueSlider",
    category: "Color",
    summary: "The hue channel alone.",
    mantine: "core/color-picker",
  },
  {
    name: "AlphaSlider",
    category: "Color",
    summary: "The alpha channel alone.",
    mantine: "core/color-picker",
  },
  {
    name: "DateInput",
    category: "Dates",
    summary: "Type a date, or pick one from a calendar.",
    mantine: "dates/date-input",
  },
  {
    name: "DatePicker",
    category: "Dates",
    summary: "An inline calendar for dates and ranges.",
    mantine: "dates/date-picker",
  },
  {
    name: "DatePickerInput",
    category: "Dates",
    summary: "A calendar in a popover.",
    mantine: "dates/date-picker-input",
  },
  {
    name: "DateTimePicker",
    category: "Dates",
    summary: "A date and time in a popover.",
    mantine: "dates/date-time-picker",
  },
  {
    name: "InlineDateTimePicker",
    category: "Dates",
    summary: "A date and time, inline.",
    mantine: "dates/date-time-picker",
  },
  {
    name: "MonthPicker",
    category: "Dates",
    summary: "An inline grid of months.",
    mantine: "dates/month-picker",
  },
  {
    name: "MonthPickerInput",
    category: "Dates",
    summary: "A month grid in a popover.",
    mantine: "dates/month-picker-input",
  },
  {
    name: "YearPicker",
    category: "Dates",
    summary: "An inline grid of years.",
    mantine: "dates/year-picker",
  },
  {
    name: "YearPickerInput",
    category: "Dates",
    summary: "A year grid in a popover.",
    mantine: "dates/year-picker-input",
  },
  {
    name: "TimeInput",
    category: "Dates",
    summary: "The browser's own time field.",
    mantine: "dates/time-input",
  },
  {
    name: "TimePicker",
    category: "Dates",
    summary: "Hours, minutes and seconds with dropdowns.",
    mantine: "dates/time-picker",
  },
];

/** The catalog entry for a story title such as `Inputs/TextInput`. */
export const entryForTitle = (title: string) =>
  catalog.find((entry) => title === `${entry.category}/${entry.name}`);

/** The id Storybook derives from a title, e.g. `inputs-textinput`. */
export const storyId = (entry: Entry) => `${entry.category}-${entry.name}`.toLowerCase();

export const sourceUrl = (entry: Entry) => {
  const dir = entry.name
    .replace(/^CheckboxGroup$/, "Checkbox/CheckBoxGroup")
    .replace(/^ChipGroup$/, "Chip/ChipGroup")
    .replace(/^RadioGroup$/, "Radio/RadioGroup")
    .replace(/^SwitchGroup$/, "Switch/SwitchGroup");

  return `https://github.com/aranlucas/react-hook-form-mantine/tree/main/src/${dir}`;
};
