// uno.config.ts
import { defineConfig, presetUno } from "unocss";
import transformerDirectives from "@unocss/transformer-directives";

export default defineConfig({
  presets: [presetUno()],
  transformers: [transformerDirectives()],
  rules: [["a", { "text-decoration": "none", color: "inherit" }]],
});
