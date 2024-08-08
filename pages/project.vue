<template>
  <div class="py-20px ">
    <div class="text-2xl font-semibold text-center mb-6">
      <span
        class="cursor-pointer hover:color-blue"
        @click="useRouter().push({ path: '/' })"
        >點擊返回首頁</span
      >
    </div>
    <el-tabs v-model="tabID" class="mx-auto max-w-640px max-sm:p-20px">
      <el-tab-pane label="API 範例" name="0">
        <ProjectList></ProjectList>
      </el-tab-pane>

      <el-tab-pane label="VueUse" name="1">
        <VueUse></VueUse>
      </el-tab-pane>

      <el-tab-pane label="Pinia 範例" name="2">
        <PiniaTest></PiniaTest>
      </el-tab-pane>
    </el-tabs>

  </div>
</template>

<script setup lang="ts">
let tabID = "0";
</script>
