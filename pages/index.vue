<script setup lang="ts">
    definePageMeta({
        layout: 'home',
        pageTransition
    });
</script>

<template>
    <nuxt-layout>
        <div
            class="h-full mx-auto flex flex-col justify-center items-center text-center">
            <h1
                class="dark:text-white lg:text-8xl text-7xl capitalize font-light">
                hi Am
                <span
                    class="text-transparent font-semibold text-stroke-champagne text-stroke-2"
                    >Youness</span
                >
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
                href="https://drive.google.com/file/d/1CLLjqPX1QJIQvaI1tosUTpjy8w1m9nHN/view?usp=sharing"
                target="_blank"
                md="py-3 px-10 text-lg"
                rel="noopener"
                class="inline-block md:mt-16 my-10 dark:hover:bg-blue/20 hover:bg-champagne/20 text-base bg-transparent border border-champagne rounded-full py-1.5 px-5 text-md font-medium"
                >View resume</a
            >
        </div>
    </nuxt-layout>
</template>
