import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Autocomplete,
  Checkbox,
  Chip,
  ColorInput,
  ColorPicker,
  DatePickerInput,
  FileInput,
  JsonInput,
  MultiSelect,
  NativeSelect,
  NumberInput,
  PasswordInput,
  PinInput,
  Radio,
  RangeSlider,
  Rating,
  SegmentedControl,
  Select,
  Slider,
  Switch,
  TagsInput,
  Textarea,
  TextInput,
} from "react-hook-form-mantine";
import { Button, Code, Container, Group, Input, Paper, Stack, Title } from "@mantine/core";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const frameworks = [
  { value: "react", label: "React" },
  { value: "ng", label: "Angular" },
  { value: "svelte", label: "Svelte" },
  { value: "vue", label: "Vue" },
];

const schema = z.object({
  fullName: z.string().min(2, "Enter your full name"),
  autocomplete: z.string(),
  checkbox: z.boolean().refine(Boolean, "You must accept the terms"),
  checkboxGroup: z.array(z.string()).min(1, "Pick at least one framework"),
  chip: z.boolean(),
  chipGroupSingle: z.string(),
  chipGroupMultiple: z.array(z.string()),
  colorInput: z.string(),
  colorPicker: z.string(),
  datePicker: z.string().nullable().refine(Boolean, "Pick a date"),
  fileInput: z.instanceof(File).nullable(),
  jsonInput: z.string(),
  multiSelect: z.array(z.string()).min(1, "Pick at least one framework"),
  nativeSelect: z.string(),
  numberInput: z.number({ error: "Enter your age" }).min(18, "You must be at least 18"),
  passwordInput: z.string().min(8, "Use at least 8 characters"),
  pinInput: z.string().length(4, "Enter all 4 digits"),
  radio: z.string().min(1, "Pick a framework"),
  rangeSlider: z.tuple([z.number(), z.number()]),
  rating: z.number(),
  segmentedControl: z.string(),
  select: z.string().nullable().refine(Boolean, "Pick a framework"),
  slider: z.number(),
  switch: z.boolean(),
  tagsInput: z.array(z.string()),
  textarea: z.string().max(200, "Keep it under 200 characters"),
});

type FormValues = z.input<typeof schema>;

export default function App() {
  const [submitted, setSubmitted] = useState<z.output<typeof schema>>();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues, unknown, z.output<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      fullName: "",
      autocomplete: "",
      checkbox: false,
      checkboxGroup: [],
      chip: true,
      chipGroupSingle: "react",
      chipGroupMultiple: [],
      colorInput: "",
      colorPicker: "",
      datePicker: null,
      fileInput: null,
      jsonInput: "",
      multiSelect: [],
      nativeSelect: "React",
      numberInput: 18,
      passwordInput: "",
      pinInput: "",
      radio: "",
      rangeSlider: [20, 80],
      rating: 2,
      segmentedControl: "react",
      select: null,
      slider: 40,
      switch: false,
      tagsInput: [],
      textarea: "",
    },
  });

  return (
    <Container size={1000}>
      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form onSubmit={handleSubmit(setSubmitted)} noValidate>
          <Stack>
            <TextInput
              name="fullName"
              control={control}
              placeholder="Your name"
              label="Full name"
              withAsterisk
            />
            <Autocomplete
              name="autocomplete"
              control={control}
              label="Favorite language"
              placeholder="Start typing"
              data={["TypeScript", "Rust", "Go", "Python"]}
            />
            <Checkbox name="checkbox" control={control} label="I accept the terms" />
            <Checkbox.Group
              name="checkboxGroup"
              control={control}
              label="Frameworks you have used"
              withAsterisk
            >
              <Group mt="xs">
                {frameworks.map((framework) => (
                  <Checkbox.Item key={framework.value} {...framework} />
                ))}
              </Group>
            </Checkbox.Group>
            <Chip name="chip" control={control}>
              Awesome chip
            </Chip>
            <Input.Wrapper label="Primary framework">
              <Group mt="xs">
                <Chip.Group name="chipGroupSingle" control={control}>
                  {frameworks.map(({ value, label }) => (
                    <Chip.Item key={value} value={value}>
                      {label}
                    </Chip.Item>
                  ))}
                </Chip.Group>
              </Group>
            </Input.Wrapper>
            <Input.Wrapper label="Frameworks you want to learn">
              <Group mt="xs">
                <Chip.Group multiple name="chipGroupMultiple" control={control}>
                  {frameworks.map(({ value, label }) => (
                    <Chip.Item key={value} value={value}>
                      {label}
                    </Chip.Item>
                  ))}
                </Chip.Group>
              </Group>
            </Input.Wrapper>
            <ColorInput
              name="colorInput"
              control={control}
              placeholder="Pick color"
              label="Your favorite color"
            />
            <Input.Wrapper label="Accent color">
              <ColorPicker name="colorPicker" control={control} />
            </Input.Wrapper>
            <DatePickerInput
              name="datePicker"
              control={control}
              label="Start date"
              placeholder="Pick date"
              withAsterisk
            />
            <FileInput
              name="fileInput"
              control={control}
              placeholder="Pick file"
              label="Your resume"
            />
            <JsonInput
              name="jsonInput"
              control={control}
              label="Your package.json"
              placeholder="Textarea will autosize to fit the content"
              validationError="Invalid json"
              formatOnBlur
              autosize
              minRows={4}
            />
            <MultiSelect
              name="multiSelect"
              control={control}
              label="Frameworks your team uses"
              placeholder="Pick all that apply"
              data={frameworks}
              withAsterisk
            />
            <NativeSelect
              name="nativeSelect"
              control={control}
              data={["React", "Vue", "Angular", "Svelte"]}
              label="Framework for your next project"
              description="This is anonymous"
            />
            <NumberInput
              name="numberInput"
              control={control}
              placeholder="Your age"
              label="Your age"
              withAsterisk
            />
            <PasswordInput
              name="passwordInput"
              control={control}
              placeholder="Password"
              label="Password"
              description="At least 8 characters"
              withAsterisk
            />
            {/* PinInput only accepts a boolean error, so the label and message sit beside it.
                Input.Wrapper is avoided here: it would give all four inputs the same id. */}
            <div>
              <Input.Label required>Verification code</Input.Label>
              <PinInput name="pinInput" control={control} aria-label="Verification code" />
              {errors.pinInput && <Input.Error mt={5}>{errors.pinInput.message}</Input.Error>}
            </div>
            <Radio.Group
              name="radio"
              control={control}
              label="Favorite framework"
              description="This is anonymous"
              withAsterisk
            >
              <Group mt="xs">
                {frameworks.map((framework) => (
                  <Radio.Item key={framework.value} {...framework} />
                ))}
              </Group>
            </Radio.Group>
            <Input.Wrapper label="Price range">
              <RangeSlider name="rangeSlider" control={control} mt="xs" mb="md" />
            </Input.Wrapper>
            <Input.Wrapper label="Rate this library">
              <Rating name="rating" control={control} mt="xs" />
            </Input.Wrapper>
            <Input.Wrapper label="Preferred framework">
              <SegmentedControl
                name="segmentedControl"
                control={control}
                data={frameworks}
                fullWidth
                mt="xs"
              />
            </Input.Wrapper>
            <Select
              name="select"
              control={control}
              label="Framework you know best"
              placeholder="Pick one"
              data={frameworks}
              withAsterisk
            />
            <Input.Wrapper label="Volume">
              <Slider
                name="slider"
                control={control}
                mt="xs"
                mb="md"
                marks={[
                  { value: 20, label: "20%" },
                  { value: 50, label: "50%" },
                  { value: 80, label: "80%" },
                ]}
              />
            </Input.Wrapper>
            <Switch name="switch" control={control} label="Subscribe to the newsletter" />
            <TagsInput
              name="tagsInput"
              control={control}
              label="Tags"
              placeholder="Press Enter to add a tag"
            />
            <Textarea
              name="textarea"
              control={control}
              placeholder="Your comment"
              label="Your comment"
            />

            <Group mt="md">
              <Button type="submit">Submit</Button>
              <Button
                variant="default"
                onClick={() => {
                  reset();
                  setSubmitted(undefined);
                }}
              >
                Reset
              </Button>
            </Group>
          </Stack>
        </form>
      </Paper>

      {submitted && (
        <Paper withBorder p={30} my={30} radius="md">
          <Title order={3} mb="md">
            Submitted values
          </Title>
          <Code block data-testid="submitted">
            {JSON.stringify(submitted, null, 2)}
          </Code>
        </Paper>
      )}
    </Container>
  );
}
