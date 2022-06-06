<script setup lang="ts">
  const route = useRoute();
</script>

<template>
  <ContentDoc :path="route.path">
    <template #not-found>
      <div
        class="mx-auto text-center max-w-screen-xl text-champagne px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">
        <h1
          class="text-4xl tracking-tight leading-10 font-semibold sm:text-5xl sm:leading-none md:text-6xl">
          Document not found
        </h1>
        <NuxtLink
          class="mt-3 max-w-md mx-auto text-base sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
          to="/"
          >Back to Home
        </NuxtLink>
      </div>
    </template>
    <template #default="{ doc }">
      <div
        class="mx-auto text-center max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">
        <h1
          class="text-4xl tracking-tight leading-10 font-bold sm:text-5xl sm:leading-none md:text-6xl">
          {{ doc.title }}
        </h1>
        <p
          class="mt-3 max-w-md mx-auto text-base text-color-secondary-text sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          {{ doc.excerpt }}
        </p>
      </div>
      <div
        class="relative mx-auto pb-6 max-w-screen-xl sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">
        <article class="xl:px-8 px-6 w-full mx-auto text-lg prose text-left">
          <ContentRenderer :value="doc" />
        </article>
      </div>
    </template>
  </ContentDoc>
</template>
