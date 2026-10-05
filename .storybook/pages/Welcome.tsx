import {
  Anchor,
  Badge,
  Box,
  Button,
  Card,
  Code,
  Group,
  MantineProvider,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  Title,
  UnstyledButton,
} from "@mantine/core";
import { DocsContext } from "@storybook/addon-docs/blocks";
import { type ReactNode, useContext } from "react";
import { NAVIGATE_URL } from "storybook/internal/core-events";
import { catalog, categories, storyId } from "../catalog";

const gradient = { from: "#ec5990", to: "#228be6", deg: 120 };

/** Moves the manager to another entry, the way docs links do. */
const useNavigate = () => {
  const context = useContext(DocsContext);

  return (path: string) => context.channel.emit(NAVIGATE_URL, `?path=${path}`);
};

const features: { title: string; body: ReactNode; mark: string }[] = [
  {
    mark: "1",
    title: "Every Mantine prop",
    body: "Wrappers take the Mantine component's own props, minus the value — the form owns that.",
  },
  {
    mark: "2",
    title: "Validation, displayed",
    body: (
      <>
        Pass <Code>rules</Code> or a resolver; the field error lands in Mantine's <Code>error</Code>{" "}
        prop.
      </>
    ),
  },
  {
    mark: "3",
    title: "Typed field paths",
    body: (
      <>
        <Code>name</Code> is checked against your form's values, as with <Code>useController</Code>.
      </>
    ),
  },
  {
    mark: "4",
    title: "Lifecycle preserved",
    body: (
      <>
        Your <Code>onChange</Code>, <Code>onBlur</Code> and <Code>ref</Code> run alongside the
        form's, so focus-on-error and touched state keep working.
      </>
    ),
  },
];

const tips: { title: string; body: ReactNode }[] = [
  {
    title: "Theme it from the toolbar",
    body: "Switch light and dark, the primary color and the default radius. Every story follows.",
  },
  {
    title: "Watch the form state",
    body: "Each story renders inside a real form. The panel under it shows values, errors and the submit result as you type.",
  },
  {
    title: "Run the tests here",
    body: "Open the test widget at the bottom of the sidebar to run interactions, accessibility checks and coverage in a real browser.",
  },
  {
    title: "Spy on events",
    body: "onChange and onBlur are spies: every call shows up in the Actions panel, with its arguments.",
  },
];

function Hero() {
  const navigate = useNavigate();

  return (
    <Box
      p={{ base: "lg", sm: 40 }}
      style={{
        borderRadius: 20,
        background:
          "radial-gradient(circle at 0% 0%, rgba(236,89,144,.16), transparent 55%), radial-gradient(circle at 100% 100%, rgba(34,139,230,.16), transparent 55%), var(--mantine-color-gray-0)",
        border: "1px solid var(--mantine-color-gray-2)",
      }}
    >
      <Group gap="xs" mb="md">
        <Badge variant="gradient" gradient={gradient} radius="sm">
          v4 · Mantine 9
        </Badge>
        <Badge variant="default" radius="sm">
          {catalog.length} components
        </Badge>
      </Group>
      <Title order={1} fz={{ base: 34, sm: 48 }} lh={1.1} fw={800} style={{ letterSpacing: -1 }}>
        Give Mantine fields a name.
        <br />
        <Text span inherit variant="gradient" gradient={gradient}>
          Let React Hook Form do the wiring.
        </Text>
      </Title>
      <Text size="lg" c="dimmed" mt="md" maw={620}>
        Drop-in wrappers for every Mantine input. Add <Code>name</Code> and <Code>control</Code>,
        keep the Mantine props you know, and get values, validation and errors without writing an
        adapter for each field.
      </Text>
      <Code block mt="xl" fz="sm" style={{ maxWidth: 620, whiteSpace: "pre-wrap" }}>
        pnpm add react-hook-form-mantine react-hook-form @mantine/core @mantine/dates dayjs
      </Code>
      <Group mt="xl" gap="sm">
        <Button
          variant="gradient"
          gradient={gradient}
          size="md"
          onClick={() => navigate("/story/examples-full-form--full-form")}
        >
          See the full form
        </Button>
        <Button
          variant="default"
          size="md"
          onClick={() => navigate("/docs/inputs-textinput--docs")}
        >
          Start with TextInput
        </Button>
        <Button
          variant="subtle"
          size="md"
          component="a"
          href="https://github.com/aranlucas/react-hook-form-mantine"
          target="_blank"
          rel="noreferrer"
        >
          GitHub ↗
        </Button>
      </Group>
    </Box>
  );
}

function Catalog() {
  const navigate = useNavigate();

  return (
    <Stack gap={40}>
      {categories.map(({ name: category, summary }) => (
        <section key={category}>
          <Group justify="space-between" align="baseline" mb="sm">
            <Title order={3} fz={20}>
              {category}
            </Title>
            <Text size="sm" c="dimmed">
              {summary}
            </Text>
          </Group>
          <SimpleGrid cols={{ base: 1, xs: 2, md: 3 }} spacing="sm">
            {catalog
              .filter((entry) => entry.category === category)
              .map((entry) => (
                <UnstyledButton
                  key={entry.name}
                  onClick={() => navigate(`/docs/${storyId(entry)}--docs`)}
                  aria-label={`${entry.name} docs`}
                >
                  <Card
                    withBorder
                    radius="md"
                    padding="md"
                    h="100%"
                    className="rhfm-card"
                    style={{ transition: "border-color 120ms, transform 120ms, box-shadow 120ms" }}
                  >
                    <Text fw={700} ff="monospace" fz="sm">
                      {`<${entry.name} />`}
                    </Text>
                    <Text size="sm" c="dimmed" mt={4}>
                      {entry.summary}
                    </Text>
                  </Card>
                </UnstyledButton>
              ))}
          </SimpleGrid>
        </section>
      ))}
    </Stack>
  );
}

export function Welcome() {
  return (
    <MantineProvider forceColorScheme="light">
      <style>{`
        .rhfm-card:hover { border-color: #ec5990; transform: translateY(-2px);
          box-shadow: 0 6px 20px -8px rgba(236, 89, 144, .45); }
      `}</style>
      <Stack gap={56} pb={40}>
        <Hero />

        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
          {features.map((feature) => (
            <Group key={feature.title} align="flex-start" wrap="nowrap" gap="md">
              <ThemeIcon variant="gradient" gradient={gradient} radius="md" size={36}>
                <Text fw={800} fz="sm" c="white">
                  {feature.mark}
                </Text>
              </ThemeIcon>
              <div>
                <Text fw={700}>{feature.title}</Text>
                <Text size="sm" c="dimmed" mt={2}>
                  {feature.body}
                </Text>
              </div>
            </Group>
          ))}
        </SimpleGrid>

        <section>
          <Title order={2} fz={26} mb="md">
            Getting around
          </Title>
          <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="sm">
            {tips.map((tip) => (
              <Card
                key={tip.title}
                withBorder
                radius="md"
                padding="lg"
                bg="var(--mantine-color-gray-0)"
              >
                <Text fw={700}>{tip.title}</Text>
                <Text size="sm" c="dimmed" mt={4}>
                  {tip.body}
                </Text>
              </Card>
            ))}
          </SimpleGrid>
          <Text size="sm" c="dimmed" mt="md">
            Using a coding agent? The dev server serves an MCP endpoint at{" "}
            <Code>http://localhost:6006/mcp</Code> with the component manifest and every story — see
            the{" "}
            <Anchor
              href="https://storybook.js.org/docs/ai/mcp/overview"
              target="_blank"
              rel="noreferrer"
            >
              Storybook MCP docs
            </Anchor>
            .
          </Text>
        </section>

        <section>
          <Title order={2} fz={26} mb="lg">
            Components
          </Title>
          <Catalog />
        </section>
      </Stack>
    </MantineProvider>
  );
}
