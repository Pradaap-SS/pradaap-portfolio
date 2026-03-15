<script setup lang="ts">
import type { Publication } from '~/data/publications'

defineProps<{
  publication: Publication
}>()
</script>

<template>
  <article class="card space-y-4">
    <div class="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
      <span>{{ new Date(publication.date).toLocaleDateString() }}</span>
      <div class="flex flex-wrap gap-2">
        <Tag v-for="tag in publication.tags" :key="tag" :label="tag" />
      </div>
    </div>
    <h3 class="font-display text-2xl font-semibold">{{ publication.title }}</h3>
    <p v-if="publication.venue" class="text-sm font-medium text-brand-600">{{ publication.venue }}</p>
    <p class="text-sm text-slate-600 dark:text-slate-300">{{ publication.excerpt }}</p>
    <NuxtLink :to="`/publications/${publication.slug}`" class="btn-secondary w-fit">Read Publication</NuxtLink>
  </article>
</template>
