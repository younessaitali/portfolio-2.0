<template>
  <div class="relative flex-col flex justify-between h-full min-h-screen">
    <App-header z-36 />
    <div
      class="ml-28 container mx-auto border-l border-champagne flex-1 h-full w-full">
      <main ref="bio" class="h-full">
        <slot />
      </main>
    </div>
    <p class="text-lg text-base fixed -left-17 bottom-1/2 rotate-270">
      Want to Work 🤝
      <nuxt-link to="/contact" class="underline">Together? </nuxt-link>
    </p>
    <bio-nav />

    <app-footer />
  </div>
</template>

<script setup lang="ts">
  const { bio } = useBioTransition();
</script>
