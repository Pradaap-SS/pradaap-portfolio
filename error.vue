<script setup lang="ts">
const props = defineProps<{ error: { statusCode?: number; statusMessage?: string } }>()

const statusCode = computed(() => props.error?.statusCode || 404)
const message = computed(() => props.error?.statusMessage || 'Page not found')

useHead({
  title: `${statusCode.value} · ${message.value}`
})
</script>

<template>
  <div class="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center gap-4 text-center">
    <p class="text-xs uppercase tracking-[0.2em] text-slate-500">{{ statusCode }}</p>
    <h1 class="font-display text-4xl font-semibold">{{ message }}</h1>
    <p class="text-slate-600 dark:text-slate-300">
      The page you are looking for does not exist. Let’s get you back on track.
    </p>
    <NuxtLink to="/" class="btn-primary">Back Home</NuxtLink>
  </div>
</template>
