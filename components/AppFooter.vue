<script setup lang="ts">
  const socialMedia = [
    {
      path: 'https://github.com/younessaitali',
      icon: 'i-carbon:logo-github',
      title: 'Github'
    },
    {
      path: 'https://twitter.com/younesaitali',
      icon: 'i-carbon:logo-twitter',
      title: 'Twitter'
    },
    {
      path: 'https://www.linkedin.com/in/younessaitali/',
      icon: 'i-carbon:logo-linkedin',
      title: 'linkedIn'
    },
    {
      path: 'mailto:younes.aitali95@gmail.com',
      icon: 'i-carbon:email',
      title: 'Contact me by Email'
    }
  ];
</script>

<template>
  <footer class="md:flex hidden border-t border-champagne h-20 justify-between">
    <div class="ml-28 flex items-center">
      <dark-mode-toggle />
    </div>
    <div class="flex justify-center text-base items-center gap-x-5 mr-28">
      <nuxt-link font-medium text-lg to="/contact">Get in touch</nuxt-link>

      <span class="w-16 h-0.5 dark:bg-champagne bg-darkBlue" />
      <a
        v-for="link in socialMedia"
        :key="link.title"
        :href="link.path"
        target="_blank"
        :class="['inline-block text-2xl', link.icon]" />
    </div>
  </footer>
</template>
