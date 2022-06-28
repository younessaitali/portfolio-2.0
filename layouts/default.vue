<script setup lang="ts"></script>
<template>
  <div class="relative flex-col flex justify-between h-full min-h-screen">
    <App-header z-36 />
    <slot name="root" />
    <main class="h-full flex-1 ml-28 border-l border-champagne">
      <div class="container mx-auto h-full">
        <slot />
      </div>
    </main>
    <p class="text-lg text-base fixed -left-17 bottom-1/2 rotate-270">
      Want to Work 🤝
      <nuxt-link :to="{ path: '/contact' }" class="underline"
        >Together?</nuxt-link
      >
    </p>

    <app-footer z-36 />
  </div>
</template>
