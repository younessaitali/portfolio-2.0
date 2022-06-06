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

  experimental: {
    reactivityTransform: true
  },
  unocss: {
    preflight: true
  },
  colorMode: {
    classSuffix: ''
  }
});
