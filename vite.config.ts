// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Static hosting (GitHub Pages): every page is prerendered to HTML at build time.
const treatmentSlugs = [
  "mal-di-schiena",
  "cervicale-e-cefalee",
  "gravidanza",
  "pavimento-pelvico",
  "sport-e-postura",
  "disturbi-viscerali",
];

const pages = [
  "/",
  "/chi-sono",
  "/sedi/san-donato-milanese",
  "/sedi/cantu",
  "/sedi/giussano",
  "/mal-di-schiena",
  "/cervicale",
  "/gravidanza",
  "/osteopatia-sportiva",
  "/pavimento-pelvico",
  ...treatmentSlugs.map((s) => `/trattamenti/${s}`),
].map((path) => ({ path }));

export default defineConfig({
  nitro: false,
  tanstackStart: {
    server: { entry: "server" },
    pages,
    prerender: { enabled: true, autoStaticPathsDiscovery: false },
  },
});
