<script setup lang="ts">
  interface Props {
    title?: string;
  }
  const { title = 'Default title' } = defineProps<Props>();
</script>

<template>
  <div class="relative text-center isolate py-2">
    <h4
      class="xl:text-38 md:text-34 2xl:text-42 md:leading-40 text-8xl opacity-10 text-transparent text-stroke-champagne text-stroke-2">
      Youness
    </h4>
    <h1
      class="md:text-4xl text-2xl text-canvas z-20 font-semibold absolute bottom-4 w-full">
      {{ title }}
    </h1>
  </div>
</template>
