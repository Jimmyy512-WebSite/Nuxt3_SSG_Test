<template>
  <div>
    <div
      v-for="repo in renderData"
      :key="repo.id"
      class="grid grid-cols-1 gap-4"
    >
      <div
        class="mb-2 rounded-sm border border-gray-200 p-4 font-mono first:mt-2 hover:cursor-pointer hover:bg-gray-100"
      >
        <a :href="repo.html_url" target="_blank">
          <div
            class="flex items-center justify-between text-base font-semibold"
          >
            <div class="">{{ repo.name }}</div>
            <div>
              {{ repo.stargazers_count }}
              ⭐
            </div>
          </div>
          <p class="text-sm">{{ repo.description }}</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useNuxtApp } from "#app";

const nuxtApp = useNuxtApp();
let reposData: any = ref([]);

const renderData = computed(() => {
  return reposData.value
    .filter((it:any) => it.description)
    .sort((a:any, b:any) => {
      return b.stargazers_count - a.stargazers_count;
    });
});

onMounted(async () => {
  useAxios()
    .get("users/jimmyy512/repos")
    .then((res) => {
      console.warn("useAxios:", res.data);

      reposData.value = res.data;
    });
});


</script>
