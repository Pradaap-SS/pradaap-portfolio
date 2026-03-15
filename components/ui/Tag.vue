<script setup lang="ts">
defineProps<{ label: string }>()
</script>

<template>
  <span class="chip">{{ label }}</span>
</template>
