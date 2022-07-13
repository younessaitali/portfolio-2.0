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
                <head-line title="Tries his very best to be balanced" />
                <BalanceAnimation class="2xl:max-h-sm max-h-xs" :key="uuid" />

                <figure
                    font="medium"
                    class="mx-a relative xl:max-w-3xl lg:max-w-2xl"
                    text="champagne center lg:xl md">
                    <blockquote class="italic mt-4 font-display font-bold mb-4">
                        <i class="text-4xl">“</i>
                        Too much of one thing can end up creating stress. this
                        is something that no one needs in their life. But living
                        a life in balance can provide harmony and peace.
                        <i class="text-4xl">”</i>
                    </blockquote>
                    <cite class="font-medium underline"
                        >Catherine Pulsifer.</cite
                    >
                </figure>
            </div>
        </div>
    </nuxt-layout>
</template>
