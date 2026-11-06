import type { E2EConfig } from "e2e";
import { web } from "@e2e-dev/web";

export default {
  tests: "e2e/**/*.e2e.ts",
  workers: 1,
  retries: 0,
  targets: [
    {
      name: "chromium",
      engine: web(),
      app: {
        url: "http://127.0.0.1:5173",
        command: {
          executable: "pnpm",
          args: [
            "--dir",
            "example",
            "exec",
            "vite",
            "--host",
            "127.0.0.1",
            "--port",
            "5173",
            "--strictPort",
          ],
        },
      },
    },
  ],
  reporters: ["list", "junit"],
  trace: "retain-on-failure",
  video: "retain-on-failure",
} satisfies E2EConfig;
