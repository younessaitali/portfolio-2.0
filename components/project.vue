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
    md="max-w-[75%] mb-0"
    class="flex-1 flex isolate mb-16 flex-col items-center justify-center gap-y-8 mx-auto">
    <h3
      class="absolute hidden md-block z-10 opacity-5"
      text="230px stroke-champagne stroke-sm  transparent">
      {{ name }}
    </h3>

    <div
      md="flex-row "
      class="flex z-20 flex-col w-11/12 justify-center items-center gap-x-8">
      <div md="px-6" class="max-w-lg">
        <h3 text="blue-gray 3xl md:5xl " mb-5 font="bold">{{ name }}</h3>
        <p text="md:lg md  blue-gray left">
          {{ description }}
        </p>
        <p m="t-1.5" text="md:lg md blue-gray left">
          Technologies used:
          <span
            v-for="(tech, index) in technologies"
            inline-block
            :key="tech"
            p="0.5"
            hover="underline">
            {{
              ` #${tech} ${index === technologies.length - 1 ? '' : ','}`
            }}</span
          >
          <!-- v-underline-animation -->
        </p>
      </div>
      <img
        :src="image.src"
        :alt="image.alt"
        class="md:max-w-sm mx-auto md:mt-0 mt-5 max-w-[80%]" />
    </div>
    <div class="flex mb- z-30 gap-x-4">
      <a
        v-for="link in links"
        :key="link.title"
        :href="link.url"
        target="_blank"
        md="px-10 py-3 text-xl"
        class="inline-block bg-transparent border border-champagne rounded-full py-1.5 px-5 text-md font-medium hover:bg-blue"
        >{{ link.title }}</a
      >
    </div>
  </div>
</template>
