<script setup lang="ts">
import type { Project } from '~/data/projects'

defineProps<{
  project: Project
}>()
</script>

<template>
  <article class="card card-reveal flex h-full flex-col gap-4">
    <ProjectMediaFrame
      :src="project.image"
      :alt="project.title"
      variant="card"
    />
    <div class="flex-1 space-y-3">
      <h3 class="text-2xl font-semibold leading-tight text-slate-900 dark:text-slate-100">{{ project.title }}</h3>
      <span v-if="!project.githubUrl && !project.liveUrl" class="chip">Internal enterprise project</span>
      <p class="text-sm leading-7 text-slate-600 dark:text-slate-300 md:text-[0.98rem]">
        {{ project.description }}
      </p>
      <div class="chip-group">
        <Tag v-for="tech in project.techStack" :key="tech" :label="tech" />
      </div>
    </div>
    <div class="flex flex-wrap items-center gap-3 text-sm pt-2">
      <NuxtLink :to="`/projects/${project.slug}`" class="btn-secondary">View Case Study</NuxtLink>
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
    </div>
  </article>
</template>
