# React Hook Form Mantine

## Give Mantine fields a name—and let React Hook Form do the wiring.

[![CI](https://img.shields.io/github/actions/workflow/status/aranlucas/react-hook-form-mantine/ci.yml?branch=main&label=CI)](https://github.com/aranlucas/react-hook-form-mantine/actions/workflows/ci.yml)
[![Demo](https://img.shields.io/badge/demo-GitHub%20Pages-2ea44f)](https://aranlucas.github.io/react-hook-form-mantine)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

React Hook Form Mantine wraps Mantine inputs with React Hook Form’s controller model. Add `name` and `control` to a familiar Mantine component, keep Mantine’s props, and get field values and validation errors without hand-writing the same adapter in every form.

![React Hook Form Mantine wrapper flow](docs/readme-flow.svg)

_A source-level sketch of the wrapper contract._

## The five-minute win

```tsx
import { useForm } from "react-hook-form";
import { TextInput } from "react-hook-form-mantine";

type Profile = { displayName: string };

export function ProfileForm() {
  const { control, handleSubmit } = useForm<Profile>();

  return (
    <form onSubmit={handleSubmit(console.log)}>
      <TextInput
        name="displayName"
        control={control}
        label="Display name"
        rules={{ required: "Give yourself a name" }}
      />
      <button type="submit">Save profile</button>
    </form>
  );
}
```

The wrapper forwards Mantine’s UI props, passes `rules` to `useController`, and displays the field error through Mantine’s `error` prop. The same pattern scales from a text input to a date picker, slider, select, or grouped control.

## Controller lifecycle

Custom `onChange` and `onBlur` callbacks run alongside React Hook Form's handlers,
so blur still marks the field touched and runs `mode: "onBlur"` validation.
`disabled` is passed to the controller as well as the Mantine control: disabled
field values are omitted from submitted data, following React Hook Form semantics.
Use `readOnly` where supported if a non-editable value should still be submitted.

## Install

```bash
pnpm add react-hook-form-mantine react-hook-form @mantine/core @mantine/dates dayjs
```

The published package is ESM (`4.0.1`). Its peer dependencies are:

| Package           | Supported version |
| ----------------- | ----------------- |
| `@mantine/core`   | `^9.0.0`          |
| `@mantine/dates`  | `^9.0.0`          |
| `react`           | `^19.0.0`         |
| `react-dom`       | `^19.0.0`         |
| `react-hook-form` | `^7.43`           |

## What is covered

The package exports wrappers for Mantine text and password inputs, textarea, number and mask inputs, checkbox/radio/switch/chip groups, select/autocomplete/multi-select, color and JSON inputs, date/month/year/time pickers, sliders, rating, segmented control, tags, file and PIN inputs, and related groups. The barrel at [`src/index.ts`](src/index.ts) is the complete export list.

Try the full form in [`example/src/App.tsx`](example/src/App.tsx) (also in Storybook under **Examples / Full form**), browse the [deployed demo](https://aranlucas.github.io/react-hook-form-mantine), or inspect the Storybook stories in `src/**/*.stories.tsx`.

## Development

```bash
corepack enable
pnpm install --frozen-lockfile
pnpm typecheck
pnpm lint
pnpm format
pnpm test --run
pnpm build
```

`pnpm format` is the repository’s check command; `pnpm format:fix` writes formatting. CI runs formatting, linting, type checking, tests, and the library build on Node 24.

`pnpm test` runs two Vitest projects: `unit` (component tests in jsdom) and `storybook`, which renders every story in headless Chromium and fails on a broken render, a failing `play` function or `.test()`, or an accessibility violation. Run one with `pnpm test:unit` or `pnpm test:storybook`; the first run needs `pnpm exec playwright install chromium`.

## Storybook

`pnpm storybook` opens the component workshop on port 6006; `pnpm build-storybook` produces the static site. GitHub Pages serves the `gh-pages` branch: main's Storybook at the root, and every same-repository pull request's at `/pr-preview/pr-<number>/`, linked from a comment on the pull request and removed when it closes.

- **Every story is a real form.** Components render in a form card with Reset and Submit. A **Form** addon panel (`.storybook/form-addon/`) shows each field's value, dirty, touched and error state, the raw values and errors, and the submit result, with its own Reset and Submit. `onChange` and `onBlur` are `fn()` spies, so their calls appear in the Actions panel.
- **Theme from the toolbar.** Switch the Mantine color scheme, primary color and default radius. Stories can pin these with `globals`, as `Examples / Full form / Dark` does.
- **Tests in the sidebar.** Stories use CSF Next (`preview.meta` / `meta.story`) and the `Story.test()` API, so each named test is listed under its story. The test widget runs interactions, accessibility checks and coverage in the browser, with watch mode.
- **Generated docs.** Each component gets a docs page with what it wraps, an import snippet, links to Mantine and the source, and a props table, with react-hook-form props and events grouped separately.
- **For coding agents.** The dev server serves an MCP endpoint at `https://storybook.react-hook-form-mantine.localhost/mcp` (`@storybook/addon-mcp`) with the component manifest and stories.
- **Filter by tag.** `validation` marks stories with rules or a resolver; `example` marks full-form examples.

Storybook's docgen reads prop types through the TypeScript compiler API, which TypeScript 7 doesn't provide. `.pnpmfile.cjs` gives the docgen packages TypeScript 6 while the project compiles with 7.

### Named local URLs with Portless

After installing the workspace dependencies, use Node.js 24 or newer and install
[Portless](https://github.com/vercel-labs/portless/tree/v0.15.7) once:

```sh
npm install -g portless@0.15.7
pnpm storybook
# In another terminal, run the standalone example:
pnpm dev:example
```

| Surface | Default local URL |
| --- | --- |
| Storybook | <https://storybook.react-hook-form-mantine.localhost> |
| Storybook MCP endpoint | <https://storybook.react-hook-form-mantine.localhost/mcp> |
| Standalone Vite example | <https://example.react-hook-form-mantine.localhost> |

Portless assigns an independent available port to each server. Storybook reads
its assigned `PORT` and uses `--exact-port` to fail if it cannot bind; keep
`SBCONFIG_PORT` unset for this command because Storybook gives it precedence over
`PORT`. Portless supplies Vite's port and strict-port flags automatically. Linked
Git worktrees receive a branch prefix, so use the URLs printed at startup. The
example resolves the library directly from `src/`, as in its existing Vite setup.

The first launch should run in an interactive terminal. The default HTTPS setup
may ask to trust a local certificate authority and request administrator access
for port 443 and local hostname entries. The proxy remembers custom ports and
domains from previous runs. `portless list` shows active routes and
`portless doctor` checks connection and certificate problems.

Use `pnpm storybook:direct` or `pnpm --dir example dev:direct` for the localhost
workflows. Library builds, package exports, publishing, and Storybook previews
continue to use their existing commands.

## Source map

| Path               | Responsibility                                                          |
| ------------------ | ----------------------------------------------------------------------- |
| `src/<Component>/` | Mantine wrapper, tests, and Storybook story for each control.           |
| `src/index.ts`     | Public export barrel.                                                   |
| `example/`         | Vite demo form exercising the wrappers together.                        |
| `.storybook/`      | Mantine provider, React Hook Form context, and Storybook configuration. |
| `vitest.config.ts` | Unit and Storybook test projects.                                       |
| `vite.config.ts`   | Library and declaration build configuration.                            |

## Status and license

Version 4.0.1 is published from this repository through the release workflow. The package is licensed under the [MIT License](LICENSE). Changes to Mantine or React Hook Form peer APIs should be checked against the supported ranges above.
