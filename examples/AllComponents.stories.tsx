import { useForm } from "react-hook-form";
import {
  Autocomplete,
  Checkbox,
  Chip,
  ColorInput,
  ColorPicker,
  FileInput,
  JsonInput,
  MultiSelect,
  NativeSelect,
  NumberInput,
  PasswordInput,
  PinInput,
  Radio,
  Rating,
  SegmentedControl,
  Select,
  Slider,
  Switch,
  Textarea,
  TextInput,
  TransferList,
} from "../src/index";
import { Button, Group, Paper, Container, Stack } from "@mantine/core";
import { type Meta } from "@storybook/react";

export default {
  title: "Examples/AllComponents",
} satisfies Meta;

export const AllComponents = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      autocomplete: "",
      checkbox: true,
      chip: true,
      colorInput: "",
      colorPicker: "",
      fileInput: null,
      jsonInput: "",
      multiSelect: [],
      nativeSelect: "",
      numberInput: 18,
      passwordInput: "",
      pinInput: "",
      radio: "",
      rating: 2,
      segmentedControl: "",
      select: "",
      slider: 40,
      switch: "",
      textarea: "",
      textInput: "",
      transferList: [
        [
          { value: "react", label: "React" },
          { value: "ng", label: "Angular" },
          { value: "next", label: "Next.js" },
          { value: "blitz", label: "Blitz.js" },
          { value: "gatsby", label: "Gatsby.js" },
          { value: "vue", label: "Vue" },
          { value: "jq", label: "jQuery" },
        ],
        [
          { value: "sv", label: "Svelte" },
          { value: "rw", label: "Redwood" },
          { value: "np", label: "NumPy" },
          { value: "dj", label: "Django" },
          { value: "fl", label: "Flask" },
        ],
      ],
    },
  });

  return (
    <div className="App">
      <Container size={1000}>
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <form
            onSubmit={handleSubmit(
              (data) => console.log(data),
              (error) => console.log(error)
            )}
          >
            <Stack spacing="xl">
              <Autocomplete
                name="autocomplete"
                control={control}
                label="Your favorite framework/library"
                placeholder="Pick one"
                data={["React", "Angular", "Svelte", "Vue"]}
              />
              <Checkbox
                name="checkbox"
                value="Test"
                control={control}
                label="I agree to sell my privacy"
              />
              <Chip name="chip" control={control}>
                Awesome chip
              </Chip>
              <ColorInput
                name="colorInput"
                control={control}
                placeholder="Pick color"
                label="Your favorite color"
              />
              <ColorPicker name="colorPicker" control={control} />
              <FileInput
                name="fileInput"
                control={control}
                placeholder="Pick file"
                label="Your resume"
                withAsterisk
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
              <TextInput name="textInput" control={control} label="TextBox" />
              <MultiSelect
                name="multiSelect"
                control={control}
                data={[
                  { value: "react", label: "React" },
                  { value: "ng", label: "Angular" },
                  { value: "svelte", label: "Svelte" },
                  { value: "vue", label: "Vue" },
                  { value: "riot", label: "Riot" },
                  { value: "next", label: "Next.js" },
                  { value: "blitz", label: "Blitz.js" },
                ]}
                label="Your favorite frameworks/libraries"
                placeholder="Pick all that you like"
              />
              <NativeSelect
                name="nativeSelect"
                control={control}
                data={["React", "Vue", "Angular", "Svelte"]}
                label="Select your favorite framework/library"
                description="This is anonymous"
                withAsterisk
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
                description="Password must include at least one letter, number and special character"
                withAsterisk
              />
              <Group position="center">
                <PinInput name="pinInput" control={control} />
              </Group>
              <Radio.Group
                name="radio"
                control={control}
                label="Select your favorite framework/library"
                description="This is anonymous"
                withAsterisk
              >
                <Group mt="xs">
                  <Radio.Item value="react" label="React" />
                  <Radio.Item value="svelte" label="Svelte" />
                  <Radio.Item value="ng" label="Angular" />
                  <Radio.Item value="vue" label="Vue" />
                </Group>
              </Radio.Group>
              <Rating name="rating" control={control} />
              <SegmentedControl
                name="segmentedControl"
                control={control}
                data={[
                  { label: "React", value: "react" },
                  { label: "Angular", value: "ng" },
                  { label: "Vue", value: "vue" },
                  { label: "Svelte", value: "svelte" },
                ]}
              />
              <Select
                name="select"
                control={control}
                label="Your favorite framework/library"
                placeholder="Pick one"
                data={[
                  { value: "react", label: "React" },
                  { value: "ng", label: "Angular" },
                  { value: "svelte", label: "Svelte" },
                  { value: "vue", label: "Vue" },
                ]}
              />
              <Slider
                name="slider"
                control={control}
                marks={[
                  { value: 20, label: "20%" },
                  { value: 50, label: "50%" },
                  { value: 80, label: "80%" },
                ]}
              />
              <Switch
                name="switch"
                control={control}
                label="I agree to sell my privacy"
              />
              <Textarea
                name="textarea"
                control={control}
                placeholder="Your comment"
                label="Your comment"
                withAsterisk
              />
              <TextInput
                name="textInput"
                control={control}
                placeholder="Your name"
                label="Full name"
                withAsterisk
              />
              <TransferList
                name="transferList"
                control={control}
                searchPlaceholder="Search..."
                nothingFound="Nothing here"
                titles={["Frameworks", "Libraries"]}
                breakpoint="sm"
              />
              <Group position="left" mt="md">
                <Button type="submit">Submit</Button>
              </Group>
            </Stack>
          </form>
        </Paper>
      </Container>
    </div>
  );
};
