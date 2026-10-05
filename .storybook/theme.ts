import { create } from "storybook/theming";

const brand = {
  brandTitle: "React Hook Form Mantine",
  brandUrl: "https://github.com/aranlucas/react-hook-form-mantine",
  brandTarget: "_blank",
  // React Hook Form's pink, with Mantine's blue as the accent.
  colorPrimary: "#ec5990",
  colorSecondary: "#228be6",
  fontBase:
    "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
  fontCode: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
  appBorderRadius: 8,
  inputBorderRadius: 6,
} as const;

export const lightTheme = create({
  ...brand,
  base: "light",
  brandImage: "./logo-light.svg",
  appBg: "#f8f9fa",
  appContentBg: "#ffffff",
  appBorderColor: "#e9ecef",
  barBg: "#ffffff",
  textColor: "#1a1b1e",
  textMutedColor: "#868e96",
});

export const darkTheme = create({
  ...brand,
  base: "dark",
  brandImage: "./logo-dark.svg",
  // Mantine's dark palette, so the manager and a dark canvas read as one surface.
  appBg: "#1f1f1f",
  appContentBg: "#242424",
  appPreviewBg: "#242424",
  appBorderColor: "#2e2e2e",
  barBg: "#1f1f1f",
  textColor: "#c9c9c9",
  textMutedColor: "#828282",
});
