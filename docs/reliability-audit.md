# Correctness and reliability audit — 2026-11-06

Baseline: remote main cda85d0aa180b513341a85d91d9b092283cdff15 (merged untangle pass).
Clean isolated worktree; no structural cleanup planned. All tests and builds run in CI only.

## Inventory and boundaries

- `src/index.ts`: public field wrappers for Mantine core and dates; group `.Item` aliases are raw Mantine controls. `src/internal/useFieldController.ts` owns registration, disabled omission, handler composition, and merged refs.
- Every wrapper was read, including scalar, boolean, group/array, date, file, picker and slider adapters. Success paths are input → controller → form values → validation/submission; failure paths are validation errors, focus, reset, disabled and unregister behavior. Existing controller contract tests cover most shared paths.
- `example/src/App.tsx`: real consumer form with Zod resolver, error feedback, JSON submission display and reset. Existing tests cover invalid submission/reset; browser stories do not establish a successful full form journey.
- `.storybook`: form decorator, state bridge and manager channel. Subscriptions are removed in effect cleanup; story ID guards reset/submit. Display serialization excludes refs and represents files. This is local development tooling, not an authorization boundary.
- `.github/workflows`: CI runs format/lint/types, unit/example/browser stories, library build. Storybook build and release gates retained. Write-token release install suppresses lifecycle scripts. Library has no server, account/tenant/authentication boundary, database, transactions, retries or production persistence; these are host application responsibilities. No invented backend findings.
- Resource lifetime: RHF owns registration and reset; merged refs delegate to merge-refs; browser/server lifetimes in new coverage belong to the supported e2e runner.

## Findings recorded before behavior edits

1. **Candidate, medium confidence: standalone Radio does not bind checked state.** `src/Radio/Radio.tsx:14` spreads `field.value` as the HTML radio value, without binding `checked`. Its own Primary story supplies boolean `true`, yet Mantine reads `checked` independently. A programmatic default/reset cannot control selection. Need independently review intended string versus boolean contract before fixing; preserve native radio event semantics and existing checked override API.
2. **Coverage gap, high confidence:** no full successful example submission followed by reset is asserted in a standalone browser. Add the requested real tester-army `e2e` runner against the existing example, with deterministic validation → correction → submit → reset assertions. This is a coverage finding, not evidence of a production defect.

## Rejected hypotheses / scope decisions

- Shared onChange/onBlur overwriting RHF bookkeeping: rejected; adapter composes both and existing tests protect exact events/Select's second argument.
- Disabled values leaking into submission: rejected; controller receives disabled and inherited form state is preserved; contract tests cover both.
- CheckboxGroup external value override: intentional public behavior documented in untangle decisions; retain.
- File uploads require a backend: not this library's contract. Example accepts an optional File; JSON output is a demonstration, not durable file storage.
- Broad dependency upgrades and structural cleanup: excluded.

## Framework applicability and validation plan

The library itself has no standalone UI, but its existing example is an honest web consumer target. Use published `e2e@0.23.0` and `@e2e-dev/web@0.15.5` (npm registry verified), Node 24.22.1 satisfies their Node ^22.22.3 or >=24.8 requirement. Read current quickstart, CI, GitHub Actions docs and pinned Vite example. Deterministic locator/action/assertion tests require no model or credentials. Pins and lockfile are intentional: this is the user-requested framework, and web is its maintained browser engine. Lockfile-only installation used --ignore-scripts; no tests/builds ran locally.

CI will retain existing gates, add e2e web-engine browser installation and failure artifacts. For any confirmed behavior fix, an isolated CI pre-fix run must fail on the specific regression and the fixed run must pass. Independent review and CI evidence pending.

Independent review identified a confirmed public typing defect before implementation: `src/FileInput/FileInput.tsx:6` erases Mantine's `Multiple` generic (defaults to false). A consumer cannot compile `<FileInput multiple ... onChange={files => files.map(...)} />`, though the underlying adapter already forwards arrays correctly. Preserve the default single-file API and expose an optional second generic for multiple mode. Regression: compile contracts plus real upload → submit → clear → reset in existing unit runner. CI negative control will restore only the defective source and require typecheck to fail specifically on the multiple-file compile contract. Radio remains a rejected fix: historical string/event semantics and public checked override make a boolean rewrite ambiguous; no runtime change justified.

## Implementation and review outcome

FileInput now exposes Mantine's `Multiple` generic as an optional second type parameter, default false. Existing single-file consumers retain their types; inferred multiple mode receives `File[]`. No runtime/library export was changed. Compile contracts cover single/multiple callback inference; unit regression protects actual files in submission, user onChange payload, clear and reset restoration.

Independent read-only reviewer confirmed the defect and compatibility, rejected the Radio rewrite, and challenged E2E locators against Mantine sources. Select/MultiSelect now use combobox roles and Radio.Group uses radiogroup. Negative control pins the defective baseline rather than moving PR base. Reviewer found no further concrete worthwhile findings. Local static React Doctor reported 100/100, no issues. CI results pending; no local tests or builds were run.
