<script setup lang="ts">
import { publications } from '~/data/publications'

const route = useRoute()
const slug = computed(() => route.params.slug as string)
const publication = computed(() => publications.find((item) => item.slug === slug.value))

if (!publication.value) {
  throw createError({ statusCode: 404, statusMessage: 'Publication not found' })
}

useSeoMeta({
  title: publication.value.title,
  description: publication.value.excerpt
})
</script>

<template>
  <article v-if="publication" class="space-y-8">
    <header class="space-y-4">
      <p class="text-xs uppercase tracking-[0.2em] text-slate-500">Publication</p>
      <h1 class="font-display text-4xl font-semibold">{{ publication.title }}</h1>
      <div class="flex flex-wrap items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
        <span>{{ new Date(publication.date).toLocaleDateString() }}</span>
        <span v-if="publication.venue" class="chip">{{ publication.venue }}</span>
        <div class="flex flex-wrap gap-2">
          <Tag v-for="tag in publication.tags" :key="tag" :label="tag" />
        </div>
      </div>
    </header>

    <div class="prose max-w-none dark:prose-invert" v-html="publication.content"></div>

    <NuxtLink to="/publications" class="btn-secondary w-fit">Back to Publications</NuxtLink>
  </article>
</template>
