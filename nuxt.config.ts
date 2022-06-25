import { defineNuxtConfig } from 'nuxt';

export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/content'
  ],

  experimental: {
    reactivityTransform: true,
    viteNode: false
  },
  unocss: {
    preflight: true
  },
  colorMode: {
    classSuffix: ''
  },

  content: {
    highlight: {
      theme: 'one-dark-pro'
    }
  }
});
