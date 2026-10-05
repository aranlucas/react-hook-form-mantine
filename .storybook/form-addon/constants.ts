export const ADDON_ID = "react-hook-form-mantine/form";

export const PANEL_ID = `${ADDON_ID}/panel`;

export const EVENTS = {
  /** Preview → manager: the story's form state changed. */
  STATE: `${ADDON_ID}/state`,
  /** Manager → preview: send the current state again, for a panel that mounted late. */
  REQUEST: `${ADDON_ID}/request`,
  /** Manager → preview: reset the story's form. */
  RESET: `${ADDON_ID}/reset`,
  /** Manager → preview: submit the story's form. */
  SUBMIT: `${ADDON_ID}/submit`,
} as const;

export type FieldSnapshot = {
  name: string;
  /** The value as compact JSON. */
  value: string;
  dirty: boolean;
  touched: boolean;
  error?: string;
};

/** What the panel shows; JSON strings so it crosses the channel unchanged. */
export type FormSnapshot = {
  storyId: string;
  mode: string;
  isValid: boolean;
  isDirty: boolean;
  isSubmitSuccessful: boolean;
  submitCount: number;
  fields: FieldSnapshot[];
  values: string;
  errors: string | null;
  submitted: string | null;
};
