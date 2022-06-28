<script setup lang="ts">
  const { uuid } = useBioTransition();

  definePageMeta({
    layout: 'home',
    pageTransition
  });
</script>

<template>
  <nuxt-layout>
    <div class="h-full w-full flex flex-col items-center">
      <head-line title="Like to have fun" />
      <BalanceAnimation class="h-82" :key="uuid" />

      <p
        font="medium"
        mt-6
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
