<script setup lang="ts">
  const { uuid } = useBioTransition();
  definePageMeta({
    layout: 'home',
    pageTransition
  });
</script>

<template>
  <nuxt-layout>
    <div class="flex items-center flex-col justify-center gap-y-6">
      <head-line title="Like to build things" />
      <BuildAnimation class="h-38 mt-5 sm:(h-sm mt-0) xl:h-64" :key="uuid" />
      <p font="medium" px-2 text="champagne  md:xl md center" max-w-5xl>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod,
        nisi eu consectetur consectetur,Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Donec euismod, nisi eu consectetur consectetur,
      </p>
    </div>
  </nuxt-layout>
</template>
