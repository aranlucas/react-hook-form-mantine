import { type Meta } from "@storybook/react";
import { useToggle, upperFirst } from "@mantine/hooks";
import {
  Text,
  Paper,
  Group,
  Button,
  Divider,
  Anchor,
  Stack,
} from "@mantine/core";
import { GoogleButton, TwitterButton } from "./SocialButtons/SocialButtons";
import { useForm } from "react-hook-form";
import { Checkbox, PasswordInput, TextInput } from "../src/index";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export default {
  title: "Examples/AuthenticationForm",
} satisfies Meta;

const schema = z.object({
  email: z.string().email("Invalid email"),
  name: z.string().optional(),
  password: z.string().min(6, "Password should include at least 6 characters"),
  terms: z.boolean(),
});

type FormSchemaType = z.infer<typeof schema>;

export const AuthenticationForm = () => {
  const [type, toggle] = useToggle(["login", "register"]);

  const { control, handleSubmit } = useForm<FormSchemaType>({
    defaultValues: {
      email: "",
      name: "",
      password: "",
      terms: false,
    },
    resolver: zodResolver(schema),
  });

  return (
    <Paper radius="md" p="xl" withBorder mt={30}>
      <Text size="lg" weight={500}>
        Welcome to Mantine, {type} with
      </Text>

      <Group grow mb="md" mt="md">
        <GoogleButton radius="xl">Google</GoogleButton>
        <TwitterButton radius="xl">Twitter</TwitterButton>
      </Group>

      <Divider label="Or continue with email" labelPosition="center" my="lg" />

      <form
        onSubmit={handleSubmit(
          (data) => {
            alert(JSON.stringify(data, null, 2));
          },
          (error) => {
            alert(JSON.stringify(error, null, 2));
          }
        )}
      >
        <Stack>
          {type === "register" && (
            <TextInput
              control={control}
              name="name"
              label="Name"
              placeholder="Your name"
              radius="md"
            />
          )}

          <TextInput
            required
            control={control}
            name="email"
            label="Email"
            placeholder="hello@mantine.dev"
            radius="md"
          />

          <PasswordInput
            control={control}
            name="password"
            required
            label="Password"
            placeholder="Your password"
            radius="md"
          />

          {type === "register" && (
            <Checkbox
              control={control}
              name="terms"
              label="I accept terms and conditions"
            />
          )}
        </Stack>

        <Group position="apart" mt="xl">
          <Anchor
            component="button"
            type="button"
            color="dimmed"
            onClick={() => {
              toggle();
            }}
            size="xs"
          >
            {type === "register"
              ? "Already have an account? Login"
              : "Don't have an account? Register"}
          </Anchor>
          <Button type="submit" radius="xl">
            {upperFirst(type)}
          </Button>
        </Group>
      </form>
    </Paper>
  );
};
