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
      <p class="section-kicker">Publication</p>
      <h1 class="section-title text-slate-900 dark:text-white">{{ publication.title }}</h1>
      <div class="chip-group">
        <span class="text-sm font-medium text-slate-500 dark:text-slate-400">{{ new Date(publication.date).toLocaleDateString() }}</span>
        <span v-if="publication.venue" class="chip">{{ publication.venue }}</span>
        <div class="chip-group">
          <Tag v-for="tag in publication.tags" :key="tag" :label="tag" />
        </div>
      </div>
    </header>

    <section class="card card-reveal">
      <div class="prose max-w-none dark:prose-invert" v-html="publication.content"></div>
    </section>

    <NuxtLink to="/publications" class="btn-secondary w-fit">Back to Publications</NuxtLink>
  </article>
</template>
