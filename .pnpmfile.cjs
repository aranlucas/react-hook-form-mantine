// TypeScript 7 is native and has no JS compiler API. Storybook's docgen needs one to read the
// wrappers' prop types, so these packages get TypeScript 6 while the project compiles with 7.
const docgenPackages = new Set([
  "@storybook/react",
  "react-docgen-typescript",
  "@joshwooding/vite-plugin-react-docgen-typescript",
]);

module.exports = {
  hooks: {
    readPackage(pkg) {
      if (docgenPackages.has(pkg.name)) {
        delete pkg.peerDependencies?.typescript;
        delete pkg.peerDependenciesMeta?.typescript;
        pkg.dependencies = {
          ...pkg.dependencies,
          typescript: "npm:@typescript/typescript6@^6.0.2",
        };
      }

      return pkg;
    },
  },
};
