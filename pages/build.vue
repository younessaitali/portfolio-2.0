<script setup lang="ts">
    const { uuid } = useBioTransition();
    definePageMeta({
        layout: 'home',
        pageTransition
    });
</script>

<template>
    <nuxt-layout>
        <div class="flex items-center h-full flex-col justify-center">
            <div class="max-h-3xl flex-1 flex flex-col justify-evenly gap-y-3">
                <head-line title="Like to build things" />
                <BuildAnimation class="max-h-56" :key="uuid" />
                <p
                    font="medium"
                    class="mx-a px-2 xl:max-w-3xl lg:max-w-2xl"
                    text="champagne center lg:xl  md">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec euismod, nisi eu consectetur consectetur,Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit. Donec euismod,
                    nisi eu consectetur consectetur,
                </p>
            </div>
        </div>
    </nuxt-layout>
</template>
