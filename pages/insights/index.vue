<script setup lang="ts">
import { insights } from '~/data/insights'
import type { InsightCategory } from '~/data/insights'

const categories: ('All' | InsightCategory)[] = [
  'All',
  'Engineering Story',
  'System Design',
  'Deep Dive',
  'Architecture',
  'Lessons Learned',
  'Career',
]

const activeCategory = ref<'All' | InsightCategory>('All')

const filtered = computed(() => {
  const sorted = [...insights].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  if (activeCategory.value === 'All') return sorted
  return sorted.filter((i) => i.category === activeCategory.value)
})

useSeoMeta({
  title: 'Insights',
  description: 'Engineering write-ups, system design deep dives, architecture case studies, and lessons learned from building distributed systems at scale.'
})
</script>

<template>
  <div class="space-y-10">
    <SectionTitle
      title="Insights"
      subtitle="Technical write-ups, system design breakdowns, and lessons from building production systems."
    />

    <div class="flex flex-wrap gap-2">
      <button
        v-for="cat in categories"
        :key="cat"
        class="rounded-full border px-4 py-1.5 text-sm font-medium transition-all duration-200"
        :class="
          activeCategory === cat
            ? 'border-slate-950 bg-slate-950 text-white dark:border-white dark:bg-white dark:text-slate-950'
            : 'border-slate-200/80 bg-white/70 text-slate-600 hover:border-slate-400 hover:text-slate-900 dark:border-slate-700/80 dark:bg-slate-900/50 dark:text-slate-300 dark:hover:border-slate-500 dark:hover:text-white'
        "
        @click="activeCategory = cat"
      >
        {{ cat }}
      </button>
    </div>

    <div v-if="filtered.length" class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <InsightCard
        v-for="(insight, index) in filtered"
        :key="insight.slug"
        :insight="insight"
        :style="{ '--reveal-delay': `${100 + index * 80}ms` }"
      />
    </div>
    <div v-else class="card text-slate-600 dark:text-slate-300">
      No write-ups in this category yet. Check back soon.
    </div>
  </div>
</template>
