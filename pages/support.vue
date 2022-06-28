<script setup lang="ts">
  const { uuid } = useBioTransition();
  definePageMeta({
    layout: 'home',
    pageTransition
  });
</script>

<template>
  <nuxt-layout>
    <div class="h-full flex flex-col">
      <head-line title="Like to have fun" />
      <SupportAnimation md="h-80" class="h-48" :key="uuid" />
      <p
        font="medium"
        mt-8
        mx-a
        px-2
        text="champagne md:xl md center"
        max-w-5xl>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod,
        nisi eu consectetur consectetur,
      </p>
    </div>
  </nuxt-layout>
</template>
