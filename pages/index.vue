<template>
  <div class="relative min-h-screen bg-slate-50 dark:bg-black dark:text-white">
    <!-- header -->
    <div class="sticky top-0 z-10 bg-teal-700 text-white">
      <div class="mx-auto flex max-w-896px items-center justify-between p-16px">
        <div class="text-30px font-medium">
          <a href="#Home" class="hover:opacity-90"> 🚀 Jim Rocket</a>
        </div>
        <div
          class="cursor-pointer text-30px sm:hidden"
          :class="{
            'rotate-to-x': !isFirstLoad && isShowMobileMenu,
            'rotate-back': !isFirstLoad && !isShowMobileMenu,
          }"
          @click="handleMobileMenuClick"
        >
          <span v-if="!isShowMobileMenu" class="h-38px">&#9776;</span>
          <el-icon v-else class="h-38px translate-y-5px font-bold"
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
          v-if="isMounted"
          class="!hidden sm:!flex sm:items-center"
          v-model="themeMode"
          size="large"
          style="--el-switch-on-color: #1a2b3c"
          :active-action-icon="Moon"
          :inactive-action-icon="Sunny"
        />
        <div v-else class="w-50px h-40px"></div>
      </div>
    </div>

    <!-- main content -->
    <div class="mx-auto max-w-896px" id="Home">
      <!-- introduction -->
      <div
        class="min-h-[calc(100vh_-_68px)] flex flex-col-reverse items-center justify-center gap-8 p-6 sm:flex-row"
      >
        <div class="sm:w-1/2">
          <div
            class="max-w-md text-center text-36px font-bold text-slate-900 sm:text-left sm:text-5xl dark:text-white"
          >
            We Boldy Go
            <span class="text-indigo-700 dark:text-indigo-300"
              >Where No Rocket</span
            >
            Has Gone Before...
          </div>
          <p
            class="mt-16px max-w-md text-center text-24px text-slate-700 sm:text-left dark:text-slate-400"
          >
            We're building rockets for the next century today. From the moon to
            Mars, Jupiter and beyond...
          </p>
          <p
            class="mt-16px max-w-md text-center text-24px text-slate-700 sm:text-left dark:text-slate-400"
          >
            Think Acme Rockets.
          </p>
        </div>
        <div class="w-1/2">
          <img src="/img/rocketdab.png" alt="" />
        </div>
      </div>

      <hr class="mx-auto my-48px w-1/2 bg-black dark:bg-white" />

      <!-- our rockets -->
      <div
        id="Rockets"
        class="p-x-96px py-100px text-center text-36px font-bold sm:text-5xl"
      >
        <div class="mb-48px">Our Rockets</div>

        <div
          class="mx-auto flex max-w-896px flex-col items-center gap-4 sm:flex-row sm:justify-between"
        >
          <div
            class="m-b-32px w-2/3 rounded-24px border-solid border border-black p-24px sm:w-1/3 dark:border-white"
            v-for="(it, index) in RocketsBlockList"
            :key="it.title"
          >
            <img class="mx-auto w-1/2" :src="it.image" alt="" />
            <div class="m-b-16px m-t-8px text-24px font-bold sm:text-30px">
              {{ it.title }}
            </div>
            <div class="text-24px text-slate-500 sm:hidden">
              {{ it.Description }}
            </div>

            <span
              class="hidden text-30px text-slate-500 sm:inline-block"
              v-for="indexIt in index + 1"
              :key="indexIt"
            >
              $
            </span>
          </div>
        </div>
      </div>

      <hr class="mx-auto m-y-48px w-1/2 bg-black dark:bg-white" />

      <!-- testimonials -->
      <div
        id="Testimonials"
        class="py-100px text-center text-36px font-bold sm:text-5xl"
      >
        Testimonials

        <div class="Testimonial mx-auto max-w-896px p-x-8px">
          <div class="TestimonialBlockContent">
            Acme has always been there for me. Their Explorer rocket arrived in
            a wooden crate as expected. Life-long customer! A++ shopping
            experience.
          </div>
          <div class="TestimonialBlockName">—Wile E. Coyote, Genius</div>
        </div>

        <div class="Testimonial mx-auto max-w-896px px-2">
          <div class="TestimonialBlockContent">
            The Acme Adventurer Rocket has thwarted my Illudium Q-36 Explosive
            Space Modulator on several occassions. This makes me very, very
            angry! Nevertheless, K-9 and I have awarded Acme the Martian
            contract for space exploration rockets based on Acme's quality and
            sturdy designs.
          </div>
          <div class="TestimonialBlockName">—Marvin The Martian & K-9</div>
        </div>

        <div class="Testimonial mx-auto max-w-896px px-2">
          <div class="TestimonialBlockContent">
            I knew I not only wanted — I needed — Acme's Infinity Rocket for my
            mission in space. Acme delivered in one day! Nothing says "Take me
            to your leader" like Acme's Infinity Rocket! 💯
          </div>
          <div class="TestimonialBlockName">—Buzz Lightyear</div>
        </div>
      </div>

      <hr class="mx-auto my-12 w-1/2 bg-black dark:bg-white" />

      <div
        id="Contact"
        class="py-100px text-center text-36px font-bold sm:text-5xl"
      >
        Contact Us
      </div>

      <div class="flex flex-col gap-4 p-24px p-b-80px sm:p-0 sm:p-b-80px">
        <div class="text-30px">Subject:</div>
        <el-input
          v-model="formData.subject"
          class="h-40px !text-20px"
          style=""
          placeholder="Please input your subject"
        />

        <div class="text-30px">Message:</div>
        <el-input
          v-model="formData.message"
          type="textarea"
          class="!text-20px"
          style=""
          placeholder="Please input your message"
          :rows="10"
        />
        <div class="flex justify-center sm:justify-start">
          <div
            class="w-fit cursor-pointer rounded-md bg-teal-600 p-x-40px p-y-16px text-30px text-white hover:bg-teal-500"
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
        class="mx-auto flex max-w-896px flex-col justify-between p-y-16px text-20px sm:flex-row"
      >
        <div class="mb-24px text-base sm:mb-0 sm:text-20px">
          Acme Rocket-Powered Products, Inc.<br />
          555 Astro Way<br />
          Fairfield, New Jersey 12345-5555<br />
          Email: Inquires@AcmeRockets.com<br />
          Phone: (555) 555-5555
        </div>

        <div class="text-center text-base sm:text-left sm:text-20px">
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
      class="absolute top-68px flex w-full flex-col items-center text-center text-30px text-white"
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

      <el-switch
        v-if="isMounted"
        class="sm:!flex sm:items-center p-48px"
        v-model="themeMode"
        size="large"
        style="--el-switch-on-color: #1a2b3c"
        :active-action-icon="Moon"
        :inactive-action-icon="Sunny"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, watchEffect } from "vue";
import { Sunny, Moon, Close } from "@element-plus/icons-vue";

let isShowMobileMenu = ref(false);
let isFirstLoad = ref(true);
let isMounted = ref(false);
let themeMode = useLocalStorage("themeMode", false);

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
};

onMounted(() => {
  isMounted.value = true;
});

watchEffect(() => {
  initHtmlDarkTag();
});
</script>

<style lang="scss" scoped>
.Testimonial {
  .TestimonialBlockContent {
    @apply relative my-2 p-14 text-left text-20px text-slate-700 
  before:(absolute left-0 top-0 translate-x-2 translate-y-2 font-serif text-8xl opacity-25 content-['\201C']) 
  after:(absolute bottom-0 right-0 translate-x-0 translate-y-8 font-serif text-8xl opacity-25 content-['\201D']) 
  sm:(my-12 text-30px);
  }

  .TestimonialBlockName {
    @apply text-right text-24px text-slate-700;
  }
}

html.dark {
  .Testimonial {
    .TestimonialBlockContent {
      @apply text-slate-400;
    }
    .TestimonialBlockName {
      @apply text-slate-400;
    }
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
