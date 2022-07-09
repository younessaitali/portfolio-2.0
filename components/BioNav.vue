<script setup lang="ts">
    const { bioLinks } = useBioTransition();
</script>

<template>
    <nav
        aria-label="Tabs"
        xl="-right-16  "
        lg="w-80 -right-28 bottom-1/2 inset-x-auto rotate-90"
        md="inset-x-auto left-28 right-0  bottom-28  "
        class="px-10 w-58 rotate-180 fixed z-50 inset-x-0 mx-auto bottom-5">
        <ul class="items-center grid gap-x-6 grid-cols-5">
            <li
                class="h-5 w-5 border-2 flex items-center justify-center border-darkBlue dark:border-champagne rounded-md"
                v-for="link in bioLinks"
                :key="link.label">
                <nuxt-link
                    :to="link.path"
                    :class="[
                        'h-3 w-3 rounded-sm',
                        {
                            'bg-darkBlue dark:bg-champagne': link.isActive
                        }
                    ]"
                    ><span class="sr-only">{{ link.label }}</span></nuxt-link
                >
            </li>
        </ul>
    </nav>
</template>
