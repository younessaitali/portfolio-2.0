import { defineNuxtConfig } from 'nuxt';

export default defineNuxtConfig({
  modules: ['@vueuse/nuxt', '@unocss/nuxt', '@nuxt/content'],
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
