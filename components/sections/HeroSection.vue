<script setup lang="ts">
import { profile } from '~/data/profile'
</script>

<template>
  <section class="grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
    <div class="space-y-6">
      <h1 class="font-display text-4xl font-semibold leading-tight sm:text-5xl">
        {{ profile.preferredName }}
      </h1>
      <p class="text-xl font-medium text-brand-700 dark:text-brand-400">
        {{ profile.role }}
      </p>
      <p class="text-lg text-slate-600 dark:text-slate-300">
        {{ profile.tagline }}
      </p>
      <div class="flex flex-wrap gap-3">
        <NuxtLink to="/projects" class="btn-primary">View Projects</NuxtLink>
        <a href="/cv.pdf" class="btn-secondary" download>Download CV</a>
      </div>
      <div class="flex flex-wrap gap-2 text-sm text-slate-500 dark:text-slate-400">
        <span class="chip">Distributed Systems</span>
        <span class="chip">Backend APIs</span>
        <span class="chip">Cloud-Native Services</span>
        <span class="chip">CI/CD Automation</span>
      </div>
    </div>

    <aside class="mx-auto w-full max-w-sm">
      <div class="card space-y-4">
        <p class="text-xs uppercase tracking-[0.2em] text-slate-500">Recruiter Snapshot</p>
        <h2 class="font-display text-2xl font-semibold">Impact-focused Full Stack Engineering</h2>
        <p class="text-sm text-slate-600 dark:text-slate-300">
          {{ profile.recruiterHeadline[0] }}
        </p>
        <div class="grid gap-3 text-sm text-slate-500 dark:text-slate-400">
          <div class="flex items-center gap-2">
            <span class="h-2 w-2 rounded-full bg-emerald-500"></span>
            15% lower API latency and 20% fewer incidents
          </div>
          <div class="flex items-center gap-2">
            <span class="h-2 w-2 rounded-full bg-amber-500"></span>
            30% faster database queries through optimization
          </div>
          <div class="flex items-center gap-2">
            <span class="h-2 w-2 rounded-full bg-brand-500"></span>
            80% reduction in manual AP/AR effort
          </div>
          <div class="inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 shadow-sm dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-300">
            Open to SDE (AI/ML) opportunities
          </div>
        </div>
      </div>
    </aside>
  </section>
</template>
