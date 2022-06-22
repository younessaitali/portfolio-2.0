<script setup>
  useHead({
    title: ' Nuxt 3',
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        href: '/nuxt.png'
      }
    ]
  });
</script>

<template>
  <NuxtPage />
</template>

<style>
  html,
  body,
  #__nuxt {
    height: 100vh;
    margin: 0;
    padding: 0;
    color: #1c2c3f;
  }
  html.dark {
    background: #1c2c3f;
    color: #a6956e;
  }
</style>
