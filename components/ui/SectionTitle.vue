<script setup lang="ts">
defineProps<{
  title: string
  subtitle?: string
}>()
</script>

<template>
  <div class="space-y-3">
    <h2 class="section-title-sm text-slate-900 dark:text-white">{{ title }}</h2>
    <p
      v-if="subtitle"
      class="section-lead max-w-3xl text-slate-600 dark:text-slate-300"
    >
      {{ subtitle }}
    </p>
  </div>
</template>
