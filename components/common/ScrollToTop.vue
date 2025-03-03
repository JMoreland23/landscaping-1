
<template>
  <button
    v-if="showScroll"
    @click="scrollTop"
    class="scroll-to-top scrollUp"
    aria-label="Scroll to top"
  >
    <svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 320 512"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z"></path>
    </svg>
  </button>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const showScroll = ref(false)

const checkScrollTop = () => {
  if (!showScroll.value && window.pageYOffset > 400) {
    showScroll.value = true
  } else if (showScroll.value && window.pageYOffset <= 400) {
    showScroll.value = false
  }
}

const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', checkScrollTop)
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkScrollTop)
})
</script>

<style scoped>
/* Add your custom styles here */
.scroll-to-top {
  cursor: pointer;
  display: block;
}
</style>