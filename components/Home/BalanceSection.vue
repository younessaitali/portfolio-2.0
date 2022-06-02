<script lang="ts" setup>
  const section = ref<HTMLElement | null>(null);
  const sectionIsVisible = ref(false);

  useIntersectionObserver(section, ([{ isIntersecting }], observerElement) => {
    sectionIsVisible.value = isIntersecting;
  });
</script>

<template>
  <section ref="section" class="h-screen snap-center relative">
    <VSvg v-if="sectionIsVisible" position="left" :scale="5">
      <BalanceAnimation />
    </VSvg>
  </section>
</template>
