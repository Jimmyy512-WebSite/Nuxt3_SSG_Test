<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
// 初始化階段就事先檢查主題色
useHead({
  script: [
    {
      children: `
        (function() {
          const themeMode = localStorage.getItem('themeMode');
          if (themeMode === 'true') {
            document.documentElement.classList.add('dark');
          }
        })();
      `,
      type: "text/javascript",
    },
  ],
});
</script>

<style lang="scss" scoped>
.btnLink {
  color: orange;
}
</style>
