// uno.config.ts
import { defineConfig, presetUno, presetTypography } from "unocss";

export default defineConfig({
  presets: [presetUno(), presetTypography()],
  rules: [
    ["a", { "text-decoration": "none", color: "inherit" }],
  ],
});
