<script setup lang="ts">
  const section = ref<HTMLElement | null>(null);
  const sectionIsVisible = ref(false);

  useIntersectionObserver(section, ([{ isIntersecting }]) => {
    sectionIsVisible.value = isIntersecting;
  });
</script>

<template>
  <section ref="section" class="h-screen snap-center relative">
    <h1 class="text-5xl font-semibold text-white">Build</h1>

    <VSvg :scale="1.6" position="left" v-if="sectionIsVisible">
      <BuildAnimation />
    </VSvg>
  </section>
</template>
