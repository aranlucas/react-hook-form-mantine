// The manager bundle compiles JSX to React.createElement, so React must be in scope.
import React, { useEffect, useState } from "react";
import {
  AddonPanel,
  Badge,
  Button,
  EmptyTabContent,
  SyntaxHighlighter,
} from "storybook/internal/components";
import { STORY_CHANGED } from "storybook/internal/core-events";
import { addons, types, useChannel, useStorybookState } from "storybook/manager-api";
import { styled } from "storybook/theming";
import { ADDON_ID, EVENTS, type FormSnapshot, PANEL_ID } from "./constants";

const Bar = styled.div(({ theme }) => ({
  position: "sticky",
  top: 0,
  zIndex: 1,
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 8,
  padding: "8px 12px",
  background: theme.background.app,
  borderBottom: `1px solid ${theme.appBorderColor}`,
}));

const Row = styled.div({ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 6 });

const Section = styled.section(({ theme }) => ({
  padding: "12px",
  borderBottom: `1px solid ${theme.appBorderColor}`,
}));

const Heading = styled.h3(({ theme }) => ({
  margin: "0 0 8px",
  fontSize: theme.typography.size.s1,
  fontWeight: theme.typography.weight.bold,
  letterSpacing: "0.35em",
  textTransform: "uppercase",
  color: theme.textMutedColor,
}));

const Fields = styled.table(({ theme }) => ({
  width: "100%",
  borderCollapse: "collapse",
  fontSize: theme.typography.size.s2,
  "th, td": {
    textAlign: "left",
    padding: "6px 8px",
    borderBottom: `1px solid ${theme.appBorderColor}`,
    verticalAlign: "top",
  },
  th: { color: theme.textMutedColor, fontWeight: theme.typography.weight.bold },
  code: { fontFamily: theme.typography.fonts.mono, wordBreak: "break-all" },
}));

const ErrorText = styled.span(({ theme }) => ({ color: theme.color.negativeText }));

const Muted = styled.span(({ theme }) => ({ color: theme.textMutedColor }));

const Json = ({ code }: { code: string }) => (
  <SyntaxHighlighter language="json" copyable bordered padded>
    {code}
  </SyntaxHighlighter>
);

/** The latest form state for the selected story, or null when it has no shared form. */
const useSnapshot = () => {
  const { storyId } = useStorybookState();
  const [snapshot, setSnapshot] = useState<FormSnapshot | null>(null);

  const emit = useChannel({
    [EVENTS.STATE]: setSnapshot,
    [STORY_CHANGED]: () => setSnapshot(null),
  });

  useEffect(() => {
    emit(EVENTS.REQUEST);
  }, [emit, storyId]);

  return { snapshot: snapshot?.storyId === storyId ? snapshot : null, emit };
};

function FormPanel() {
  const { snapshot, emit } = useSnapshot();

  if (!snapshot) {
    return (
      <EmptyTabContent
        title="No shared form"
        description="Component stories render inside a React Hook Form form, and its state shows up here. This story renders its own form."
      />
    );
  }

  const errorCount = snapshot.fields.filter((field) => field.error).length;

  return (
    <div>
      <Bar>
        <Row>
          <Badge status={snapshot.isValid ? "positive" : "negative"}>
            {snapshot.isValid ? "Valid" : "Invalid"}
          </Badge>
          <Badge status={snapshot.isDirty ? "warning" : "neutral"}>
            {snapshot.isDirty ? "Dirty" : "Pristine"}
          </Badge>
          {errorCount > 0 && (
            <Badge status="critical">
              {errorCount} {errorCount === 1 ? "error" : "errors"}
            </Badge>
          )}
          <Badge status="neutral">mode: {snapshot.mode}</Badge>
          <Badge status="neutral">{snapshot.submitCount}× submitted</Badge>
        </Row>
        <Row>
          <Button
            ariaLabel={false}
            size="small"
            variant="outline"
            onClick={() => emit(EVENTS.RESET, snapshot.storyId)}
          >
            Reset
          </Button>
          <Button
            ariaLabel={false}
            size="small"
            variant="solid"
            onClick={() => emit(EVENTS.SUBMIT, snapshot.storyId)}
          >
            Submit
          </Button>
        </Row>
      </Bar>

      <Section>
        <Heading>Fields</Heading>
        <Fields>
          <thead>
            <tr>
              <th>Name</th>
              <th>Value</th>
              <th>State</th>
              <th>Error</th>
            </tr>
          </thead>
          <tbody>
            {snapshot.fields.map((field) => (
              <tr key={field.name}>
                <td>
                  <code>{field.name}</code>
                </td>
                <td>
                  <code>{field.value}</code>
                </td>
                <td>
                  <Row>
                    {field.dirty && <Badge status="warning">dirty</Badge>}
                    {field.touched && <Badge status="active">touched</Badge>}
                    {!field.dirty && !field.touched && <Muted>—</Muted>}
                  </Row>
                </td>
                <td>{field.error ? <ErrorText>{field.error}</ErrorText> : <Muted>—</Muted>}</td>
              </tr>
            ))}
          </tbody>
        </Fields>
      </Section>

      {snapshot.submitted && (
        <Section>
          <Heading>Last submit (handleSubmit data)</Heading>
          <Json code={snapshot.submitted} />
        </Section>
      )}

      <Section>
        <Heading>Values (useWatch)</Heading>
        <Json code={snapshot.values} />
      </Section>

      {snapshot.errors && (
        <Section>
          <Heading>Errors (formState.errors)</Heading>
          <Json code={snapshot.errors} />
        </Section>
      )}
    </div>
  );
}

/** The tab title, with the error count when there is one. */
function FormTitle() {
  const { snapshot } = useSnapshot();
  const errorCount = snapshot?.fields.filter((field) => field.error).length ?? 0;

  return (
    <Row>
      Form
      {errorCount > 0 && (
        <Badge compact status="critical">
          {errorCount}
        </Badge>
      )}
    </Row>
  );
}

addons.register(ADDON_ID, () => {
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: () => <FormTitle />,
    render: ({ active }) => (
      <AddonPanel active={Boolean(active)}>
        <FormPanel />
      </AddonPanel>
    ),
  });
});
