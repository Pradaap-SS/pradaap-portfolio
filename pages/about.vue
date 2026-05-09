<script setup lang="ts">
import { aboutParagraphs, certifications, education, experience, profile, skillsByCategory } from '~/data/profile'

useSeoMeta({
  title: 'About',
  description:
    'About Pradaap Shiva Kumar Shobha - Software Development Engineer focused on backend, distributed systems, cloud-native architecture, and scalable services.'
})
</script>

<template>
  <div class="space-y-16">
    <section class="grid gap-10 lg:grid-cols-[2fr_1fr] lg:items-start">
      <div class="space-y-6">
        <SectionTitle
          title="About"
          subtitle=""
        />
        <div class="space-y-5 text-slate-600 dark:text-slate-300">
          <p v-for="paragraph in aboutParagraphs" :key="paragraph">{{ paragraph }}</p>
        </div>
      </div>
      <aside class="mx-auto w-full max-w-xs lg:sticky lg:top-24">
        <div class="card flex flex-col items-center gap-4 p-5 text-center">
          <div class="rounded-full border border-slate-200/80 bg-white p-1 shadow-sm dark:border-slate-800/80 dark:bg-slate-900">
            <img
              :src="profile.photo.src"
              :alt="profile.photo.alt"
              class="h-32 w-32 rounded-full object-cover sm:h-36 sm:w-36"
              width="288"
              height="288"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div class="space-y-1">
            <p class="font-display text-lg font-semibold text-slate-900 dark:text-slate-100">{{ profile.preferredName }}</p>
            <p class="text-[11px] leading-relaxed text-slate-500 dark:text-slate-400">{{ profile.role }}</p>
          </div>
          <div class="flex w-full flex-col gap-2 border-t border-slate-200/60 pt-3 dark:border-slate-700/60">
            <a
              :href="`mailto:${profile.email}`"
              class="btn-secondary w-full justify-center truncate py-2 text-xs"
            >
              {{ profile.email }}
            </a>
            <a
              :href="profile.linkedin"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-secondary w-full justify-center py-2 text-xs"
            >
              LinkedIn →
            </a>
            <a href="/Pradaap_Shobha_resume.pdf" class="btn-secondary w-full justify-center py-2 text-xs" download>
              Download Resume
            </a>
          </div>
        </div>
      </aside>
    </section>

    <section class="space-y-6">
      <SectionTitle title="Certifications" subtitle="" />
      <div class="flex flex-col gap-4">
        <a
          v-for="cert in certifications"
          :key="cert.name"
          :href="cert.credentialUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="card group flex items-center gap-5 transition-all duration-200 hover:shadow-lg"
        >
          <img
            :src="`/images/certifications/aws-certified-solutions-architect-associate.png`"
            alt="AWS Certified Solutions Architect Associate badge"
            class="h-16 w-16 shrink-0 object-contain"
          />
          <div class="min-w-0 flex-1">
            <p class="font-semibold text-slate-900 group-hover:text-brand-700 dark:text-slate-100 dark:group-hover:text-brand-300 transition-colors duration-200">
              {{ cert.name }}
            </p>
            <p class="mt-0.5 text-sm text-slate-500 dark:text-slate-400">{{ cert.issuer }}</p>
            <p class="mt-1 text-xs text-slate-400 dark:text-slate-500">Issued {{ cert.issued }} · Expires {{ cert.expires }}</p>
          </div>
          <span class="shrink-0 text-xs font-medium text-brand-600 dark:text-brand-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            View credential →
          </span>
        </a>
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
        title="Work Experience"
        subtitle=""
      />
      <div class="space-y-6">
        <article v-for="item in experience" :key="`${item.company}-${item.period}`" class="card space-y-4">
          <div class="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h3 class="font-display text-xl font-semibold">{{ item.title }}</h3>
              <p class="text-sm font-medium text-brand-600">{{ item.company }}</p>
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
        title="Education"
        subtitle="Academic foundation."
      />
      <div class="grid gap-4">
        <article v-for="item in education" :key="item.degree" class="card space-y-1">
          <div class="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h3 class="font-display text-xl font-semibold">{{ item.degree }}</h3>
              <p class="text-sm text-brand-600">{{ item.institution }}</p>
            </div>
            <span class="chip">{{ item.period }}</span>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>
