<template>
  <div>the blog id is: {{ id }}</div>

  <el-button type="primary">Primary</el-button>
</template>

<script setup>
let id = useRoute().params.id;
</script>
