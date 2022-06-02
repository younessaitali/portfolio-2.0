<script setup lang="ts"></script>

<template>
  <div
    class="w-full h-full flex flex-col gap-y-8 justify-center items-center text-4xl md:text-6xl text-center teal-700 dark:gray-200">
    <div i-carbon-warning />

    <div>Page Not found</div>

    <NuxtLink btn text-sm m="3 t8" :to="{ path: '/' }">Back to Home</NuxtLink>
  </div>
</template>
