import { expect, userEvent, within } from "storybook/test";

type PlayContext = { canvasElement: HTMLElement };

/** Submits the story's form and expects the field's validation message to be shown. */
export const submitShowsError =
  (message: string) =>
  async ({ canvasElement }: PlayContext) => {
    const canvas = within(canvasElement);

    await userEvent.click(canvas.getByRole("button", { name: "Submit" }));
    await expect(await canvas.findByText(message)).toBeVisible();
  };
