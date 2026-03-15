<script setup lang="ts">
import { publications } from '~/data/publications'

const sortedPublications = computed(() =>
  [...publications].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
)

useSeoMeta({
  title: 'Publications',
  description: 'Publications and technical writing on Software Development Engineering and distributed systems.'
})
</script>

<template>
  <div class="space-y-12">
    <SectionTitle title="Publications" subtitle="Research papers, technical publications, and write-ups." />
    <div v-if="sortedPublications.length" class="grid gap-6">
      <PublicationCard
        v-for="(publication, index) in sortedPublications"
        :key="publication.slug"
        :publication="publication"
        :style="{ '--reveal-delay': `${140 + index * 90}ms` }"
      />
    </div>
    <div v-else class="card text-slate-600 dark:text-slate-300">
      Publications are being curated. Check back soon.
    </div>
  </div>
</template>
