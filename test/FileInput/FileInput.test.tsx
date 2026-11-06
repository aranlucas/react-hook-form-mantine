import { act, screen, renderWithForm, waitFor, userEvent } from "@test/test-utils";
import { FileInput } from "@/FileInput/FileInput";

type UploadValues = { files: File[] };

describe("FileInput", () => {
  it("submits multiple files, clears them, and restores them on reset", async () => {
    const user = userEvent.setup();
    const files = [new File(["first"], "first.txt"), new File(["second"], "second.txt")];
    const onChange = vi.fn();
    const onSubmit = vi.fn();

    const { form, container } = renderWithForm<UploadValues>(
      <FileInput
        multiple
        clearable
        clearButtonProps={{ "aria-label": "Clear files" }}
        name="files"
        label="Files"
        onChange={onChange}
      />,
      { defaultValues: { files: [] } },
    );

    const input = container.querySelector<HTMLInputElement>('input[type="file"]');

    if (!input) {
      throw new Error("Missing native file input");
    }

    await user.upload(input, files);
    await act(async () => {
      await form.handleSubmit(onSubmit)();
    });
    expect(onSubmit.mock.calls[0][0]).toEqual({ files });
    expect(onChange).toHaveBeenLastCalledWith(files);
    expect(screen.getByRole("button", { name: "Files" })).toHaveTextContent("first.txt");
    act(() => form.reset({ files }));
    await user.click(screen.getByRole("button", { name: "Clear files" }));
    expect(onChange).toHaveBeenLastCalledWith([]);
    await act(async () => {
      await form.handleSubmit(onSubmit)();
    });
    expect(onSubmit.mock.calls[1][0]).toEqual({ files: [] });
    act(() => form.reset());
    expect(screen.getByRole("button", { name: "Files" })).toHaveTextContent("second.txt");
    expect(form.getValues("files")).toEqual(files);
  });

  it("displays error message", async () => {
    const { form } = renderWithForm(<FileInput name="test" label="File" />, {
      defaultValues: { test: null },
    });

    expect(screen.getByText("File")).toBeInTheDocument();

    act(() => {
      form.setError("test", { message: "Required" });
    });
    await waitFor(() => {
      expect(screen.getByText("Required")).toBeInTheDocument();
    });
  });
});
