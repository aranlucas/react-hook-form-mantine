import "@semantic-release/changelog";
import "@semantic-release/git";

// Keep plugin package usage visible to dependency scanners while semantic-release resolves plugins by name.
export default {
  branches: ["master", "next"],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    "@semantic-release/npm",
    "@semantic-release/git",
    "@semantic-release/github",
  ],
};
