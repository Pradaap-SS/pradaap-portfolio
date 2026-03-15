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

    <div class="chip-group">
      <button
        v-for="filter in allFilters"
        :key="filter"
        type="button"
        class="chip transition hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-slate-800 dark:hover:text-slate-100"
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
      <ProjectCard
        v-for="(project, index) in filteredProjects"
        :key="project.slug"
        :project="project"
        :style="{ '--reveal-delay': `${120 + index * 90}ms` }"
      />
    </div>
  </div>
</template>
