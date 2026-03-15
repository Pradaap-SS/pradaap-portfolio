<script setup lang="ts">
defineProps<{
  title: string
  subtitle?: string
}>()
</script>

<template>
  <div class="space-y-2">
    <!-- <p class="text-xs font-semibold uppercase tracking-[0.2em] text-brand-500">Section</p> -->
    <h2 class="font-display text-3xl font-semibold">{{ title }}</h2>
    <p v-if="subtitle" class="text-slate-600 dark:text-slate-300">{{ subtitle }}</p>
  </div>
</template>
