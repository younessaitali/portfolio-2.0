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
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
  html,
  body,
  #__nuxt {
    height: 100%;
    margin: 0;
    padding: 0;
    background: #151d2b;
  }

  html.dark {
    background: #151d2b;
    color: white;
  }
</style>
