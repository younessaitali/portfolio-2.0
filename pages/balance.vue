<script setup lang="ts">
  const { uuid } = useBioTransition();

  definePageMeta({
    layout: 'home',
    pageTransition
  });
</script>

<template>
  <nuxt-layout>
    <div class="h-full w-full flex flex-col justify-center items-center">
      <head-line title="Like to have fun" />
      <BalanceAnimation class="md:h-82 2xl:h-lg xl:h-md" :key="uuid" />

      <p
        font="medium"
        class="mx-a px-2 xl:mt-10 mt-8 xl:max-w-3xl lg:max-w-2xl"
        text="champagne center lg:xl md">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod,
        nisi eu consectetur consectetur,
      </p>
    </div>
  </nuxt-layout>
</template>
