<template>
    <div class="relative flex-col flex justify-between h-full min-h-screen">
        <App-header />
        <div
            id="scene"
            ref="bio"
            md="ml-28  border-l mr-0 border-champagne"
            class="z-24 flex ml-auto mr-auto flex-1">
            <main class="container mx-auto md:h-full md:my-0 my-12">
                <slot />
            </main>
        </div>
        <p
            role="note"
            class="text-lg md:block hidden text-base fixed -left-14 bottom-1/2 rotate-270">
            Want to Work 🤝
            <nuxt-link to="/contact" class="underline">Together? </nuxt-link>
        </p>
        <bio-nav />

        <app-footer />
    </div>
</template>

<script setup lang="ts">
    const bio = ref<HTMLElement | null>(null);
    const transition = useBioTransition();

    transition.setNavigationElement(bio);
</script>
