<script setup lang="ts">
import { profile, skillsByCategory } from '~/data/profile'
import { projects } from '~/data/projects'

const featuredProjects = computed(() => projects.slice(0, 3))

const featuredSkills = computed(() => [
  ...skillsByCategory.Languages.slice(0, 3),
  ...(skillsByCategory['Full Stack (Frontend, Backend)'] ?? []).slice(0, 3),
  ...skillsByCategory.Cloud.slice(0, 2)
])

useSeoMeta({
  title: 'Home',
  description:
    'Pradaap Shiva Kumar Shobha - Software Development Engineer focused on backend, distributed systems, and scalable cloud-native platforms.'
})
</script>

<template>
  <div class="space-y-20">
    <HeroSection />

    <section class="space-y-8">
      <SectionTitle
        title="Featured Projects"
        subtitle="Backend and distributed systems case studies with architecture and measurable impact."
      />
      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <ProjectCard
          v-for="(project, index) in featuredProjects"
          :key="project.slug"
          :project="project"
          :style="{ '--reveal-delay': `${140 + index * 120}ms` }"
        />
      </div>
      <NuxtLink to="/projects" class="btn-secondary w-fit">View All Projects</NuxtLink>
    </section>

    <section class="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
      <div class="space-y-4">
        <SectionTitle
          title="About Me"
        />
        <p class="section-lead max-w-3xl">
          {{ profile.homepageSummary }}
        </p>
        <NuxtLink to="/about" class="btn-primary w-fit">More About Me</NuxtLink>
      </div>
      <div class="card space-y-4">
        <p class="text-xs uppercase tracking-[0.2em] text-slate-500">Core Stack</p>
        <div class="chip-group">
          <Tag v-for="skill in featuredSkills" :key="skill" :label="skill" />
        </div>
      </div>
    </section>
  </div>
</template>
