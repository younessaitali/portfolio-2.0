<template>
  <div class="relative flex-col flex justify-between h-full min-h-screen">
    <App-header z-36 />
    <main
      class="mx-auto container h-full w-full flex-1 ml-28 border-l border-champagne">
      <slot />
    </main>
    <p class="text-lg text-base fixed -left-17 bottom-1/2 rotate-270">
      Want to Work 🤝
      <nuxt-link :to="{ path: '/contact' }" class="underline"
        >Together?</nuxt-link
      >
    </p>

    <app-footer />
  </div>
</template>
