<script setup lang="ts">
import type { Project } from '~/data/projects'

defineProps<{
  project: Project
}>()
</script>

<template>
  <article class="card flex h-full flex-col gap-4">
    <img
      :src="project.image"
      :alt="project.title"
      class="h-40 w-full rounded-xl border border-slate-200/60 object-cover dark:border-slate-800/70"
      loading="lazy"
    />
    <div class="flex-1 space-y-3">
      <h3 class="font-display text-xl font-semibold">{{ project.title }}</h3> 
      <span v-if="!project.githubUrl && !project.liveUrl" class="chip">Internal enterprise project</span>
      <p class="text-sm text-slate-600 dark:text-slate-300">{{ project.description }}</p>
      <div class="flex flex-wrap gap-2">
        <Tag v-for="tech in project.techStack" :key="tech" :label="tech" />
      </div>
    </div>
    <div class="flex flex-wrap items-center gap-3 text-sm">
      <NuxtLink :to="`/projects/${project.slug}`" class="btn-secondary">View Case Study</NuxtLink>
      <a v-if="project.githubUrl" :href="project.githubUrl" target="_blank" rel="noopener" class="btn-secondary">
        GitHub
      </a>
      <a v-if="project.liveUrl" :href="project.liveUrl" target="_blank" rel="noopener" class="btn-primary">
        Live Demo
      </a>
    </div>
  </article>
</template>
