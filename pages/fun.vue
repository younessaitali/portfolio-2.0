<script setup lang="ts">
  const { uuid } = useBioTransition();
  definePageMeta({
    layout: 'home',
    pageTransition
  });
</script>

<template>
  <nuxt-layout>
    <div class="flex flex-col">
      <head-line title="love to have fun" />

      <FunAnimation class="md:h-86 mt-6 md:mt-0" :key="uuid" />

      <p
        font="medium"
        px-2
        mx-a
        mt-5
        text="champagne md:xl md center"
        max-w-5xl>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod,
        nisi eu consectetur consectetur,
      </p>
    </div>
  </nuxt-layout>
</template>

<style></style>
