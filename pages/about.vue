<script setup lang="ts">
import { aboutParagraphs, education, experience, profile, skillsByCategory } from '~/data/profile'

useSeoMeta({
  title: 'About',
  description:
    'About Pradaap Shiva Kumar Shobha - Software Development Engineer focused on backend, distributed systems, cloud-native architecture, and scalable services.'
})
</script>

<template>
  <div class="space-y-16">
    <section class="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
      <div class="space-y-6">
        <SectionTitle
          title="About"
          subtitle=""
        />
        <div class="section-content-width space-y-5 text-slate-600 dark:text-slate-300">
          <p v-for="paragraph in aboutParagraphs" :key="paragraph">{{ paragraph }}</p>
        </div>
        <div class="flex flex-wrap items-center gap-3">
          <a href="/cv.pdf" class="btn-secondary" download>
            Download CV
          </a>
          <a :href="profile.linkedin" target="_blank" rel="noopener noreferrer" class="btn-secondary">
            LinkedIn
          </a>
        </div>
      </div>
      <aside class="mx-auto w-full max-w-sm lg:sticky lg:top-24">
        <div class="card flex flex-col items-center gap-5 text-center">
          <div class="rounded-full border border-slate-200/80 bg-white p-1.5 shadow-sm dark:border-slate-800/80 dark:bg-slate-900">
            <img
              :src="profile.photo.src"
              :alt="profile.photo.alt"
              class="h-44 w-44 rounded-full object-cover sm:h-52 sm:w-52"
              width="416"
              height="416"
              loading="lazy"
              decoding="async"
              sizes="(max-width: 640px) 176px, 208px"
            />
          </div>
          <p class="font-display text-xl font-semibold text-slate-900 dark:text-slate-100">{{ profile.preferredName }}</p>
          <p class="text-sm text-slate-600 dark:text-slate-300">{{ profile.role }}</p>
          <div class="flex flex-wrap justify-center gap-2 text-xs">
            <span class="chip">{{ profile.location }}</span>
          </div>
        </div>
      </aside>
    </section>

    <section class="space-y-8">
      <SectionTitle
        title="Work Experience"
        subtitle="Impact-focused achievements and outcomes."
      />
      <div class="space-y-6">
        <article v-for="item in experience" :key="`${item.company}-${item.period}`" class="card space-y-4">
          <div class="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h3 class="font-display text-xl font-semibold">{{ item.title }}</h3>
              <p class="text-sm font-medium text-brand-600">{{ item.company }} - {{ item.location }}</p>
            </div>
            <span class="chip">{{ item.period }}</span>
          </div>
          <p class="text-slate-600 dark:text-slate-300">{{ item.summary }}</p>
          <ul class="space-y-3 text-slate-700 dark:text-slate-200">
            <li v-for="bullet in item.bullets" :key="bullet" class="flex gap-2">
              <span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500"></span>
              <span>{{ bullet }}</span>
            </li>
          </ul>
        </article>
      </div>
    </section>

    <section class="space-y-8">
      <SectionTitle
        title="Skills"
        subtitle="Grouped by role-relevant categories."
      />
      <div class="grid gap-6 md:grid-cols-2">
        <div v-for="(items, category) in skillsByCategory" :key="category" class="card space-y-3">
          <h3 class="font-display text-xl font-semibold">{{ category }}</h3>
          <div class="chip-group">
            <Tag v-for="item in items" :key="item" :label="item" />
          </div>
        </div>
      </div>
    </section>

    <section class="space-y-8">
      <SectionTitle
        title="Education"
        subtitle="Academic foundation."
      />
      <div class="grid gap-4">
        <article v-for="item in education" :key="item.degree" class="card space-y-1">
          <h3 class="font-display text-xl font-semibold">{{ item.degree }}</h3>
          <p class="text-sm text-brand-600">{{ item.institution }}</p>
          <p class="text-sm text-slate-500 dark:text-slate-400">{{ item.location }}</p>
        </article>
      </div>
    </section>
  </div>
</template>
