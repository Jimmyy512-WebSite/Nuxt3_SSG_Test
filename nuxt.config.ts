// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@element-plus/nuxt", "nuxt-font-loader", '@unocss/nuxt'],

  css: [
    "normalize.css/normalize.css",
    "animate.css/animate.min.css",
    "~/assets/style/main.scss",
  ],

  fontLoader: {
    local: [
      {
        src: "fonts/Roboto.woff2",
        family: "MyRoboto",
        class: "MyRoboto",
      },
    ],
  },

  compatibilityDate: "2024-07-31",
} as any);