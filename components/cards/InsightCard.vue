<script setup lang="ts">
import type { Insight, InsightCategory } from '~/data/insights'

const props = defineProps<{
  insight: Insight
}>()

// If sourceUrl is an internal path (starts with /), use it as the read-more link.
// Otherwise fall back to the generic detail slug route.
const readMoreLink = computed(() =>
  props.insight.sourceUrl && props.insight.sourceUrl.startsWith('/')
    ? props.insight.sourceUrl
    : `/insights/${props.insight.slug}`
)

const categoryStyles: Record<InsightCategory, string> = {
  'Engineering Story': 'bg-accent-50 text-accent-700 border-accent-200/70 dark:bg-accent-900/20 dark:text-accent-300 dark:border-accent-800/50',
  'System Design': 'bg-brand-50 text-brand-700 border-brand-200/70 dark:bg-brand-900/20 dark:text-brand-300 dark:border-brand-800/50',
  'Deep Dive': 'bg-secondary-50 text-secondary-700 border-secondary-200/70 dark:bg-secondary-900/20 dark:text-secondary-300 dark:border-secondary-800/50',
  'Architecture': 'bg-sky-50 text-sky-700 border-sky-200/70 dark:bg-sky-900/20 dark:text-sky-300 dark:border-sky-800/50',
}
</script>

<template>
  <article class="card card-reveal flex flex-col gap-4">
    <div class="flex flex-wrap items-center justify-between gap-2">
      <span
        class="inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em]"
        :class="categoryStyles[insight.category]"
      >
        {{ insight.category }}
      </span>
      <span class="text-xs text-slate-400 dark:text-slate-500">{{ insight.readTime }} min read</span>
    </div>

    <div class="flex-1 space-y-2">
      <h3 class="text-lg font-semibold leading-snug text-slate-900 dark:text-slate-100">{{ insight.title }}</h3>
      <p class="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{{ insight.excerpt }}</p>
    </div>

    <div class="flex flex-wrap items-center justify-between gap-3 pt-1">
      <div class="chip-group">
        <Tag v-for="tag in insight.tags.slice(0, 3)" :key="tag" :label="tag" />
      </div>
      <NuxtLink :to="readMoreLink" class="btn-secondary shrink-0 text-sm">
        Read More
      </NuxtLink>
    </div>
  </article>
</template>
