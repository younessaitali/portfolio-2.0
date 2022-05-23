<script setup lang="ts">
  const section = ref<HTMLElement | null>(null);
  const sectionIsVisible = ref(false);

  useIntersectionObserver(section, ([{ isIntersecting }], observerElement) => {
    sectionIsVisible.value = isIntersecting;
  });
</script>

<template>
  <section ref="section" class="h-screen snap-center relative">
    <VSvg v-if="sectionIsVisible" :position="'center'" :scale="1">
      <fun />
    </VSvg>
  </section>
</template>
