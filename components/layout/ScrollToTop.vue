<script setup lang="ts">
const visible = ref(false)

const onScroll = () => {
  visible.value = window.scrollY > 400
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
})

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <button
    v-show="visible"
    type="button"
    class="fixed bottom-6 right-6 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-brand-600 to-secondary-500 text-white shadow-[0_12px_40px_-24px_rgba(36,95,95,0.78)] transition-all duration-300 surface-elevate"
    aria-label="Scroll to top"
    @click="scrollToTop"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.8"
      stroke="currentColor"
      class="h-5 w-5"
    >
      <path stroke-linecap="round" stroke-linejoin="round" d="m18 15-6-6-6 6" />
    </svg>
  </button>
</template>
