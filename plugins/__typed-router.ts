/**
 * ---------------------
 * 🚗🚦 Generated by nuxt-typed-router. Do not modify !
 * ---------------------
 * */

import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin((nuxtApp) => {
    const routesList = {
        '404': '404',
        balance: 'balance',
        blogSlug: 'blog-slug',
        blog: 'blog',
        build: 'build',
        contact: 'contact',
        fun: 'fun',
        index: 'index',
        support: 'support',
        work: 'work'
    };

    return {
        provide: {
            typedRouter: nuxtApp.$router,
            routesList
        }
    };
});
