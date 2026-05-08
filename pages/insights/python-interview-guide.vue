<script setup lang="ts">
import { pythonGuide } from '~/data/python-guide'
import type { GuideChapter, Difficulty } from '~/data/python-guide'

// ── State ────────────────────────────────────────────────────────────────────
const activeChapterId = ref(pythonGuide[0].id)
const expandedSections = ref<Set<string>>(new Set())
const filterMustKnow = ref(false)
const filterDifficulty = ref<Difficulty | 'All'>('All')

// ── Computed ─────────────────────────────────────────────────────────────────
const activeChapter = computed<GuideChapter>(
  () => pythonGuide.find(c => c.id === activeChapterId.value) ?? pythonGuide[0]
)

const isFiltering = computed(() => filterDifficulty.value !== 'All' || filterMustKnow.value)

const visibleSections = computed(() => {
  const pool = isFiltering.value
    ? pythonGuide.flatMap(c => c.sections)
    : activeChapter.value.sections

  return pool.filter(s => {
    if (filterMustKnow.value && !s.mustKnow) return false
    if (filterDifficulty.value !== 'All' && s.difficulty !== filterDifficulty.value) return false
    return true
  })
})

const totalMustKnow = computed(() =>
  pythonGuide.flatMap(c => c.sections).filter(s => s.mustKnow).length
)

// ── Helpers ───────────────────────────────────────────────────────────────────
function toggleSection(id: string) {
  if (expandedSections.value.has(id)) {
    expandedSections.value.delete(id)
  } else {
    expandedSections.value.add(id)
  }
  expandedSections.value = new Set(expandedSections.value)
}

function expandAll() {
  expandedSections.value = new Set(visibleSections.value.map(s => s.id))
}

function collapseAll() {
  expandedSections.value = new Set()
}

function selectChapter(id: string) {
  activeChapterId.value = id
  expandedSections.value = new Set()
}

function setDifficulty(val: string) {
  filterDifficulty.value = val as Difficulty | 'All'
}

const difficulties = ['All', 'Fundamental', 'Intermediate', 'Advanced'] as const

function difficultyBtnClass(d: string) {
  return filterDifficulty.value === d
    ? 'border-slate-950 bg-slate-950 text-white dark:border-white dark:bg-white dark:text-slate-950'
    : 'border-slate-200/80 bg-white/70 text-slate-600 hover:border-slate-400 dark:border-slate-700/80 dark:bg-slate-900/50 dark:text-slate-300'
}

const difficultyClasses: Record<string, string> = {
  Fundamental: 'bg-emerald-50 text-emerald-700 border-emerald-200/80 dark:bg-emerald-900/20 dark:text-emerald-300 dark:border-emerald-800/50',
  Intermediate: 'bg-sky-50 text-sky-700 border-sky-200/80 dark:bg-sky-900/20 dark:text-sky-300 dark:border-sky-800/50',
  Advanced: 'bg-secondary-50 text-secondary-700 border-secondary-200/80 dark:bg-secondary-900/20 dark:text-secondary-300 dark:border-secondary-800/50',
}

const calloutClasses = {
  'must-know': 'border-l-4 border-accent-400 bg-accent-50/80 text-accent-900 dark:bg-accent-900/15 dark:text-accent-200',
  'tip': 'border-l-4 border-brand-400 bg-brand-50/80 text-brand-900 dark:bg-brand-900/15 dark:text-brand-200',
  'warning': 'border-l-4 border-rose-400 bg-rose-50/80 text-rose-900 dark:bg-rose-900/15 dark:text-rose-200',
  'pattern': 'border-l-4 border-secondary-400 bg-secondary-50/80 text-secondary-900 dark:bg-secondary-900/15 dark:text-secondary-200',
}

const calloutLabel = {
  'must-know': 'Must Know',
  'tip': 'Tip',
  'warning': 'Watch Out',
  'pattern': 'Pattern',
}

useSeoMeta({
  title: 'Python Interview Guide',
  description: 'Comprehensive Python reference for coding interviews — LeetCode patterns, data structures, algorithms, and shortcuts.'
})
</script>

<template>
  <div class="space-y-8">

    <!-- Header -->
    <header class="space-y-4">
      <NuxtLink
        to="/insights"
        class="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
      >
        ← Back to Insights
      </NuxtLink>
      <div class="space-y-2">
        <div class="flex flex-wrap items-center gap-2">
          <span class="inline-flex items-center rounded-full border border-secondary-200/70 bg-secondary-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-secondary-700 dark:border-secondary-800/50 dark:bg-secondary-900/20 dark:text-secondary-300">
            Deep Dive
          </span>
          <span class="inline-flex items-center rounded-full border border-slate-200/70 bg-white/70 px-3 py-1 text-xs font-medium text-slate-500 dark:border-slate-700/80 dark:bg-slate-900/50 dark:text-slate-400">
            {{ totalMustKnow }} Must-Know concepts
          </span>
          <span class="inline-flex items-center rounded-full border border-slate-200/70 bg-white/70 px-3 py-1 text-xs font-medium text-slate-500 dark:border-slate-700/80 dark:bg-slate-900/50 dark:text-slate-400">
            {{ pythonGuide.length }} chapters
          </span>
        </div>
        <h1 class="section-title text-slate-900 dark:text-white">
          Python Interview Guide
        </h1>
        <p class="section-lead max-w-3xl dark:text-slate-300">
          A comprehensive reference for coding interviews — Python syntax, data structures, algorithms, patterns, and LeetCode-ready templates. Designed to help you move from problem to solution faster.
        </p>
      </div>
    </header>

    <!-- Controls -->
    <div class="flex flex-wrap items-center justify-between gap-3">
      <div class="flex flex-wrap gap-2">
        <button
          v-for="d in difficulties"
          :key="d"
          class="rounded-full border px-3 py-1 text-xs font-medium transition-all duration-200"
          :class="difficultyBtnClass(d)"
          @click="setDifficulty(d)"
        >
          {{ d }}
        </button>

        <!-- Must Know toggle -->
        <button
          class="rounded-full border px-3 py-1 text-xs font-semibold transition-all duration-200"
          :class="filterMustKnow
            ? 'border-accent-400 bg-accent-500 text-white'
            : 'border-slate-200/80 bg-white/70 text-slate-600 hover:border-accent-400 dark:border-slate-700/80 dark:bg-slate-900/50 dark:text-slate-300'"
          @click="filterMustKnow = !filterMustKnow"
        >
          ★ Must Know Only
        </button>
      </div>

      <div class="flex gap-2">
        <button class="text-xs font-medium text-brand-600 hover:underline dark:text-brand-400" @click="expandAll">Expand All</button>
        <span class="text-slate-300 dark:text-slate-600">|</span>
        <button class="text-xs font-medium text-slate-500 hover:underline dark:text-slate-400" @click="collapseAll">Collapse All</button>
      </div>
    </div>

    <!-- Layout: Sidebar + Content -->
    <div class="grid gap-6 lg:grid-cols-[240px_1fr] lg:items-start">

      <!-- Chapter Sidebar -->
      <nav class="lg:sticky lg:top-24 space-y-1">
        <p class="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">Chapters</p>
        <button
          v-for="chapter in pythonGuide"
          :key="chapter.id"
          class="w-full rounded-xl px-3 py-2.5 text-left text-sm font-medium transition-all duration-200"
          :class="activeChapterId === chapter.id
            ? 'bg-slate-950 text-white shadow-sm dark:bg-white dark:text-slate-950'
            : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800/60'"
          @click="selectChapter(chapter.id)"
        >
          {{ chapter.title }}
        </button>
      </nav>

      <!-- Sections -->
      <div class="space-y-3">
        <p v-if="visibleSections.length === 0" class="card text-sm text-slate-500 dark:text-slate-400">
          No sections match the current filters.
        </p>

        <div
          v-for="section in visibleSections"
          :key="section.id"
          class="card overflow-hidden p-0"
        >
          <!-- Section Header -->
          <button
            class="flex w-full items-start justify-between gap-4 p-5 text-left transition-colors hover:bg-slate-50/60 dark:hover:bg-slate-800/30"
            @click="toggleSection(section.id)"
          >
            <div class="flex-1 space-y-2">
              <div class="flex flex-wrap items-center gap-2">
                <!-- Must Know star -->
                <span
                  v-if="section.mustKnow"
                  class="inline-flex items-center gap-1 rounded-full border border-accent-300/70 bg-accent-50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.15em] text-accent-700 dark:border-accent-800/50 dark:bg-accent-900/20 dark:text-accent-300"
                >
                  ★ Must Know
                </span>
                <!-- Difficulty -->
                <span
                  class="rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em]"
                  :class="difficultyClasses[section.difficulty]"
                >
                  {{ section.difficulty }}
                </span>
              </div>
              <h3 class="text-base font-semibold text-slate-900 dark:text-slate-100">{{ section.title }}</h3>
              <p class="text-xs text-slate-500 dark:text-slate-400">{{ section.summary }}</p>
              <!-- Tags -->
              <div class="flex flex-wrap gap-1.5">
                <span
                  v-for="tag in section.tags"
                  :key="tag"
                  class="rounded-md bg-slate-100/80 px-2 py-0.5 text-[10px] font-medium text-slate-500 dark:bg-slate-800/50 dark:text-slate-400"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
            <!-- Chevron -->
            <span
              class="mt-1 shrink-0 text-slate-400 transition-transform duration-200 dark:text-slate-500"
              :class="expandedSections.has(section.id) ? 'rotate-180' : ''"
            >
              ▾
            </span>
          </button>

          <!-- Section Content -->
          <div v-if="expandedSections.has(section.id)" class="border-t border-slate-100 px-5 pb-5 pt-4 dark:border-slate-800/60">
            <div class="space-y-4">
              <template v-for="(block, bi) in section.blocks" :key="bi">

                <!-- Text block -->
                <div v-if="block.type === 'text'" class="prose prose-sm max-w-none dark:prose-invert" v-html="block.html" />

                <!-- Code block -->
                <div v-else-if="block.type === 'code'" class="overflow-hidden rounded-xl border border-slate-200/60 dark:border-slate-700/60">
                  <div v-if="block.label" class="border-b border-slate-200/60 bg-slate-100/80 px-4 py-2 text-xs font-medium text-slate-500 dark:border-slate-700/60 dark:bg-slate-800/60 dark:text-slate-400">
                    {{ block.label }}
                  </div>
                  <pre class="overflow-x-auto bg-slate-950 p-4 text-[13px] leading-relaxed text-slate-100 dark:bg-slate-900"><code>{{ block.code }}</code></pre>
                </div>

                <!-- Callout block -->
                <div
                  v-else-if="block.type === 'callout'"
                  class="rounded-xl p-4 text-sm"
                  :class="calloutClasses[block.variant]"
                >
                  <span class="mr-2 text-[10px] font-bold uppercase tracking-[0.15em] opacity-70">{{ calloutLabel[block.variant] }}</span>
                  {{ block.text }}
                </div>

                <!-- List block -->
                <ul v-else-if="block.type === 'list'" class="space-y-1.5">
                  <li
                    v-for="(item, li) in block.items"
                    :key="li"
                    class="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300"
                  >
                    <span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400"></span>
                    <code class="font-mono text-[12px]">{{ item }}</code>
                  </li>
                </ul>

              </template>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
