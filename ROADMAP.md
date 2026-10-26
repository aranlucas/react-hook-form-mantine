# React Hook Form Mantine roadmap

Updated 2026-10-26. Proposed library improvements; package publication and
consumer upgrades are separate from merging this plan.

## Starting point

At `b56a256dfdd0224562c0198dceb7a0292fd7ba2d`, the [library](README.md)
already wraps Mantine fields through a shared controller, preserves callback
lifecycle behavior and supplies real-form Storybook examples, accessibility
checks and a development MCP endpoint. The next value is less custom adapter
work in realistic consumer forms.

## Ordered releases

1. **Complete a dynamic form without custom glue.** Add a focused example for
   nested fields, repeatable rows and conditional inputs, using the existing
   controller contract. Acceptance: reset, validation, focus, touched/dirty
   state and row removal behave as React Hook Form documents; disabled and
   read-only values remain distinct. Turn demonstrated adapter gaps into fixes,
   not a new schema-driven form engine.
2. **Recover from asynchronous loading and submission.** Demonstrate loading
   defaults, editing while data refreshes and displaying server errors.
   Acceptance: a late response does not silently erase newer edits, errors
   map to the intended fields, and a retry does not duplicate submission.
   Keep application request ownership outside the input-wrapper library.
3. **Make supported value shapes obvious.** Improve examples and type feedback
   for nullable dates, numeric empty states, files and grouped controls.
   Acceptance: valid supported values compile; incompatible field paths/types
   fail in consumer fixtures; documentation agrees with rendered interactions.
4. **Make framework upgrades predictable.** Publish a concise peer-compatibility
   record and migration examples for changed control behavior.
   Acceptance: exercise installed public exports and representative Storybook
   flows against the claimed peer ranges. Do not claim all minor versions or
   unsupported runtimes from one development installation.

## First slice and evidence

Build priority 1 as a copyable Storybook scenario and try it in two owned forms.
Record adapter code removed, integration time, unexpected state transitions and
accessibility failures. Package downloads alone do not measure usefulness.

Use the existing unit/Storybook Vitest projects and native build. Reuse the
current MCP manifest for discoverability; no separate component-catalog service
or second controller implementation is needed.
