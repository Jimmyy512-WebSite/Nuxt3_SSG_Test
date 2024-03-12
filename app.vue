<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
// import Roboto from "@/assets/fonts/Roboto.woff2";
useHead({
  link: [
    // {
    //   rel: "stylesheet",
    //   href: "https://fonts.googleapis.com/css2?family=Roboto&display=swap",
    //   crossorigin: "",
    // },
    // {
    //   rel: "preload",
    //   as: "font",
    //   href: Roboto,
    //   type: "font/woff2",
    //   crossorigin: "anonymous",
    // },
  ],
});
</script>

<style lang="scss" scoped>
// @font-face {
//   font-family: "Roboto";
//   src: url("~/assets/fonts/Roboto.woff2") format("woff2"),
//     url("@/assets/fonts/Roboto.woff") format("woff"); /* 為了兼容性，可以添加多個源 */
//   font-weight: normal;
//   font-style: normal;
//   /* 更多屬性如 font-weight 或 font-style 可以在這裡指定 */
// }

* {
  // font-family: "Roboto";
  box-sizing: border-box;
}

.btnLink {
  color: orange;
}
</style>
