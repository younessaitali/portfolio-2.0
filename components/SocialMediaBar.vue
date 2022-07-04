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
    <div
        class="flex md:flex-row flex-col justify-center text-base items-center gap-y-5 md:gap-x-5 lg:mr-28 md:mr-12">
        <nuxt-link font-medium text-lg to="/contact">Get in touch</nuxt-link>

        <span class="w-16 h-0.5 dark:bg-champagne bg-darkBlue" />
        <div class="flex gap-x-5 md:mb-0 mb-10">
            <a
                v-for="link in socialMedia"
                :key="link.title"
                :href="link.path"
                target="_blank"
                :class="['inline-block text-2xl', link.icon]" />
        </div>
    </div>
</template>
