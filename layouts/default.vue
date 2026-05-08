<template>
  <div class="relative min-h-screen overflow-hidden">
    <div
      class="pointer-events-none absolute inset-0 opacity-75"
      style="
        background:
          radial-gradient(circle at 12% -14%, rgb(47 127 124 / 0.16), transparent 48%),
          radial-gradient(circle at 82% 12%, rgb(168 111 53 / 0.12), transparent 42%),
          radial-gradient(circle at 90% 120%, rgb(45 150 108 / 0.1), transparent 35%);
      "
    ></div>

    <div class="relative z-10 flex min-h-screen flex-col">
      <NavBar />
      <main class="mx-auto w-full max-w-[2000px] flex-1 px-4 pb-16 pt-32 sm:px-6 lg:px-10 xl:px-14 2xl:px-20">
        <slot />
      </main>
      <Footer />
    </div>

    <ScrollToTop />
  </div>
</template>
