import { expect, type userEvent as userEventType } from "storybook/test";

type TestContext = {
  canvas: {
    getByRole: (role: string, options: { name: string }) => HTMLElement;
    findByText: (text: string) => Promise<HTMLElement>;
  };
  userEvent: Pick<ReturnType<typeof userEventType.setup>, "click">;
};

export const submitShowsError =
  (message: string) =>
  async ({ canvas, userEvent }: TestContext) => {
    await userEvent.click(canvas.getByRole("button", { name: "Submit" }));
    await expect(await canvas.findByText(message)).toBeVisible();
  };
