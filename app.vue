<script lang="ts" setup>
    const route = useRoute();
    const color = useColorMode();

    useHead({
        title: 'Youness Aitali',

        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            {
                name: 'theme-color',
                content: color.value === 'dark' ? '#1C2C3F' : '#FFFFFF'
            },
            {
                name: 'description',
                content:
                    'A web developer with experience building web applications in a variety of business domains using the latest and most appropriate technology.'
            }
        ],
        link: [
            {
                rel: 'canonical',
                href: 'http://youness.aitali.com' + route.path
            },
            {
                rel: 'icon',
                type: 'image/png',
                href: '/nuxt.png'
            }
        ]
    });
</script>

<template>
    <NuxtPage />
</template>

<style>
    html,
    body,
    #__nuxt {
        height: 100vh;
        margin: 0;
        padding: 0;
        color: #1c2c3f;
    }

    html.dark {
        background: #1c2c3f;
        color: #a6956e;
    }
</style>
