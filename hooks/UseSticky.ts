import { ref, onMounted, onUnmounted } from 'vue';

export function useSticky() {
  const sticky = ref(false);

  const stickyHeader = (): void => {
    if (window.scrollY > 200) {
      sticky.value = true;
    } else {
      sticky.value = false;
    }
  };

  onMounted(() => {
    window.addEventListener('scroll', stickyHeader);
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', stickyHeader);
  });

  return {
    sticky,
  };
}
