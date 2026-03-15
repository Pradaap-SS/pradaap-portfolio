<script setup lang="ts">
defineProps<{ label: string }>()
</script>

<template>
  <span class="chip max-w-full truncate">{{ label }}</span>
</template>
