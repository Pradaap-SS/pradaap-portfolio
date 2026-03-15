<script setup lang="ts">
import { posts } from '~/data/blog'

const sortedPosts = computed(() =>
  [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
)

useSeoMeta({
  title: 'Blog',
  description: 'Technical writing on backend engineering, distributed systems, and platform reliability.'
})
</script>

<template>
  <div class="space-y-12">
    <SectionTitle title="Blog" subtitle="Technical notes on backend and distributed systems." />
    <div v-if="sortedPosts.length" class="grid gap-6">
      <BlogPostCard v-for="post in sortedPosts" :key="post.slug" :post="post" />
    </div>
    <div v-else class="card text-slate-600 dark:text-slate-300">
      Blog posts are being curated. Check back soon for technical write-ups.
    </div>
  </div>
</template>
