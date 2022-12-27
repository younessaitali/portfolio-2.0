<script setup lang="ts">
    definePageMeta({
        layout: 'home',
        pageTransition
    });
</script>

<template>
    <nuxt-layout>
        <div
            class="mx-auto my-auto min-h-full flex flex-col justify-center items-center text-center">
            <h1
                class="dark:text-white lg:text-8xl text-7xl capitalize font-light">
                hi I'm
                <span class="font-semibold outline-champagne-1">Youness</span>
            </h1>
            <h2
                class="md:text-4xl text-3xl text-canvas md:mt-4 mt-2 font-semibold">
                Full-Stack Developer
            </h2>

            <p
                font="medium"
                class="mx-a px-2 lg:mt-16 mt-8 xl:max-w-3xl lg:max-w-2xl dark:text-champagne text-darkChampagne lg:text-xl">
                A web developer with experience building web applications in a
                variety of business domains using the latest and most
                appropriate technology.
            </p>
            <a
                href="https://drive.google.com/file/d/1npTa9p_yxlmdF2EQVigIvmT5FKUZCs1e/view?usp=share_link"
                target="_blank"
                md="py-3 px-10 text-lg"
                rel="noopener"
                class="inline-block md:mt-16 my-10 dark:hover:bg-blue/20 hover:bg-champagne/20 text-base bg-transparent border border-champagne rounded-full py-1.5 px-5 text-md font-medium"
                >View resume</a
            >
        </div>
    </nuxt-layout>
</template>
