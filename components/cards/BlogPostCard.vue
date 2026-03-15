<script setup lang="ts">
import type { BlogPost } from '~/data/blog'

defineProps<{
  post: BlogPost
}>()
</script>

<template>
  <article class="card space-y-4">
    <div class="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
      <span>{{ new Date(post.date).toLocaleDateString() }}</span>
      <div class="flex flex-wrap gap-2">
        <Tag v-for="tag in post.tags" :key="tag" :label="tag" />
      </div>
    </div>
    <h3 class="font-display text-2xl font-semibold">{{ post.title }}</h3>
    <p class="text-sm text-slate-600 dark:text-slate-300">{{ post.excerpt }}</p>
    <NuxtLink :to="`/blog/${post.slug}`" class="btn-secondary w-fit">Read Post</NuxtLink>
  </article>
</template>
