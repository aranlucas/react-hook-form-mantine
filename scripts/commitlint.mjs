import { readFile } from "node:fs/promises";
import format from "@commitlint/format";
import lint from "@commitlint/lint";
import load from "@commitlint/load";

const commitMessagePath = process.argv[2];

if (!commitMessagePath) {
  console.error("Usage: pnpm commitlint <commit-message-file>");
  process.exit(1);
}

const message = await readFile(commitMessagePath, "utf8");
const config = await load({}, { cwd: process.cwd() });
const report = await lint(message, config.rules, {
  defaultIgnores: config.defaultIgnores,
  helpUrl: config.helpUrl,
  ignores: config.ignores,
  parserOpts: config.parserPreset?.parserOpts,
  plugins: config.plugins,
});

if (!report.valid) {
  console.error(
    format(
      {
        results: [report],
      },
      {
        color: process.stderr.isTTY,
        helpUrl: config.helpUrl,
      },
    ),
  );
  process.exit(1);
}
