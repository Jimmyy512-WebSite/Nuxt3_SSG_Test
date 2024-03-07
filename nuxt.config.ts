// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@element-plus/nuxt", "@nuxtjs/tailwindcss", "nuxt-font-loader"],
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
});
