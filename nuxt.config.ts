import { defineNuxtConfig } from 'nuxt';
import TypedRouter from 'nuxt-typed-router';

export default defineNuxtConfig({
    modules: [
        '@vueuse/nuxt',
        '@unocss/nuxt',
        '@pinia/nuxt',
        '@nuxtjs/color-mode',
        '@nuxt/content'
    ],
    runtimeConfig: {
        sendinblueAPi: ''
    },
    buildModules: [TypedRouter],
    nuxtTypedRouter: {
        // options
    },

    experimental: {
        reactivityTransform: true,
        viteNode: false
    },
    unocss: {
        preflight: true
    },
    colorMode: {
        classSuffix: '',
        fallback: 'dark'
    },

    content: {
        highlight: {
            theme: 'one-dark-pro'
        }
    }
});
