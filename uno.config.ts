// uno.config.ts
import { defineConfig, presetUno } from "unocss";
import transformerDirectives from "@unocss/transformer-directives";
import transformerVariantGroup from "@unocss/transformer-variant-group";

export default defineConfig({
  presets: [presetUno()],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  rules: [["a", { "text-decoration": "none", color: "inherit" }]],
});
