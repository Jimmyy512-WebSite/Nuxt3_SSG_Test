<template>
  <nav>
    <ul class="flex space-x-4 space">
      <li>
        <nuxt-link to="/" class="HeadMenuItem">Home</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/about" class="HeadMenuItem">About</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/project" class="HeadMenuItem">Project</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.HeadMenuItem {
  @apply p-1 hover:bg-gray-200;
}
</style>
