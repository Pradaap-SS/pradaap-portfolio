<template>
  <div class="relative min-h-screen overflow-hidden">
    <div
      class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(47,111,255,0.18),_transparent_55%),radial-gradient(circle_at_20%_60%,_rgba(16,185,129,0.12),_transparent_40%)]"
    ></div>

    <div class="relative z-10 flex min-h-screen flex-col">
      <NavBar />
      <main class="mx-auto w-full max-w-6xl flex-1 px-4 pb-16 pt-12 sm:px-6 lg:px-8">
        <slot />
      </main>
      <Footer />
    </div>

    <ScrollToTop />
  </div>
</template>
