/// <reference types="vite/client" />
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "./preview.css";
import addonA11y from "@storybook/addon-a11y";
import addonDocs from "@storybook/addon-docs";
import {
  Box,
  createTheme,
  type CSSVariablesResolver,
  type MantineColor,
  MantineProvider,
} from "@mantine/core";
import { definePreview } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { DocsPage } from "./DocsPage";
import { StoryForm } from "./StoryForm";
import { lightTheme } from "./theme";

// Colors whose shade 8 keeps white button text above WCAG AA (4.5:1).
const primaryColors: MantineColor[] = ["blue", "indigo", "violet", "grape", "pink", "dark"];

// Mantine's defaults for muted and error text fall under 4.5:1 on white; the a11y tests hold
// stories to AA, so the stories use darker shades.
const cssVariablesResolver: CSSVariablesResolver = (theme) => ({
  variables: {},
  light: {
    "--mantine-color-dimmed": "#666d75",
    "--mantine-color-placeholder": "#666d75",
    "--mantine-color-error": theme.colors.red[9],
  },
  dark: {
    "--mantine-color-dimmed": "#a0a0a0",
    "--mantine-color-placeholder": "#a0a0a0",
    "--mantine-color-error": theme.colors.red[4],
  },
});

const controllerProp = (description: string, summary: string) => ({
  description,
  // Changing these live would re-key the form under the story, so they are documented only.
  control: false as const,
  table: { category: "react-hook-form", type: { summary } },
});

export default definePreview({
  addons: [addonDocs(), addonA11y()],
  tags: ["autodocs"],

  globalTypes: {
    colorScheme: {
      description: "Mantine color scheme",
      toolbar: {
        title: "Color scheme",
        icon: "mirror",
        items: [
          { value: "light", title: "Light", icon: "sun" },
          { value: "dark", title: "Dark", icon: "moon" },
        ],
        dynamicTitle: true,
      },
    },
    primaryColor: {
      description: "theme.primaryColor",
      toolbar: {
        title: "Primary color",
        icon: "paintbrush",
        items: primaryColors.map((color) => ({ value: color, title: color })),
        dynamicTitle: true,
      },
    },
    radius: {
      description: "theme.defaultRadius",
      toolbar: {
        title: "Radius",
        icon: "circlehollow",
        items: ["xs", "sm", "md", "lg", "xl"].map((radius) => ({ value: radius, title: radius })),
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    colorScheme: "light",
    primaryColor: "blue",
    radius: "sm",
  },

  // Storybook applies decorators inside-out: every story gets Mantine, and component
  // stories also get a form. Stories that render their own <form> set `form: false`.
  decorators: [
    (Story, { args, parameters }) =>
      parameters.form === false ? (
        <Story />
      ) : (
        <StoryForm
          {...parameters.form}
          defaultValues={{
            ...(args.name && { [args.name]: args[args.name] }),
            ...parameters.form?.defaultValues,
          }}
          resolver={parameters.resolver}
        >
          <Story />
        </StoryForm>
      ),
    (Story, { globals }) => (
      <MantineProvider
        theme={createTheme({
          primaryColor: globals.primaryColor,
          primaryShade: 8,
          defaultRadius: globals.radius,
        })}
        cssVariablesResolver={cssVariablesResolver}
        forceColorScheme={globals.colorScheme}
      >
        {/* Paints the scheme's background in docs too, where the page body isn't Mantine's. */}
        <Box bg="var(--mantine-color-body)" c="var(--mantine-color-text)">
          <Story />
        </Box>
      </MantineProvider>
    ),
  ],

  // Every wrapper composes these with the form's own handlers; the spies log to the Actions panel.
  args: {
    onChange: fn(),
    onBlur: fn(),
  },

  argTypes: {
    name: controllerProp("Path of the field in the form values.", "FieldPath<T>"),
    control: controllerProp("The `control` object from `useForm`.", "Control<T>"),
    rules: controllerProp("Validation rules, as for `register`.", "RegisterOptions<T>"),
    defaultValue: controllerProp(
      "Value used when the form has no default for this field.",
      "FieldPathValue<T>",
    ),
    shouldUnregister: controllerProp("Drop the value when the field unmounts.", "boolean"),
    exact: controllerProp("Subscribe to this field name exactly, not its children.", "boolean"),
    onChange: { table: { category: "events" } },
    onBlur: { table: { category: "events" } },
  },

  parameters: {
    layout: "fullscreen",
    // Mantine paints the canvas from the color scheme toolbar.
    backgrounds: { disable: true },
    controls: {
      expanded: true,
      // Mantine's internal props, such as `__vars`.
      exclude: /^__/,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      page: DocsPage,
      theme: lightTheme,
      codePanel: true,
      toc: { headingSelector: "h2, h3", title: "On this page" },
    },
    // Fail tests on accessibility violations, in the test widget and in CI.
    a11y: { test: "error" },
    options: {
      storySort: {
        order: [
          "Introduction",
          "Inputs",
          "Combobox",
          "Toggles",
          "Sliders",
          "Color",
          "Dates",
          "Examples",
        ],
      },
    },
  },
});
