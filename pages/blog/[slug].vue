<script setup lang="ts">
import { posts } from '~/data/blog'

const route = useRoute()
const slug = computed(() => route.params.slug as string)
const post = computed(() => posts.find((item) => item.slug === slug.value))

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Post not found' })
}

useSeoMeta({
  title: post.value.title,
  description: post.value.excerpt
})
</script>

<template>
  <article v-if="post" class="space-y-8">
    <header class="space-y-4">
      <p class="text-xs uppercase tracking-[0.2em] text-slate-500">Article</p>
      <h1 class="font-display text-4xl font-semibold">{{ post.title }}</h1>
      <div class="flex flex-wrap items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
        <span>{{ new Date(post.date).toLocaleDateString() }}</span>
        <div class="flex flex-wrap gap-2">
          <Tag v-for="tag in post.tags" :key="tag" :label="tag" />
        </div>
      </div>
    </header>

    <div class="prose max-w-none dark:prose-invert" v-html="post.content"></div>

    <NuxtLink to="/blog" class="btn-secondary w-fit">Back to Blog</NuxtLink>
  </article>
</template>
