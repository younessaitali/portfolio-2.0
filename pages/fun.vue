<script setup lang="ts">
    const { uuid } = useBioTransition();
    definePageMeta({
        layout: 'home',

        pageTransition
    });
</script>

<template>
    <nuxt-layout>
        <div class="flex flex-col h-full items-center justify-center">
            <div class="flex flex-1 flex-col max-h-3xl justify-evenly">
                <head-line title="love to have fun" />
                <FunAnimation
                    class="md:h-86 xl:h-sm 2xl:h-md mt-6 md:mt-0"
                    :key="uuid" />
                <p
                    font="medium"
                    class="mx-a px-2 mt-6 xl:max-w-3xl lg:max-w-2xl"
                    text="champagne center lg:xl md">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec euismod, nisi eu consectetur consectetur,
                </p>
            </div>
        </div>
    </nuxt-layout>
</template>

<style></style>
