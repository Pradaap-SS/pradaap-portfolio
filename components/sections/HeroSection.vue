<script setup lang="ts">
import { profile } from '~/data/profile'
</script>

<template>
  <section class="grid gap-10 lg:gap-16 lg:grid-cols-[1.4fr_1fr] lg:items-center">
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
        class="reveal-up section-lead max-w-2xl dark:text-slate-300"
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

    <aside class="w-full reveal-up" style="--reveal-delay: 230ms">
      <div class="card space-y-3">
        <p class="section-kicker">Recruiter Snapshot</p>
        <h2 class="text-lg font-semibold leading-snug tracking-tight text-slate-900 dark:text-white">Distributed Systems and Full-Stack Engineering</h2>
        <p class="text-xs leading-relaxed text-slate-600 dark:text-slate-300">
          {{ profile.recruiterHeadline[0] }}
        </p>
        <div class="grid gap-2 text-xs text-slate-500 dark:text-slate-300">
          <div class="flex items-start gap-2">
            <span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500"></span>
            Architected event-driven logistics platforms on Azure AKS - Kafka, Redis &amp; Service Bus across 50K+ daily operations
          </div>
          <div class="flex items-start gap-2">
            <span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary-500"></span>
            Designed TMS integration layer connecting 4 freight systems via Kafka and custom ETL pipelines, eliminating 150+ manual data transfer hours weekly
          </div>
          <div class="flex items-start gap-2">
            <span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500"></span>
            55% API response improvement and 5x traffic growth sustained at 99.9% availability
          </div>
          <p class="inline-flex w-fit items-center gap-2 rounded-full border border-secondary-200/70 bg-secondary-50/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-secondary-700 shadow-sm dark:border-secondary-900/60 dark:bg-secondary-900/20 dark:text-secondary-200">
            Open to Software Engineer opportunities
          </p>
        </div>
      </div>
    </aside>
  </section>
</template>
