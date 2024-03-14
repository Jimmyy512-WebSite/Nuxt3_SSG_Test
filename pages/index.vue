<template>
  <div class="min-h-screen bg-slate-50 dark:bg-black dark:text-white">
    <!-- header -->
    <div class="sticky top-0 z-10 bg-teal-700 text-white">
      <div class="mx-auto flex max-w-4xl items-center justify-between p-4">
        <div class="text-3xl font-medium">
          <a href="#Home" class="hover:opacity-90"> 🚀 Jim Rockets</a>
        </div>
        <div class="cursor-pointer text-3xl sm:hidden">&#9776;</div>
        <div class="hidden space-x-8 text-xl sm:block">
          <a href="#Rockets" class="hover:opacity-80">Our Rockets</a>
          <a href="#Testimonials" class="hover:opacity-80">Testimonials</a>
          <a href="#Contact" class="hover:opacity-80">Contact</a>
        </div>

        <el-switch
          v-model="themeMode"
          size="large"
          style="--el-switch-on-color: #1a2b3c"
          :active-action-icon="Moon"
          :inactive-action-icon="Sunny"
        />
      </div>
    </div>

    <!-- main content -->
    <div class="mx-auto max-w-4xl scroll-m-[100px]" id="Home">
      <div class="flex flex-col-reverse items-center gap-8 p-6 sm:flex-row">
        <div class="sm:w-1/2">
          <div
            class="max-w-md text-center text-4xl font-bold text-slate-900 sm:text-left sm:text-5xl dark:text-white"
          >
            We Boldy Go
            <span class="text-indigo-700 dark:text-indigo-300"
              >Where No Rocket</span
            >
            Has Gone Before...
          </div>
          <p
            class="mt-4 max-w-md text-center text-2xl text-slate-700 sm:text-left dark:text-slate-400"
          >
            We're building rockets for the next century today. From the moon to
            Mars, Jupiter and beyond...
          </p>
          <p
            class="mt-4 max-w-md text-center text-2xl text-slate-700 sm:text-left dark:text-slate-400"
          >
            Think Acme Rockets.
          </p>
        </div>
        <div class="w-1/2">
          <img src="/img/rocketdab.png" alt="" />
        </div>
      </div>

      <hr class="mx-auto my-12 w-1/2 bg-black dark:bg-white" />

      <div
        id="Rockets"
        class="scroll-mt-[50px] px-6 py-12 text-center text-4xl font-bold sm:text-5xl"
      >
        <div class="mb-12">Our Rockets</div>

        <div
          class="mx-auto flex max-w-4xl flex-col items-center gap-4 sm:flex-row sm:justify-between"
        >
          <div
            class="mb-8 w-2/3 rounded-3xl border border-black p-6 sm:w-1/3 dark:border-white"
            v-for="(it, index) in RocketsBlockList"
            :key="it.title"
          >
            <img class="mx-auto w-1/2" :src="it.image" alt="" />
            <div class="mb-4 mt-2 text-2xl font-bold sm:text-3xl">
              {{ it.title }}
            </div>
            <div class="text-2xl text-slate-500 sm:hidden">
              {{ it.Description }}
            </div>

            <span
              class="hidden text-3xl text-slate-500 sm:inline-block"
              v-for="indexIt in index + 1"
              :key="indexIt"
            >
              $
            </span>
          </div>
        </div>
      </div>

      <hr class="mx-auto my-12 w-1/2 bg-black dark:bg-white" />

      <div
        id="Testimonials"
        class="py-12 text-center text-4xl font-bold sm:text-5xl"
      >
        Testimonials
      </div>

      <hr class="mx-auto my-12 w-1/2 bg-black dark:bg-white" />

      <div
        id="Contact"
        class="py-12 text-center text-4xl font-bold sm:text-5xl"
      >
        Contact Us
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, watchEffect } from "vue";
import { Sunny, Moon } from "@element-plus/icons-vue";
// import rocketman from "@/assets/img/rocketman.png";
onBeforeMount(() => {
  let htmlTag = document.querySelector("html");
  htmlTag?.classList.add("dark");
});

let themeMode = ref(true);

watchEffect(() => {
  let htmlTag = document?.querySelector("html");
  if (htmlTag) {
    if (themeMode.value) {
      htmlTag?.classList.add("dark");
    } else {
      htmlTag?.classList.remove("dark");
    }
  }
});

let RocketsBlockList = reactive([
  {
    title: "Explorer",
    Description: "Affordable Exploration!",
    // image: rocketman,
    image: "/img/rocketman.png",
  },
  {
    title: "Adventurer",
    Description: "Best Selling Rocket!",
    image: "/img/rocketride.png",
  },
  {
    title: "Infinity",
    Description: "Luxury Starship!",
    image: "/img/rocketlaunch.png",
  },
]);
</script>
