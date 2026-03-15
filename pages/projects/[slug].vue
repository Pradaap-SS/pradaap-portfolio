<script setup lang="ts">
import { projects } from '~/data/projects'

const route = useRoute()
const slug = computed(() => route.params.slug as string)

const project = computed(() => projects.find((item) => item.slug === slug.value))

if (!project.value) {
  throw createError({ statusCode: 404, statusMessage: 'Project not found' })
}

const hasProblem = computed(() => Boolean(project.value?.details?.problem?.trim()))
const hasSolution = computed(() => Boolean(project.value?.details?.solution?.trim()))
const hasArchitecture = computed(() => Boolean(project.value?.details?.architecture?.trim()))
const hasResponsibilities = computed(() =>
  Boolean(
    project.value?.details?.responsibilities?.some((item) => typeof item === 'string' && item.trim().length > 0)
  )
)
const hasScreenshots = computed(() =>
  Boolean(project.value?.details?.screenshots?.some((item) => typeof item === 'string' && item.trim().length > 0))
)

useSeoMeta({
  title: project.value.title,
  description: project.value.description
})
</script>

<template>
  <div v-if="project" class="space-y-12">
    <section class="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
      <div class="space-y-4">
        <p class="section-kicker">Case Study</p>
        <h1 class="section-title text-slate-900 dark:text-white">{{ project.title }}</h1>
        <p class="section-lead dark:text-slate-300">{{ project.longDescription }}</p>
        <div class="chip-group">
          <span class="chip">{{ project.role }}</span>
          <span class="chip">{{ project.period }}</span>
        </div>
        <div class="flex flex-wrap gap-3">
          <a
            v-if="project.githubUrl"
            :href="project.githubUrl"
            target="_blank"
            rel="noopener"
            class="btn-secondary"
          >
            GitHub
          </a>
          <a
            v-if="project.liveUrl"
            :href="project.liveUrl"
            target="_blank"
            rel="noopener"
            class="btn-primary"
          >
            Live Demo
          </a>
          <span v-if="!project.githubUrl && !project.liveUrl" class="chip">Internal enterprise project (details shareable)</span>
        </div>
      </div>
      <img
        :src="project.image"
        :alt="project.title"
        class="h-64 w-full rounded-2xl border border-slate-200/60 object-cover shadow-soft dark:border-slate-800/70"
        loading="lazy"
      />
    </section>

    <section v-if="hasProblem || hasSolution || hasArchitecture" class="grid gap-6 lg:grid-cols-3">
      <div v-if="hasProblem" class="card card-reveal space-y-3" style="--reveal-delay: 40ms">
        <h2 class="font-display text-xl font-semibold">Problem</h2>
        <p class="text-sm text-slate-600 dark:text-slate-300">{{ project.details.problem }}</p>
      </div>
      <div v-if="hasSolution" class="card card-reveal space-y-3" style="--reveal-delay: 80ms">
        <h2 class="font-display text-xl font-semibold">Solution</h2>
        <p class="text-sm text-slate-600 dark:text-slate-300">{{ project.details.solution }}</p>
      </div>
      <div v-if="hasArchitecture" class="card card-reveal space-y-3" style="--reveal-delay: 120ms">
        <h2 class="font-display text-xl font-semibold">Architecture</h2>
        <p class="text-sm text-slate-600 dark:text-slate-300">{{ project.details.architecture }}</p>
      </div>
    </section>

    <section v-if="hasResponsibilities" class="space-y-6">
      <SectionTitle title="Key Responsibilities" />
      <ul class="grid gap-3 text-slate-600 dark:text-slate-300">
        <li
          v-for="(item, index) in project.details.responsibilities.filter((entry) => entry && entry.trim().length > 0)"
          :key="item"
          class="card card-reveal"
          :style="{ '--reveal-delay': `${160 + index * 60}ms` }"
        >
          {{ item }}
        </li>
      </ul>
    </section>

    <section v-if="hasScreenshots" class="space-y-6">
      <SectionTitle title="Screenshots" subtitle="Representative visual placeholders for portfolio layout." />
      <div class="grid gap-6 md:grid-cols-2">
        <img
          v-for="shot in project.details.screenshots.filter((entry) => entry && entry.trim().length > 0)"
          :key="shot"
          :src="shot"
          :alt="`${project.title} screenshot`"
          class="h-56 w-full rounded-2xl border border-slate-200/60 object-cover shadow-soft dark:border-slate-800/70"
        />
      </div>
    </section>
  </div>
</template>
