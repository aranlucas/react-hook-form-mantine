// eslint-disable-next-line
import React from "react";
import { themes, convert } from "@storybook/theming";
import { TabsState, Button, SyntaxHighlighter } from "@storybook/components";
import { useChannel, useAddonState } from "@storybook/api";
import { ADDON_ID, EVENTS } from "./constants";

/**
 * Checkout https://storybookjs.netlify.app/official-storybook/
 * for a real world example
 */
export const ReactHookFormPanel = () => {
  // https://storybook.js.org/docs/react/addons/addons-api#useaddonstate
  const [results, setState] = useAddonState(ADDON_ID, {
    values: {},
    errors: {},
  });

  // https://storybook.js.org/docs/react/addons/addons-api#usechannel
  const emit = useChannel({
    [EVENTS.RESULT]: (newResults) => {
      console.log({ newResults });
      setState((prevState) => {
        return { ...prevState, newResults };
      });
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
            {JSON.stringify(results.values ?? {}, null, 2)}
          </SyntaxHighlighter>
        </div>
        <div id="touched" title="Touched">
          <SyntaxHighlighter language="json" copyable={false}>
            {JSON.stringify(results ?? {}, null, 2)}
          </SyntaxHighlighter>
        </div>
        <div id="errors" title="Errors">
          <SyntaxHighlighter language="json" copyable={false}>
            {JSON.stringify(results.errors ?? {}, null, 2)}
          </SyntaxHighlighter>
        </div>
      </TabsState>
    </>
  );
};
