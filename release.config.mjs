const releaseConfig = {
  branches: ["main", "next"],
  // Publish release notes and tag the merged commit without writing release files back to main.
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/npm",
    "@semantic-release/github",
  ],
};

export default releaseConfig;
