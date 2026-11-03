# React Hook Form Mantine

[![CI](https://img.shields.io/github/actions/workflow/status/aranlucas/react-hook-form-mantine/ci.yml?branch=main&label=CI)](https://github.com/aranlucas/react-hook-form-mantine/actions/workflows/ci.yml)
[![Demo](https://img.shields.io/badge/demo-GitHub%20Pages-2ea44f)](https://aranlucas.github.io/react-hook-form-mantine)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

React Hook Form Mantine connects Mantine inputs to React Hook Form. Add `name` and `control` to bind a field's value and validation.

## Install and use

```bash
pnpm add react-hook-form-mantine react-hook-form @mantine/core @mantine/dates dayjs
```

The package is ESM and supports Mantine 9, React 19, and React Hook Form `^7.43`. Exact peer ranges are in [`package.json`](package.json).

Load Mantine's styles and wrap your app in `MantineProvider`, as shown in [`example/src/main.tsx`](example/src/main.tsx).

```tsx
import { useForm } from "react-hook-form";
import { TextInput } from "react-hook-form-mantine";

type Profile = { displayName: string };

export function ProfileForm() {
  const { control, handleSubmit } = useForm<Profile>({
    defaultValues: { displayName: "" },
  });

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

Browse the [component demo](https://aranlucas.github.io/react-hook-form-mantine) for props and interactions, or copy the [full form with Zod validation](example/src/App.tsx). The complete export list is [`src/index.ts`](src/index.ts).

## Controller lifecycle

Custom `onChange` and `onBlur` callbacks run alongside React Hook Form's handlers,
so blur still marks the field touched and runs `mode: "onBlur"` validation.
`disabled` is passed to the controller as well as the Mantine control: disabled
field values are omitted from submitted data, following React Hook Form semantics.
Use `readOnly` where supported if a non-editable value should still be submitted.

## Development

Use the Node version in [`.node-version`](.node-version) and the pnpm version in [`package.json`](package.json).

```bash
corepack enable
pnpm install --frozen-lockfile
pnpm typecheck
pnpm lint
pnpm format
pnpm test --run
pnpm build
```

`pnpm format` checks formatting; `pnpm format:fix` writes it. The checks above match CI.

`pnpm test` runs the `unit` (jsdom) and `storybook` (headless Chromium interactions and accessibility) Vitest projects. Install Chromium with `pnpm exec playwright install chromium` before running browser tests. Run one project with `pnpm test:unit --run` or `pnpm test:storybook --run`; use `pnpm coverage --project=unit` for unit coverage or `pnpm coverage` for both.

## Storybook

`pnpm storybook` starts Storybook through [Portless](https://github.com/vercel-labs/portless); `pnpm --dir example dev` starts the Vite example. Use the URL printed by Portless. Its first run may ask for `sudo` to bind port 443 and trust a local certificate. The Storybook dev server exposes its component manifest and stories at `/mcp`.

`pnpm build-storybook` produces the static site. GitHub Pages serves main's Storybook from the root of `gh-pages`. Non-draft, same-repository PRs get `/pr-preview/pr-<number>/`, linked in a PR comment and removed on close; fork PRs cannot deploy previews.

Storybook's docgen reads prop types through the TypeScript compiler API, which TypeScript 7 doesn't provide. `.pnpmfile.cjs` gives the docgen packages TypeScript 6 while the project compiles with 7.

Licensed under the [MIT License](LICENSE).
