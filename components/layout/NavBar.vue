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

watch(
  () => route.path,
  () => {
    isOpen.value = false
  }
)
</script>

<template>
  <header class="sticky top-4 z-50 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
    <div
      class="surface-card flex items-center gap-4 border-white/50 bg-white/78 px-4 py-3 shadow-[0_18px_50px_-30px_rgba(15,23,42,0.35)] backdrop-blur-2xl md:px-5"
    >
      <NuxtLink
        to="/"
        class="flex min-w-0 items-center gap-3"
      >
        <span
          class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 via-accent-400 to-secondary-400 text-sm font-semibold text-white shadow-[0_12px_24px_-14px_rgba(36,95,95,0.68)]"
        >
          {{ profile.initials }}
        </span>
        <span class="min-w-0">
          <span class="block truncate text-lg font-semibold tracking-tight text-slate-900 dark:text-slate-100">
            {{ profile.name }}
          </span>
          <span class="hidden text-[11px] font-medium uppercase tracking-[0.18em] text-slate-500 md:block dark:text-slate-400">
            Full Stack Builder
          </span>
        </span>
      </NuxtLink>

      <div class="ml-auto flex items-center gap-3">
        <nav
          aria-label="Primary"
          class="hidden items-center gap-1 rounded-full border border-slate-200/70 bg-white/65 p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.4)] dark:border-slate-700/80 dark:bg-slate-900/60 md:flex"
        >
          <NuxtLink
            v-for="link in links"
            :key="link.to"
            :to="link.to"
            :aria-current="isActive(link.to) ? 'page' : undefined"
            class="rounded-full px-4 py-2 text-sm font-medium transition-all duration-200"
            :class="
              isActive(link.to)
                ? 'bg-slate-950 text-white shadow-[0_10px_24px_-16px_rgba(17,16,14,0.72)] dark:bg-white dark:text-slate-950'
                : 'text-slate-600 hover:bg-white/80 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-800/80 dark:hover:text-white'
            "
          >
            {{ link.label }}
          </NuxtLink>
        </nav>

        <div class="hidden md:block">
          <ThemeToggle />
        </div>

        <div class="flex items-center gap-3 md:hidden">
          <ThemeToggle />
        </div>

        <button
          class="surface-elevate inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/80 bg-white/80 text-slate-700 transition-all duration-300 dark:border-slate-700/80 dark:bg-slate-900/75 dark:text-slate-100 md:hidden"
          type="button"
          :aria-expanded="isOpen"
          aria-label="Toggle navigation"
          @click="isOpen = !isOpen"
        >
          <span class="relative h-4 w-5">
            <span
              class="absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition-all duration-300"
              :class="isOpen ? 'top-[7px] rotate-45' : ''"
            ></span>
            <span
              class="absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-current transition-all duration-300"
              :class="isOpen ? 'opacity-0' : 'opacity-100'"
            ></span>
            <span
              class="absolute left-0 top-[14px] h-0.5 w-5 rounded-full bg-current transition-all duration-300"
              :class="isOpen ? 'top-[7px] -rotate-45' : ''"
            ></span>
          </span>
        </button>
      </div>
    </div>

    <div
      v-if="isOpen"
      class="surface-card mt-3 border-white/50 bg-white/92 p-2 shadow-[0_20px_44px_-28px_rgba(15,23,42,0.45)] backdrop-blur-2xl md:hidden"
    >
      <nav aria-label="Mobile primary" class="grid gap-1">
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          :aria-current="isActive(link.to) ? 'page' : undefined"
          class="flex items-center justify-between rounded-2xl px-3 py-3 text-sm font-medium transition-all duration-200"
          :class="
            isActive(link.to)
              ? 'bg-gradient-to-r from-brand-600 to-secondary-500 text-white shadow-[0_16px_28px_-20px_rgba(36,95,95,0.72)]'
              : 'text-slate-700 hover:bg-white/80 dark:text-slate-200 dark:hover:bg-slate-800/75'
          "
          @click="isOpen = false"
        >
          <span>{{ link.label }}</span>
          <span
            class="h-2 w-2 rounded-full transition-opacity duration-200"
            :class="isActive(link.to) ? 'bg-white opacity-100' : 'bg-secondary-500 opacity-0'"
          ></span>
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>
