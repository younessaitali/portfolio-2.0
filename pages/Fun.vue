<script setup lang="ts">
  definePageMeta({
    layout: 'home'
  });
</script>

<template>
  <nuxt-layout>
    <div class="pointer-events-none flex flex-col gap-y-4">
      <div class="self-center">
        <p font="medium" px-2 text="champagne md:xl md center" max-w-5xl>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          euismod, nisi eu consectetur consectetur,
        </p>
      </div>
      <FunAnimation class="absolute bottom-0 md:relative" />
    </div>
  </nuxt-layout>
</template>

<style></style>
