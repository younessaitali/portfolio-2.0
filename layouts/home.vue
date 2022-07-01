<template>
  <div class="relative flex-col flex justify-between h-full min-h-screen">
    <App-header z-36 />
    <div
      ref="bio"
      md="ml-28 border-l mr-0 border-champagne "
      class="z-50 ml-auto mr-auto flex-1 h-full">
      <main class="h-full container mx-auto overflow-hidden">
        <slot />
      </main>
    </div>
    <p
      class="text-lg md:block hidden text-base fixed -left-17 bottom-1/2 rotate-270">
      Want to Work 🤝
      <nuxt-link to="/contact" class="underline">Together? </nuxt-link>
    </p>
    <bio-nav />

    <app-footer />
  </div>
</template>

<script setup lang="ts">
  const bio = ref<HTMLElement | null>(null);
  const transition = useBioTransition();
  transition.setNavigationElement(bio);
</script>
