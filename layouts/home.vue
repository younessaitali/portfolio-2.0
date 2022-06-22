<script lang="ts" setup>
  const { activeTitle } = useBioList();
</script>
<template>
  <div font="sans" class="relative h-full min-h-screen">
    <main class="mx-auto container">
      <App-header />
      <SocialMediaBar />
      <section class="flex flex-col items-center gap-y-10">
        <div
          md="mt-20 gap-y-5"
          class="flex flex-col justify-center mt-10 items-center gap-y-3">
          <h2 font="bold" text="blue-gray md-6xl 4xl">
            Hi Am <span text="champagne">Youness</span>
          </h2>
          <h3 font="bold" capitalize text="blue-gray-dark md:3xl xl">
            {{ activeTitle }}
          </h3>
          <bio-nav />
        </div>
        <slot class="flex-1" />
      </section>
    </main>
  </div>
</template>
