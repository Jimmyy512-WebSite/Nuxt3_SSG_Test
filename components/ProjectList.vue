<template>
  <div class="">
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
            <div class="break-all">{{ repo.name }}</div>
            <div>
              {{ repo.stargazers_count }}
              ⭐
            </div>
          </div>
          <p class="text-sm">{{ repo.description }}</p>
          <p class="text-sm">{{ formatDate(repo.created_at) }}</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
let reposData = ref<Base.RepoList[]>([]);

const renderData = computed(() => {
  return reposData.value
    .filter((it: Base.RepoList) => it.description)
    .sort((a: Base.RepoList, b: Base.RepoList) => {
      return b.stargazers_count - a.stargazers_count;
    });
});

const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZoneName: "short",
  };
  return new Date(dateString).toLocaleDateString("zh-TW", options);
};

onMounted(async () => {
  // 寫法1 透過 pinia store 呼叫 API
  useBaseStore().getGithubList().then((res) => {
    // reposData.value = res.data;
    console.warn("reposData1:", res.data);
  });

  // 寫法2 直接呼叫 API
  useAPI()
    .getGithubList()
    .then((res) => {
      reposData.value = res.data;
      console.warn("reposData2:", reposData.value);
    });
});
</script>
