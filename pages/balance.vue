<script setup lang="ts">
    const { uuid } = useBioTransition();

    definePageMeta({
        layout: 'home',
        pageTransition
    });
</script>

<template>
    <nuxt-layout>
        <div class="h-full w-full flex flex-col justify-center items-center">
            <div
                class="flex flex-col flex-1 xl:max-h-3xl lg:max-h-2xl md:max-h-xl gap-y-3 justify-evenly">
                <head-line title="Like to have fun" />
                <!-- md:h-82 2xl:h-lg xl:h-md -->
                <BalanceAnimation class="2xl:max-h-lg max-h-xs" :key="uuid" />
                <p
                    font="medium"
                    class="mx-a px-2 xl:max-w-3xl lg:max-w-2xl"
                    text="champagne center lg:xl md">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec euismod, nisi eu consectetur consectetur,
                </p>
            </div>
        </div>
    </nuxt-layout>
</template>
