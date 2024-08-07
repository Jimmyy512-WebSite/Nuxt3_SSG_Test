<template>
  <div class="relative min-h-screen bg-slate-50 dark:bg-black dark:text-white">
    <!-- header -->
    <div class="sticky top-0 z-10 bg-teal-700 text-white">
      <div class="mx-auto flex max-w-4xl items-center justify-between p-4">
        <div class="text-3xl font-medium">
          <a href="#Home" class="hover:opacity-90"> 🚀 Jim Rockets</a>
        </div>
        <div
          class="cursor-pointer text-3xl sm:hidden"
          :class="{
            'rotate-to-x': !isFirstLoad && isShowMobileMenu,
            'rotate-back': !isFirstLoad && !isShowMobileMenu,
          }"
          @click="handleMobileMenuClick"
        >
          <span v-if="!isShowMobileMenu" class="h-[38px]">&#9776;</span>
          <el-icon v-else class="h-[38px] translate-y-[5px] font-bold"
            ><Close />
          </el-icon>
        </div>
        <div class="hidden space-x-8 text-base sm:block font-bold">
          <a href="#Rockets" class="hover:opacity-80">Our Rockets</a>
          <a href="#Testimonials" class="hover:opacity-80">Testimonials</a>
          <a href="#Contact" class="hover:opacity-80">Contact</a>
          <a href="/project" class="hover:opacity-80">Projects</a>
        </div>

        <el-switch
          class="!hidden sm:!flex sm:items-center"
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
      <!-- introduction -->
      <div
        class="MinHeight flex flex-col-reverse items-center justify-center gap-8 p-6 sm:flex-row"
      >
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

      <!-- our rockets -->
      <div
        id="Rockets"
        class="scroll-mt-[50px] px-6 py-12 text-center text-4xl font-bold sm:text-5xl"
      >
        <div class="mb-12">Our Rockets</div>

        <div
          class="mx-auto flex max-w-4xl flex-col items-center gap-4 sm:flex-row sm:justify-between"
        >
          <div
            class="mb-8 w-2/3 rounded-3xl border-solid border border-black p-6 sm:w-1/3 dark:border-white"
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

      <!-- testimonials -->
      <div
        id="Testimonials"
        class="scroll-mt-[50px] py-12 text-center text-4xl font-bold sm:text-5xl"
      >
        Testimonials

        <div class="Testimonial mx-auto max-w-4xl px-2">
          <div class="TestimonialBlockContent">
            Acme has always been there for me. Their Explorer rocket arrived in
            a wooden crate as expected. Life-long customer! A++ shopping
            experience.
          </div>
          <div class="text-right text-2xl text-slate-700 dark:text-slate-400">
            —Wile E. Coyote, Genius
          </div>
        </div>

        <div class="Testimonial mx-auto max-w-4xl px-2">
          <div class="TestimonialBlockContent">
            The Acme Adventurer Rocket has thwarted my Illudium Q-36 Explosive
            Space Modulator on several occassions. This makes me very, very
            angry! Nevertheless, K-9 and I have awarded Acme the Martian
            contract for space exploration rockets based on Acme's quality and
            sturdy designs.
          </div>
          <div class="text-right text-2xl text-slate-700 dark:text-slate-400">
            —Marvin The Martian & K-9
          </div>
        </div>

        <div class="Testimonial mx-auto max-w-4xl px-2">
          <div class="TestimonialBlockContent">
            I knew I not only wanted — I needed — Acme's Infinity Rocket for my
            mission in space. Acme delivered in one day! Nothing says "Take me
            to your leader" like Acme's Infinity Rocket! 💯
          </div>
          <div class="text-right text-2xl text-slate-700 dark:text-slate-400">
            —Buzz Lightyear
          </div>
        </div>
      </div>

      <hr class="mx-auto my-12 w-1/2 bg-black dark:bg-white" />

      <div
        id="Contact"
        class="scroll-mt-[50px] py-12 text-center text-4xl font-bold sm:text-5xl"
      >
        Contact Us
      </div>

      <div class="flex flex-col gap-4 p-6 pb-20 sm:p-0 sm:pb-20">
        <div class="text-3xl">Subject:</div>
        <el-input
          v-model="formData.subject"
          class="h-10 !text-xl"
          style=""
          placeholder="Please input your subject"
        />

        <div class="text-3xl">Message:</div>
        <el-input
          v-model="formData.message"
          type="textarea"
          class="!text-xl"
          style=""
          placeholder="Please input your message"
          :rows="10"
        />
        <div class="flex justify-center sm:justify-start">
          <div
            class="w-fit cursor-pointer rounded-md bg-teal-600 px-10 py-4 text-3xl text-white hover:bg-teal-500"
            @click="
              ElMessage({
                message: '已送出',
                type: 'success',
              })
            "
          >
            Submit
          </div>
        </div>
      </div>
    </div>

    <!-- footer -->
    <div class="bg-teal-700 text-white">
      <div
        class="mx-auto flex max-w-4xl flex-col justify-between p-4 text-xl sm:flex-row"
      >
        <div class="mb-6 text-base sm:mb-0 sm:text-xl">
          Acme Rocket-Powered Products, Inc.<br />
          555 Astro Way<br />
          Fairfield, New Jersey 12345-5555<br />
          Email: Inquires@AcmeRockets.com<br />
          Phone: (555) 555-5555
        </div>

        <div class="text-center text-base sm:text-left sm:text-xl">
          Copyright © 2024 <br />All Rights Reserved
        </div>
      </div>
    </div>
  </div>

  <!-- Mobile Menu -->
  <div
    v-if="isShowMobileMenu"
    class="fixed left-0 top-0 min-h-screen w-full origin-top animate-open-menu bg-black bg-opacity-90"
  >
    <div
      class="absolute top-[68px] flex w-full flex-col items-center text-center text-3xl text-white"
    >
      <a href="#Home" class="MobileMenuATag" @click="isShowMobileMenu = false"
        >Home</a
      >
      <a
        href="#Rockets"
        class="MobileMenuATag"
        @click="isShowMobileMenu = false"
        >Our Rockets</a
      >
      <a
        href="#Testimonials"
        class="MobileMenuATag"
        @click="isShowMobileMenu = false"
        >Testimonials</a
      >
      <a
        href="#Contact"
        class="MobileMenuATag"
        @click="isShowMobileMenu = false"
        >Contact</a
      >
      <a
        href="/project"
        class="MobileMenuATag"
        @click="isShowMobileMenu = false"
        >Projects</a
      >
      <div class="h-50 bg-b w-52"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, watchEffect } from "vue";
import { Sunny, Moon, Close } from "@element-plus/icons-vue";

let isShowMobileMenu = ref(false);
let isFirstLoad = ref(true);
let themeMode = ref(true);
let formData = reactive({
  subject: "",
  message: "",
});
const initHtmlDarkTag = () => {
  let htmlTag = document?.querySelector("html");
  if (htmlTag) {
    if (themeMode.value) {
      htmlTag?.classList.add("dark");
    } else {
      htmlTag?.classList.remove("dark");
    }
  }
};

watchEffect(() => {
  initHtmlDarkTag();
});

let RocketsBlockList = reactive([
  {
    title: "Explorer",
    Description: "Affordable Exploration!",
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

const handleMobileMenuClick = () => {
  if (isFirstLoad) {
    isFirstLoad.value = false;
  }
  isShowMobileMenu.value = !isShowMobileMenu.value;
  console.warn("isShowMobileMenu:", isShowMobileMenu.value);
};
</script>

<style lang="scss" scoped>
.TestimonialBlockContent {
  @apply relative my-2 p-14 text-left text-xl  text-slate-700  before:absolute before:-left-0 before:-top-0 before:translate-x-2 before:translate-y-2 before:font-serif before:text-8xl before:opacity-25 before:content-['\201C'] after:absolute after:bottom-0 after:right-0 after:translate-x-0 after:translate-y-8 after:font-serif after:text-8xl after:opacity-25 after:content-['\201D'] sm:my-12 sm:text-3xl;
}

.TestimonialBlockName {
  @apply text-right text-2xl text-slate-700;
}

.MinHeight {
  min-height: calc(100vh - 68px);
}

@media (prefers-color-scheme: dark) {
  .TestimonialBlockContent {
    @apply text-slate-400;
  }
  .TestimonialBlockName {
    @apply text-slate-400;
  }
}

.MobileMenuATag {
  @apply w-[90%] border-b-2 border-gray-300 p-6 hover:text-gray-300 xms:w-[80%] ms:w-[50%];
}

.rotate-to-x {
  animation: rotate-to-x 0.3s forwards;
}

.rotate-back {
  animation: rotate-back 0.3s forwards;
}
@keyframes rotate-to-x {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes rotate-back {
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
}
</style>
