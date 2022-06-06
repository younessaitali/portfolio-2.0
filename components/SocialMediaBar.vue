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
  <ul class="flex absolute bottom-8 right-16 gap-x-10">
    <li v-for="item in socialMedia" :key="item.title">
      <social-card v-bind="{ ...item }" />
    </li>
  </ul>
</template>
