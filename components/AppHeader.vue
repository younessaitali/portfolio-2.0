<script lang="ts" setup>
    const navItems = ref([
        // {
        //   name: 'Blog',
        //   path: '/blog',
        //   isActive: false
        // },
        {
            name: 'Work',
            path: '/work',
            isActive: false
        },
        {
            name: 'Contact',
            path: '/contact',
            isActive: false
        }
    ]);

    const route = useRoute();
    const open = $ref(false);
    watch(
        route,
        () => {
            navItems.value.forEach((item) => {
                item.isActive = item.path === route.path;
            });
        },
        { immediate: true, deep: true }
    );
</script>

<template>
    <header
        class="items-end border-b z-36 border-champagne md:border-b-0 h-24 flex justify-between items-center">
        <NuxtLink class="w-28" to="/">
            <span class="sr-only">Logo</span>
            <logo class="md:w-14 w-12 my-2 mx-auto" />
        </NuxtLink>
        <nav
            md="border-b border-l"
            class="text-base flex-1 flex items-center justify-end h-full border-champagne">
            <div
                class="mr-8 xl:mr-28 md:flex items-center justify-center gap-x-1 hidden">
                <NuxtLink
                    v-for="item in navItems"
                    :key="item.name"
                    class="text-xl relative pl-4 uppercase pr-7 group overflow-hidden font-medium"
                    :to="item.path">
                    <span
                        :class="[
                            'absolute left-0 text-champagne dark:text-white group-hover:translate-y-0 duration-300',
                            {
                                'translate-y-0': item.isActive,
                                'translate-y-[140%]': !item.isActive
                            }
                        ]"
                        >&lt;</span
                    >

                    {{ item.name }}
                    <span
                        :class="[
                            'absolute text-champagne dark:text-white right-0 group-hover:translate-y-0 duration-300',
                            {
                                'translate-y-0': item.isActive,
                                'translate-y-[140%]': !item.isActive
                            }
                        ]"
                        >/&gt;</span
                    >
                </NuxtLink>
                <DarkModeToggle class="hidden lg:hidden md:inline-flex" />
            </div>
            <button class="md:hidden mr-4" @click="open = true">
                <icons-menu-icon class="h-6 w-6" />
            </button>
        </nav>
        <fade-transition>
            <div v-if="open" class="absolute inset-0 top-0 h-screen md:hidden">
                <div class="h-full bg-base">
                    <div class="border-b border-champagne">
                        <div
                            class="flex px-8 items-center py-3 justify-between">
                            <nuxt-link to="/">
                                <logo class="w-12" />
                            </nuxt-link>
                            <div class="-mr-2">
                                <button
                                    type="button"
                                    @click="open = false"
                                    class="inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-offset-champagne">
                                    <span class="sr-only">Close menu</span>
                                    <div
                                        i-carbon:close
                                        text-5xl
                                        text-base></div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <nav
                        class="flex h-full items-center justify-start gap-y-8 flex-col mt-12">
                        <NuxtLink
                            v-for="item in navItems"
                            :key="item.name"
                            class="text-xl relative pl-4 text-base uppercase pr-7 group overflow-hidden font-medium"
                            :to="item.path">
                            <span
                                :class="[
                                    'absolute left-0 text-champagne dark:text-white group-hover:translate-y-0 duration-300',
                                    {
                                        'translate-y-0': item.isActive,
                                        'translate-y-[140%]': !item.isActive
                                    }
                                ]"
                                >&lt;</span
                            >

                            {{ item.name }}
                            <span
                                :class="[
                                    'absolute text-champagne dark:text-white right-0 group-hover:translate-y-0 duration-300',
                                    {
                                        'translate-y-0': item.isActive,
                                        'translate-y-[140%]': !item.isActive
                                    }
                                ]"
                                >/&gt;</span
                            >
                        </NuxtLink>
                        <dark-mode-toggle />
                    </nav>
                </div>
            </div>
        </fade-transition>
    </header>
</template>
