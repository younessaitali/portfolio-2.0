<script setup lang="ts">
  definePageMeta({
    layout: 'home',
    pageTransition
  });
</script>

<template>
  <nuxt-layout>
    <div class="h-full mx-auto text-center">
      <h1 class="dark:text-white mt-28 text-8xl capitalize font-light">
        hi Am
        <span
          class="text-transparent font-semibold text-stroke-champagne text-stroke-2"
          >Youness</span
        >
      </h1>
      <h2 class="text-4xl text-canvas mt-4 font-semibold">
        Full-Stack Developer
      </h2>
      <p font="medium" mx-a px-2 mt-16 text="champagne md:xl md" max-w-5xl>
        A web developer with experience building web applications in a variety
        of business domains using the latest and most appropriate technology.
      </p>
      <a
        href="https://drive.google.com/file/d/1CLLjqPX1QJIQvaI1tosUTpjy8w1m9nHN/view?usp=sharing"
        target="_blank"
        md="py-3 px-10 text-lg"
        class="inline-block mt-16 hover:bg-blue/20 text-base bg-transparent border border-champagne rounded-full py-1.5 px-5 text-md font-medium"
        >View resume</a
      >
    </div>
  </nuxt-layout>
</template>
