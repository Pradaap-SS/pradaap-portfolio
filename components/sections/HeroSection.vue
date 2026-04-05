<script setup lang="ts">
import { profile } from '~/data/profile'
</script>

<template>
  <section class="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
    <div class="space-y-6">
      <h1 class="reveal-up section-title text-slate-900 dark:text-white" style="--reveal-delay: 90ms">
        {{ profile.preferredName }}
      </h1>
      <p
        class="reveal-up text-xl font-medium text-brand-700 md:text-2xl dark:text-brand-300"
        style="--reveal-delay: 170ms"
      >
        {{ profile.role }}
      </p>
      <p
        class="reveal-up section-lead max-w-xl dark:text-slate-300"
        style="--reveal-delay: 250ms"
      >
        {{ profile.tagline }}
      </p>
      <div class="reveal-up flex flex-wrap gap-3" style="--reveal-delay: 320ms">
        <NuxtLink to="/projects" class="btn-primary">View Projects</NuxtLink>
        <a href="/Pradaap_Shobha_resume.pdf" class="btn-secondary" download>Download CV</a>
      </div>
      <div class="reveal-up chip-group" style="--reveal-delay: 390ms">
        <span class="chip">Distributed Systems</span>
        <span class="chip">Microservices</span>
        <span class="chip">Backend APIs</span>
        <span class="chip">Cloud-Native Services</span>
        <span class="chip">CI/CD Automation</span>
      </div>
    </div>

    <aside class="mx-auto w-full max-w-sm reveal-up" style="--reveal-delay: 230ms">
      <div class="card space-y-4">
        <p class="section-kicker">Recruiter Snapshot</p>
        <h2 class="section-title-sm text-slate-900 dark:text-white">Distributed Systems and Full-Stack Engineering</h2>
        <p class="text-sm leading-relaxed text-slate-600 dark:text-slate-300 md:text-base">
          {{ profile.recruiterHeadline[0] }}
        </p>
        <div class="grid gap-3 text-sm text-slate-500 dark:text-slate-300">
          <div class="flex items-center gap-2">
            <span class="h-2 w-2 rounded-full bg-accent-500"></span>
            $2B+ annual invoice volume across a modernized billing platform
          </div>
          <div class="flex items-center gap-2">
            <span class="h-2 w-2 rounded-full bg-secondary-500"></span>
            $500K annual savings and 10x traffic-ready API architecture
          </div>
          <div class="flex items-center gap-2">
            <span class="h-2 w-2 rounded-full bg-brand-500"></span>
            60% lower P95 latency and 85% less manual intervention
          </div>
          <p class="inline-flex w-fit items-center gap-2 rounded-full border border-secondary-200/70 bg-secondary-50/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-secondary-700 shadow-sm dark:border-secondary-900/60 dark:bg-secondary-900/20 dark:text-secondary-200">
            Open to Software Engineer opportunities
          </p>
        </div>
      </div>
    </aside>
  </section>
</template>
