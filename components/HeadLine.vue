<script setup lang="ts">
  interface Props {
    title?: string;
  }
  const { title = 'Default title' } = defineProps<Props>();
</script>

<template>
  <div class="relative text-center isolate w-full py-2">
    <h4
      class="text-42 leading-40 opacity-10 text-transparent text-stroke-champagne text-stroke-2">
      Youness
    </h4>
    <h1
      class="text-4xl text-canvas z-20 font-semibold absolute bottom-4 w-full">
      {{ title }}
    </h1>
  </div>
</template>
