<script setup lang="ts">
import type { Publication } from '~/data/publications'

defineProps<{
  publication: Publication
}>()

const isExternalUrl = (url: string) => url.startsWith('http://') || url.startsWith('https://')
</script>

<template>
  <article class="card card-reveal space-y-4">
    <div class="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
      <span class="font-medium">{{ new Date(publication.date).toLocaleDateString() }}</span>
      <div class="chip-group">
        <Tag v-for="tag in publication.tags" :key="tag" :label="tag" />
      </div>
    </div>
    <h3 class="text-2xl font-semibold text-slate-900 dark:text-slate-100">{{ publication.title }}</h3>
    <p v-if="publication.venue" class="text-sm font-medium text-brand-700 dark:text-brand-300">{{ publication.venue }}</p>
    <p class="text-slate-600 dark:text-slate-300">{{ publication.excerpt }}</p>
    <div class="flex flex-wrap gap-3">
      <NuxtLink :to="`/publications/${publication.slug}`" class="btn-secondary w-fit">Read Publication</NuxtLink>
      <a
        v-if="publication.sourceUrl"
        :href="publication.sourceUrl"
        :target="isExternalUrl(publication.sourceUrl) ? '_blank' : undefined"
        :rel="isExternalUrl(publication.sourceUrl) ? 'noopener noreferrer' : undefined"
        class="btn-secondary w-fit"
      >
        {{ publication.sourceLabel ?? 'Open Source' }}
      </a>
    </div>
  </article>
</template>
