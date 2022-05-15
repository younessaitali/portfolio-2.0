<script setup lang="ts">
  import { toggleDark } from '~/composables';

  const { availableLocales, locale } = useI18n();

  const toggleLocales = () => {
    // change to some real logic
    const locales = availableLocales;
    locale.value =
      locales[(locales.indexOf(locale.value) + 1) % locales.length];
  };
</script>

<template>
  <nav text-xl mt-6>
    <RouterLink class="icon-btn mx-2" to="/">
      <div i-carbon-campsite />
    </RouterLink>

    <button class="icon-btn mx-2 !outline-none" @click="toggleDark()">
      <div i="carbon-sun dark:carbon-moon" />
    </button>

    <a class="icon-btn mx-2" @click="toggleLocales">
      <div i-carbon-language />
    </a>

    <a
      class="icon-btn mx-2"
      rel="noreferrer"
      href="https://github.com/antfu/vitesse"
      target="_blank"
      title="GitHub">
      <div i-carbon-logo-github />
    </a>
  </nav>
</template>
