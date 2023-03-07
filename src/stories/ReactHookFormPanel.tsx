// eslint-disable-next-line
import React, { useState } from "react";
import { themes, convert } from "@storybook/theming";
import { TabsState, Button, SyntaxHighlighter } from "@storybook/components";
import { useChannel } from "@storybook/api";
import { EVENTS } from "./constants";

/**
 * Checkout https://storybookjs.netlify.app/official-storybook/
 * for a real world example
 */
export const ReactHookFormPanel = () => {
  // https://storybook.js.org/docs/react/addons/addons-api#useaddonstate
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [dirty, setDirty] = useState({});

  // https://storybook.js.org/docs/react/addons/addons-api#usechannel
  const emit = useChannel({
    [EVENTS.RESULT]: (v) => {
      setValues(v);
    },
    [EVENTS.ERROR]: (e) => {
      setErrors(e);
    },
    [EVENTS.DIRTY]: (d) => {
      setDirty(d);
    },
  });

  return (
    <>
      <Button
        primary
        onClick={() => {
          emit(EVENTS.REQUEST);
        }}
      >
        Submit Form
      </Button>
      <TabsState
        initial="values"
        backgroundColor={convert(themes.normal).background.hoverable}
      >
        <div id="values" title="Values">
          <SyntaxHighlighter language="json" copyable={false}>
            {JSON.stringify(values, null, 2)}
          </SyntaxHighlighter>
        </div>
        <div id="touched" title="Touched">
          <SyntaxHighlighter language="json" copyable={false}>
            {JSON.stringify(dirty, null, 2)}
          </SyntaxHighlighter>
        </div>
        <div id="errors" title="Errors">
          <SyntaxHighlighter language="json" copyable={false}>
            {JSON.stringify(errors, null, 2)}
          </SyntaxHighlighter>
        </div>
      </TabsState>
    </>
  );
};
