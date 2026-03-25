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
const screenshots = computed(() =>
  project.value?.details?.screenshots?.filter((item) => typeof item === 'string' && item.trim().length > 0) ?? []
)
const responsibilities = computed(() =>
  project.value?.details?.responsibilities?.filter((item) => typeof item === 'string' && item.trim().length > 0) ?? []
)
const hasResponsibilities = computed(() =>
  responsibilities.value.length > 0
)
const hasScreenshots = computed(() => screenshots.value.length > 0)

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
      <ProjectMediaFrame
        :src="project.image"
        :alt="project.title"
        variant="hero"
        loading="eager"
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
          v-for="(item, index) in responsibilities"
          :key="item"
          class="card card-reveal"
          :style="{ '--reveal-delay': `${160 + index * 60}ms` }"
        >
          {{ item }}
        </li>
      </ul>
    </section>

    <section v-if="hasScreenshots" class="space-y-8">
      <div class="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
        <SectionTitle
          title="Screenshots"
        />
        <span class="chip w-fit">{{ screenshots.length }} views</span>
      </div>
      <div class="grid gap-6 xl:grid-cols-2">
        <article
          v-for="(shot, index) in screenshots"
          :key="shot"
          class="card card-reveal space-y-4 p-4 sm:p-5"
          :style="{ '--reveal-delay': `${220 + index * 80}ms` }"
        >
          <ProjectMediaFrame
            :src="shot"
            :alt="`${project.title} screenshot ${index + 1}`"
            variant="gallery"
          />
        </article>
      </div>
    </section>
  </div>
</template>
