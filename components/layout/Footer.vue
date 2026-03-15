<script setup lang="ts">
import { profile } from '~/data/profile'
</script>

<template>
  <footer class="mx-auto w-full max-w-6xl px-4 pb-8 pt-6 sm:px-6 lg:px-8">
    <div class="surface-card border-white/50 bg-white/80 px-5 py-4 text-sm text-slate-600 backdrop-blur dark:border-slate-800/70 dark:bg-slate-900/75 dark:text-slate-300">
      <div class="flex flex-col gap-3 text-sm sm:flex-row sm:items-center sm:justify-between">
        <span>© 2026 {{ profile.name }}. All rights reserved.</span>
        <div class="flex flex-wrap items-center gap-4">
          <NuxtLink to="/projects" class="transition-colors hover:text-brand-600">Projects</NuxtLink>
          <NuxtLink to="/publications" class="transition-colors hover:text-brand-600">Publications</NuxtLink>
          <a class="transition-colors hover:text-brand-600" :href="`mailto:${profile.email}`">{{ profile.email }}</a>
        </div>
      </div>
    </div>
  </footer>
</template>
