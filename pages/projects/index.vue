<script setup lang="ts">
import { projects } from '~/data/projects'

const allFilters = computed(() => {
  const techs = new Set<string>()
  projects.forEach((project) => project.techStack.forEach((tech) => techs.add(tech)))
  return ['All', ...Array.from(techs).slice(0, 10)]
})

const activeFilter = ref('All')

const filteredProjects = computed(() => {
  if (activeFilter.value === 'All') return projects
  return projects.filter((project) => project.techStack.includes(activeFilter.value))
})

useSeoMeta({
  title: 'Projects',
  description: 'Backend and distributed systems case studies with architecture decisions and measurable outcomes.'
})
</script>

<template>
  <div class="space-y-12">
    <SectionTitle title="Projects" subtitle="" />

    <div class="flex flex-wrap gap-2">
      <button
        v-for="filter in allFilters"
        :key="filter"
        type="button"
        class="chip transition"
        :class="
          activeFilter === filter
            ? 'border-brand-500 bg-brand-50 text-brand-600 dark:bg-slate-800'
            : 'hover:border-brand-500'
        "
        @click="activeFilter = filter"
      >
        {{ filter }}
      </button>
    </div>

    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <ProjectCard v-for="project in filteredProjects" :key="project.slug" :project="project" />
    </div>
  </div>
</template>
