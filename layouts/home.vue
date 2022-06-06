<script lang="ts" setup>
  const { activeTitle } = useBioList();
</script>
<template>
  <div font="sans" class="relative min-h-screen">
    <main class="h-screen mx-auto container flex flex-col">
      <App-header />
      <SocialMediaBar />
      <section class="flex flex-col items-center h-full gap-y-10">
        <div class="flex flex-col justify-center mt-20 items-center gap-y-5">
          <h2 font="bold" text="blue-gray 6xl">
            Hi Am <span text="champagne">Youness</span>
          </h2>
          <h3 font="bold" capitalize text="blue-gray-dark 3xl">
            {{ activeTitle }}
          </h3>
          <bio-nav />
        </div>
        <slot class="flex-1" />
      </section>
    </main>
  </div>
</template>
