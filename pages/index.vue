<template>
  <div class="min-h-screen bg-slate-50 dark:bg-black dark:text-white">
    <!-- header -->
    <div class="sticky top-0 z-10 bg-teal-700 text-white">
      <div class="mx-auto flex max-w-4xl items-center justify-between p-4">
        <div class="text-3xl font-medium">
          <a href="#home" class="hover:opacity-90"> 🚀 Jim Rockets</a>
        </div>
        <div class="cursor-pointer text-3xl sm:hidden">&#9776;</div>
        <div class="hidden space-x-8 text-xl sm:block">
          <a href="#rocket" class="hover:opacity-80">Our Rockets</a>
          <a href="#testimonials" class="hover:opacity-80">Testimonials</a>
          <a href="#contact" class="hover:opacity-80">Contact</a>
        </div>
      </div>
    </div>

    <!-- main content -->
    <div
      class="mx-auto flex max-w-4xl flex-col-reverse items-center gap-8 p-6 sm:flex-row"
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
        <img src="@/assets/img/rocketdab.png" alt="" />
      </div>
    </div>

    <hr class="mx-auto my-12 w-1/2 bg-black dark:bg-white" />
  </div>
</template>
