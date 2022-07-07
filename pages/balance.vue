<script setup lang="ts">
    const { uuid } = useBioTransition();

    definePageMeta({
        layout: 'home',
        pageTransition
    });
</script>

<template>
    <nuxt-layout>
        <div
            class="w-full min-h-full flex flex-col items-center justify-center">
            <div
                class="flex flex-col items-center my-auto xl:max-h-2xl lg:max-h-2xl md:max-h-xl gap-y-3">
                <head-line title="Like to have fun" />
                <!-- md:h-82 2xl:h-lg xl:h-md -->
                <BalanceAnimation class="2xl:max-h-sm max-h-xs" :key="uuid" />
                <p
                    font="medium"
                    class="mx-a px-2 xl:max-w-3xl lg:max-w-2xl"
                    text="champagne center lg:xl md">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec euismod, nisi eu consectetur consectetur, Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit. Donec euismod,
                    nisi eu consectetur consectetur,oLorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Donec euismod, nisi eu
                    consectetur consectetur,
                </p>
            </div>
        </div>
    </nuxt-layout>
</template>
