import { type RefObject, useEffect, useRef } from "react";
import {
  type FieldErrors,
  type FieldValues,
  useFormContext,
  useFormState,
  useWatch,
} from "react-hook-form";
import { addons } from "storybook/preview-api";
import { EVENTS, type FieldSnapshot, type FormSnapshot } from "./constants";

type FormBridgeProps = {
  storyId: string;
  mode: string;
  submitted: FieldValues | null;
  formRef: RefObject<HTMLFormElement | null>;
  onReset: () => void;
};

/** Form data as JSON. Errors drop their DOM `ref`, and files show their name. */
const json = (value: FieldValues | FieldErrors | FieldValues[string], space?: number) =>
  JSON.stringify(
    value,
    (key, item) => {
      if (key === "ref") return undefined;

      if (item instanceof File) return `File(${item.name})`;

      return item;
    },
    space,
  );

/** Reports the story's form to the Form panel, and lets the panel reset or submit it. */
export function FormBridge({ storyId, mode, submitted, formRef, onReset }: FormBridgeProps) {
  const { control } = useFormContext();
  const values = useWatch({ control });

  const { isDirty, isValid, isSubmitSuccessful, errors, touchedFields, dirtyFields, submitCount } =
    useFormState({ control });

  const fields: FieldSnapshot[] = Object.keys(values).map((name) => ({
    name,
    value: json(values[name]) || "undefined",
    dirty: Boolean(dirtyFields[name]),
    touched: Boolean(touchedFields[name]),
    error: errors[name]?.message?.toString(),
  }));

  const snapshot: FormSnapshot = {
    storyId,
    mode,
    isValid,
    isDirty,
    isSubmitSuccessful,
    submitCount,
    fields,
    values: json(values, 2),
    errors: Object.keys(errors).length > 0 ? json(errors, 2) : null,
    submitted: submitted === null ? null : json(submitted, 2),
  };

  const serialized = JSON.stringify(snapshot);
  const latest = useRef(serialized);

  latest.current = serialized;

  // Portable stories (Vitest) run without a manager, so there may be no channel.
  const channel = addons.hasChannel() ? addons.getChannel() : null;

  useEffect(() => {
    channel?.emit(EVENTS.STATE, JSON.parse(serialized));
  }, [channel, serialized]);

  useEffect(() => {
    if (!channel) return undefined;

    const forThisStory = (handler: () => void) => (id: string) => {
      if (id === storyId) handler();
    };

    const reset = forThisStory(onReset);
    const submit = forThisStory(() => formRef.current?.requestSubmit());
    const resend = () => channel.emit(EVENTS.STATE, JSON.parse(latest.current));

    channel.on(EVENTS.REQUEST, resend);
    channel.on(EVENTS.RESET, reset);
    channel.on(EVENTS.SUBMIT, submit);

    return () => {
      channel.off(EVENTS.REQUEST, resend);
      channel.off(EVENTS.RESET, reset);
      channel.off(EVENTS.SUBMIT, submit);
    };
  }, [channel, storyId, onReset, formRef]);

  return null;
}
