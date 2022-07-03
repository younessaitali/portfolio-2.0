<script setup lang="ts">
    const { uuid } = useBioTransition();
    definePageMeta({
        layout: 'home',
        pageTransition
    });
</script>

<template>
    <nuxt-layout>
        <div class="h-full flex flex-col items-center justify-center">
            <head-line title="Like to have fun" />
            <SupportAnimation md="h-80" class="h-48 w-full" :key="uuid" />
            <p
                font="medium"
                class="mx-a px-2 lg:mt-16 mt-8 xl:max-w-3xl lg:max-w-2xl"
                text="champagne center lg:xl md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                euismod, nisi eu consectetur consectetur,
            </p>
        </div>
    </nuxt-layout>
</template>
