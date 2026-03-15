<script setup lang="ts">
import { profile } from '~/data/profile'

const route = useRoute()
const isOpen = ref(false)

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Publications', to: '/publications' },
  { label: 'Contact', to: '/contact' }
]

const isActive = (path: string) => {
  if (path === '/') return route.path === '/'
  return route.path.startsWith(path)
}
</script>

<template>
  <header class="mx-auto w-full max-w-6xl px-4 pt-6 sm:px-6 lg:px-8">
    <div
      class="flex items-center justify-between rounded-2xl border border-slate-200/60 bg-white/80 px-4 py-3 shadow-sm backdrop-blur dark:border-slate-800/70 dark:bg-slate-900/80"
    >
      <NuxtLink to="/" class="flex items-center gap-2 font-display text-lg font-semibold">
        <span class="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-500 text-white">
          {{ profile.initials }}
        </span>
        {{ profile.name }}
      </NuxtLink>

      <nav
        class="hidden items-center gap-6 md:flex"
      >
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="text-sm font-medium transition"
          :class="
            isActive(link.to)
              ? 'text-brand-600'
              : 'text-slate-600 hover:text-brand-600 dark:text-slate-300'
          "
        >
          {{ link.label }}
        </NuxtLink>
      </nav>

      <div class="flex items-center gap-3">
        <ThemeToggle />
        <button
          class="md:hidden"
          type="button"
          aria-label="Toggle navigation"
          @click="isOpen = !isOpen"
        >
          <span class="block h-0.5 w-6 bg-slate-700 dark:bg-slate-200"></span>
          <span class="mt-1 block h-0.5 w-6 bg-slate-700 dark:bg-slate-200"></span>
          <span class="mt-1 block h-0.5 w-6 bg-slate-700 dark:bg-slate-200"></span>
        </button>
      </div>
    </div>

    <div
      v-if="isOpen"
      class="mt-3 flex flex-col gap-2 rounded-2xl border border-slate-200/60 bg-white/90 px-4 py-3 shadow-sm backdrop-blur dark:border-slate-800/70 dark:bg-slate-900/90 md:hidden"
    >
      <NuxtLink
        v-for="link in links"
        :key="link.to"
        :to="link.to"
        class="rounded-lg px-3 py-2 text-sm font-medium"
        :class="isActive(link.to) ? 'bg-brand-50 text-brand-600 dark:bg-slate-800' : 'text-slate-600 dark:text-slate-200'"
        @click="isOpen = false"
      >
        {{ link.label }}
      </NuxtLink>
    </div>
  </header>
</template>
