import { addons } from "storybook/manager-api";
import "./form-addon/manager";
import { PANEL_ID } from "./form-addon/constants";
import { darkTheme, lightTheme } from "./theme";

const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

addons.setConfig({
  theme: prefersDark ? darkTheme : lightTheme,
  // Open on the Form panel: the form state is what these stories are about.
  selectedPanel: PANEL_ID,
  sidebar: {
    showRoots: true,
  },
});
