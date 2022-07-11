<script setup lang="ts">
    const { uuid } = useBioTransition();
    definePageMeta({
        layout: 'home',
        pageTransition
    });
</script>

<template>
    <nuxt-layout>
        <div class="flex min-h-full flex-col items-center justify-center">
            <head-line title="Enjoy supporting others" />
            <SupportAnimation md="h-80" class="h-48 w-full" :key="uuid" />
            <p
                font="medium"
                class="mx-a px-2 lg:mt-16 mt-8 xl:max-w-3xl lg:max-w-2xl"
                text="champagne center lg:xl md">
                In Youness' view, helping and supporting others is one of the
                key pillars to living a happy life, which contributes to a
                strong relationship, And he's trying his very best to follow his
                view.
            </p>
        </div>
    </nuxt-layout>
</template>
