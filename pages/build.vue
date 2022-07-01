<script setup lang="ts">
  const { uuid } = useBioTransition();
  definePageMeta({
    layout: 'home',
    pageTransition
  });
</script>

<template>
  <nuxt-layout>
    <div class="flex items-center h-full flex-col justify-center gap-y-4">
      <head-line title="Like to build things" />
      <BuildAnimation class="h-52 mt-5 sm:(h-sm mt-0) 2xl:h-md" :key="uuid" />
      <p
        font="medium"
        class="mx-a px-2 lg:mt-10 mt-8 xl:max-w-3xl lg:max-w-2xl"
        text="champagne center lg:xl  md">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod,
        nisi eu consectetur consectetur,Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Donec euismod, nisi eu consectetur consectetur,
      </p>
    </div>
  </nuxt-layout>
</template>
