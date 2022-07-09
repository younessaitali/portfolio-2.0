<script setup lang="ts">
    const { uuid } = useBioTransition();
    definePageMeta({
        layout: 'home',

        pageTransition
    });
</script>

<template>
    <nuxt-layout>
        <div class="flex items-center my-a min-h-full flex-col justify-center">
            <div class="max-h-3xl flex-1 flex flex-col justify-evenly gap-y-3">
                <head-line title="Like to build things" />
                <BuildAnimation class="max-h-56" :key="uuid" />
                <p
                    font="medium"
                    class="mx-a px-2 xl:max-w-3xl lg:max-w-2xl"
                    text="champagne center lg:xl  ">
                    Youness is always curious about how things work and loves
                    learning new things. The best way for him to learn something
                    is to build it, That way he will gain a deep understanding
                    of it.
                </p>
            </div>
        </div>
    </nuxt-layout>
</template>
