# Untangle decisions — 2026-11-06

## Scope and baseline

Reviewed field adapters and exports, controller lifecycle, all unit tests and stories,
Storybook docs/form panel, example app, build/lint/format configuration, dependency
policy, release and PR workflows. Starting commit: `a0f835c`; working tree clean.
Preserve earlier controller consolidation and test/documentation pruning (#65, #67,
#99, #100). Both comment and test additions selected. Tests and builds run only in
CI under the user's latest constraint; no local baseline tests were run and this
thread owns no running test process. Recent CI runs were green, but do not prove
this checkout passes.

## Inventory and design (recorded before implementation)

- Make the root Vitest run include the example's existing configuration.
  - Hidden link: CI and release run root tests, but the separate example reset and
    schema tests are outside both configured projects. Adding a workspace test
    currently requires remembering a second command in every workflow.
- Keep test actions outside retrying assertions, and assert actual stored dates.
  - Special case: error-display tests repeatedly call `setError` inside `waitFor`.
    Retries mutate the system rather than simply observing the render.
  - Hidden clock dependency: picker tests navigate the current month/year and one
    requires 2026 to be visible forever. Set an explicit calendar date.
  - Weak contract: date/time tests accept any truthy value, including the wrong
    selected date or partially entered time. Assert the documented serialized value.
- Remove comments that only describe adjacent implementation; retain external
  constraints, protocol descriptions, public usage warnings, and type safety notes.

## Deliberately retained

- Component adapters are the public API, not surplus pass-through abstractions:
  each defines Mantine prop types and selects value/checked/error/ref behavior.
  `useFieldController` owns all RHF composition; a component factory would hide
  component-specific typing and hurt Storybook docgen for no domain benefit.
- Keep group `.Item` aliases and usage warnings: wrapped children register fields
  twice. Keep CheckboxGroup's external value behavior and its regression test.
- Keep boolean PinInput errors, missing error props on inline controls, first-argument
  RHF changes with full user callbacks, form-disabled inheritance and merged refs.
- Keep Storybook's no-channel branch (portable tests), story ID filtering (stale
  messages), DOM-ref removal/File serialization (channel transport), TS6 docgen
  override (TS7 lacks JS compiler API), and jsdom platform shims.
- Keep existing error forwarding, user interaction, lifecycle, ref, accessibility,
  and type tests. Recent smoke pruning already removed redundant render cases;
  no remaining test is clearly incapable of catching a real adapter regression.
- Keep catalog metadata and explicit group source paths: docs describe categories,
  upstream links and summaries absent from the runtime API. Do not couple the
  published library to documentation or generate wrappers from this catalog.
- GitHub's `parallel` steps are supported by current workflow syntax; no rewrite.
  No dependencies, custom scripts, deployment actions or public API changes needed.

## Validation and review

Two sequential read-only reviews completed: the inventory review confirmed the
coverage/retry/clock/comment findings; the final review found no remaining
worthwhile structural issues or introduced behavior changes. Native oxfmt 0.75.0
formatted changed files using the repository's Oxforge options; git diff --check
was clean. No tests, builds or React diagnostic scans ran locally. CI will run unit,
example and Storybook behavioral/accessibility tests, formatting, lint, typecheck
and build. React guidance applied statically; expensive diagnostics deferred to CI.
