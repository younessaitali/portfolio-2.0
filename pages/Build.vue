<script setup lang="ts">
  definePageMeta({
    layout: 'home'
  });
</script>

<template>
  <nuxt-layout>
    <div
      class="flex items-center flex-col-reverse md:flex-row justify-center pointer-events-none">
      <BuildAnimation class="h-48 mt-5 sm:(h-sm mt-0) xl:h-md" />
      <div class="self-center">
        <p
          font="medium"
          px-2
          flex-none
          text="champagne  md:xl md center"
          max-w-5xl>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          euismod, nisi eu consectetur consectetur,
        </p>
      </div>
    </div>
  </nuxt-layout>
</template>
