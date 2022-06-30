<template>
  <div class="relative flex-col flex justify-between h-full min-h-screen">
    <App-header z-36 />
    <div
      ref="bio"
      md="ml-28 border-l border-champagne"
      class="container z-50 mx-auto flex-1 h-full w-full">
      <main class="h-full overflow-hidden">
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
