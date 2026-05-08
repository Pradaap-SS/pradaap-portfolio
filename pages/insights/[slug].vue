<script setup lang="ts">
import { insights } from '~/data/insights'
import type { InsightCategory } from '~/data/insights'

const route = useRoute()
const slug = computed(() => route.params.slug as string)
const insight = computed(() => insights.find((i) => i.slug === slug.value))

if (!insight.value) {
  throw createError({ statusCode: 404, statusMessage: 'Insight not found' })
}

const categoryStyles: Record<InsightCategory, string> = {
  'Engineering Story': 'bg-accent-50 text-accent-700 border-accent-200/70 dark:bg-accent-900/20 dark:text-accent-300 dark:border-accent-800/50',
  'System Design': 'bg-brand-50 text-brand-700 border-brand-200/70 dark:bg-brand-900/20 dark:text-brand-300 dark:border-brand-800/50',
  'Deep Dive': 'bg-secondary-50 text-secondary-700 border-secondary-200/70 dark:bg-secondary-900/20 dark:text-secondary-300 dark:border-secondary-800/50',
  'Lessons Learned': 'bg-emerald-50 text-emerald-700 border-emerald-200/70 dark:bg-emerald-900/20 dark:text-emerald-300 dark:border-emerald-800/50',
  'Architecture': 'bg-sky-50 text-sky-700 border-sky-200/70 dark:bg-sky-900/20 dark:text-sky-300 dark:border-sky-800/50',
  'Career': 'bg-slate-100 text-slate-600 border-slate-200/70 dark:bg-slate-800/40 dark:text-slate-300 dark:border-slate-700/50',
}

useSeoMeta({
  title: insight.value.title,
  description: insight.value.excerpt
})
</script>

<template>
  <article v-if="insight" class="space-y-8">
    <header class="space-y-5">
      <NuxtLink to="/insights" class="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">
        <span>← Back to Insights</span>
      </NuxtLink>

      <div class="space-y-3">
        <span
          class="inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em]"
          :class="categoryStyles[insight.category]"
        >
          {{ insight.category }}
        </span>
        <h1 class="section-title text-slate-900 dark:text-white">{{ insight.title }}</h1>
      </div>

      <div class="flex flex-wrap items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
        <span>{{ new Date(insight.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) }}</span>
        <span class="h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-600"></span>
        <span>{{ insight.readTime }} min read</span>
      </div>

      <div class="chip-group">
        <Tag v-for="tag in insight.tags" :key="tag" :label="tag" />
      </div>
    </header>

    <section class="card card-reveal">
      <div class="prose max-w-none dark:prose-invert" v-html="insight.content"></div>
    </section>

    <div class="flex flex-wrap gap-3">
      <NuxtLink to="/insights" class="btn-secondary w-fit">Back to Insights</NuxtLink>
      <a
        v-if="insight.sourceUrl"
        :href="insight.sourceUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="btn-secondary w-fit"
      >
        {{ insight.sourceLabel ?? 'View Source' }}
      </a>
    </div>
  </article>
</template>
