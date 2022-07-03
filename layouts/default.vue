<script setup lang="ts"></script>
<template>
    <div class="relative flex-col flex justify-between h-full min-h-screen">
        <App-header />
        <slot name="root" />
        <main md="ml-28 border-l border-champagne" class="h-full flex-1">
            <div class="container mx-auto h-full w-full">
                <slot />
            </div>
        </main>
        <p
            class="text-lg md:block hidden text-base fixed -left-17 bottom-1/2 rotate-270">
            Want to Work 🤝
            <nuxt-link :to="{ path: '/contact' }" class="underline"
                >Together?</nuxt-link
            >
        </p>

        <app-footer />
    </div>
</template>
