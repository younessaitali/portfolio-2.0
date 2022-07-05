<script setup lang="ts">
    interface Props {
        name: string;
        description: string;
        image: {
            src: string;
            alt: string;
        };
        isActive: boolean;
        links: {
            title: string;
            url: string;
        }[];

        technologies: string[];
    }
    const { technologies, links, name, description, image } =
        defineProps<Props>();
</script>

<template>
    <div
        lg="max-w-[75%]   mb-0"
        class="flex-1 flex mb-24 relative flex-col items-center justify-center gap-y-8 mx-auto">
        <span
            class="absolute w-full h-full -top-16 uppercase break-words -left-4 leading-46 max-w-5xl hidden lg:block opacity-20"
            text="10rem stroke-champagne stroke-1 left  transparent">
            {{ name }}
        </span>

        <div
            xl="flex-row"
            class="flex z-10 flex-col w-11/12 lg:mt=0 mt-6 justify-center items-center gap-y-8 gap-x-8">
            <div lg="px-6" class="max-w-xl self-start">
                <h1 text="dark:white 3xl md:5xl xl:7xl" max-w- mb-5 font="bold">
                    {{ name }}
                </h1>
                <p text="md:lg   canvas left justify">
                    {{ description }}
                </p>
                <p m="t-1.5" text="md:lg  canvas left ">
                    Technologies used:
                    <span
                        v-for="(tech, index) in technologies"
                        inline-block
                        text-base
                        :key="tech"
                        p="0.5"
                        hover="underline">
                        {{
                            ` #${tech} ${
                                index === technologies.length - 1 ? '' : ','
                            }`
                        }}</span
                    >
                    <!-- v-underline-animation -->
                </p>
            </div>
            <img
                :src="image.src"
                :alt="image.alt"
                class="xl:max-w-sm mx-auto max-h-sm lg:max-h-xs xl:max-h-sm lg:mt-0 mt-5 max-w-[80%]" />
        </div>
        <div class="flex mb-16 md:mb-0 flex-grow z-30 gap-x-4">
            <a
                v-for="link in links"
                Missing
                rel="noopener"
                :key="link.title"
                :href="link.url"
                target="_blank"
                md="px-10 py-3 text-xl"
                class="inline-block bg-transparent text-base border border-champagne rounded-full py-1.5 px-5 text-md font-medium dark:hover:bg-blue/20 hover:bg-champagne/20"
                >{{ link.title }}</a
            >
        </div>
    </div>
</template>
