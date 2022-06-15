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
    class="flex-1 flex flex-col items-center justify-center gap-y-8 max-w-[75%] mx-auto">
    <div class="flex w-3/4 justify-center items-center gap-x-8">
      <div class="max-w-lg px-6">
        <h3 text="blue-gray 5xl " mb-5 font="bold">{{ name }}</h3>
        <p text="lg blue-gray left">
          {{ description }}
        </p>
        <p m="t-1.5" text="lg blue-gray left">
          Technologies used:
          <span
            v-for="(tech, index) in technologies"
            inline-block
            :key="tech"
            p="0.5"
            hover="underline"
            text="champagne">
            {{
              ` #${tech} ${index === technologies.length - 1 ? '' : ','}`
            }}</span
          >
          <!-- v-underline-animation -->
        </p>
      </div>
      <img :src="image.src" :alt="image.alt" class="max-w-64" />
    </div>
    <div class="flex z-30 gap-x-4">
      <a
        v-for="link in links"
        :key="link.title"
        :href="link.url"
        target="_blank"
        class="inline-block bg-transparent border border-champagne rounded-full py-3 px-10 text-lg font-medium text-champagne hover:bg-blue"
        >{{ link.title }}</a
      >
    </div>
  </div>
</template>
