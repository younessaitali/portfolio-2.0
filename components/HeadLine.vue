<script setup lang="ts">
    interface Props {
        title?: string;
    }
    const { title = 'Default title' } = defineProps<Props>();
</script>

<template>
    <div class="relative text-center isolate">
        <h4
            class="xl:text-38 md:text-34 2xl:text-42 md:leading-40 text-8xl outline-champagne-1 opacity-50 dark:opacity-20">
            Youness
        </h4>
        <h1
            class="md:text-4xl text-2xl text-canvas z-20 font-semibold absolute bottom-1 w-full">
            {{ title }}
        </h1>
    </div>
</template>
