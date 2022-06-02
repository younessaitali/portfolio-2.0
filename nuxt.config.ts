import { defineNuxtConfig } from 'nuxt';

export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/content'
  ],
  content: {
    highlight: {
      theme: 'one-dark-pro'
    }
  },

  unocss: {
    preflight: true
  },
  colorMode: {
    classSuffix: ''
  }
});
