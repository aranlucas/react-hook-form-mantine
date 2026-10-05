import { composeStories, setProjectAnnotations } from "@storybook/react";
import * as previewAnnotations from "../../.storybook/preview";

const annotations = setProjectAnnotations([previewAnnotations]);

beforeAll(annotations.beforeAll);

const modules = import.meta.glob(["../**/*.stories.tsx", "../../example/src/**/*.stories.tsx"], {
  eager: true,
});

// SAFETY: the glob only matches *.stories.tsx files, which are CSF modules.
const stories = Object.entries(modules).flatMap(([path, mod]) =>
  Object.entries(composeStories(mod as Parameters<typeof composeStories>[0])).map(
    ([name, Story]) => [`${path.replace(/^(\.\.\/)+/, "")} › ${name}`, Story] as const,
  ),
);

it.each(stories)("%s", async (_name, Story) => {
  await Story.run();
});
