import { readFileSync } from "node:fs";

describe("component exports", () => {
  test.each(["AngleSlider", "DatePicker", "MonthPicker", "YearPicker"])(
    "exports %s from the package entry point",
    (componentName) => {
      const indexFile = readFileSync("src/index.ts", "utf8");

      expect(indexFile).toContain(`export * from "./${componentName}/${componentName}"`);
    },
  );
});
