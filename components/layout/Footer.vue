<script setup lang="ts">
import { profile } from '~/data/profile'
</script>

<template>
  <footer class="border-t border-slate-200/60 bg-white/70 backdrop-blur dark:border-slate-800/70 dark:bg-slate-900/70">
    <div class="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8 dark:text-slate-300">
      <span>© 2026 {{ profile.name }}. All rights reserved.</span>
      <div class="flex flex-wrap items-center gap-4">
        <NuxtLink to="/projects" class="hover:text-brand-500">Projects</NuxtLink>
        <NuxtLink to="/publications" class="hover:text-brand-500">Publications</NuxtLink>
        <a class="hover:text-brand-500" :href="`mailto:${profile.email}`">{{ profile.email }}</a>
      </div>
    </div>
  </footer>
</template>
