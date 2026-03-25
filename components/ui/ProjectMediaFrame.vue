<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    src: string
    alt: string
    variant?: 'card' | 'hero' | 'gallery'
    loading?: 'lazy' | 'eager'
  }>(),
  {
    variant: 'gallery',
    loading: 'lazy'
  }
)

const shellClass = computed(() => {
  switch (props.variant) {
    case 'card':
      return 'aspect-[16/10] p-3'
    case 'hero':
      return 'aspect-[16/10] min-h-[18rem] p-4 sm:min-h-[22rem] sm:p-5'
    default:
      return 'aspect-[16/10] min-h-[16rem] p-4 sm:min-h-[20rem] sm:p-5'
  }
})

const imageClass = computed(() => {
  switch (props.variant) {
    case 'card':
      return 'max-h-[15rem]'
    case 'hero':
      return 'max-h-[24rem]'
    default:
      return 'max-h-[22rem]'
  }
})
</script>

<template>
  <figure class="project-media-frame">
    <div class="project-media-shell" :class="shellClass">
      <img
        :src="src"
        :alt="alt"
        :loading="loading"
        class="project-media-image"
        :class="imageClass"
      />
    </div>
  </figure>
</template>
