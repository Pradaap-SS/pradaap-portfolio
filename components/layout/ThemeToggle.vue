<script setup lang="ts">
const { theme, toggleTheme } = useTheme()
</script>

<template>
  <button
    type="button"
    class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/60 bg-white/80 text-slate-700 transition hover:border-brand-500 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-100"
    aria-label="Toggle theme"
    @click="toggleTheme"
  >
    <svg
      v-if="theme === 'light'"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.8"
      stroke="currentColor"
      class="h-5 w-5"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 3v2.25M6.364 6.364l1.591 1.591M3 12h2.25m1.114 5.636 1.591-1.591M12 18.75V21m5.636-4.114-1.591-1.591M18.75 12H21m-4.114-5.636-1.591 1.591M12 15.75a3.75 3.75 0 1 1 0-7.5 3.75 3.75 0 0 1 0 7.5Z"
      />
    </svg>
    <svg
      v-else
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.8"
      stroke="currentColor"
      class="h-5 w-5"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"
      />
    </svg>
  </button>
</template>
