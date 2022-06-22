<script lang="ts" setup>
  definePageMeta({
    layout: 'home'
  });
</script>

<template>
  <nuxt-layout>
    <div class="pointer-events-none flex md:flex-row flex-col-reverse gap-x-3">
      <BalanceAnimation class="w-full" />
      <div class="self-center">
        <p font="medium" px-2 text="champagne md:xl md center" max-w-5xl>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          euismod, nisi eu consectetur consectetur,
        </p>
      </div>
    </div>
  </nuxt-layout>
</template>
