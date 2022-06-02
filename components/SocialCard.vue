<script setup lang="ts">
  interface Props {
    path?: string;
    icon?: string;
    title?: string;
  }
  // Experimental
  /**
   * Props Default Values
   * When using type-based declaration, we lose the ability to declare default values for the props.
   * This can be resolved by the currently experimental Reactivity Transform.
   * https://vuejs.org/guide/extras/reactivity-transform.html
   */
  const {
    path = '/',
    icon = 'i-carbon:face-neutral',
    title = 'set icon title'
  } = defineProps<Props>();
</script>

<template>
  <a
    :href="path"
    :title="title"
    target="_blank"
    class="h-16 px-4 py-2 group hover:-translate-y-1 hover:scale-115 ease-in-out delay-100 duration-300 inline-flex justify-center items-center text-champagne text-5xl w-16 bg-dark-blue rounded-lg shadow-dark-900 drop-shadow-2xl shadow-lg">
    <div :class="[icon, 'group-hover:scale-115  delay-100 duration-300']" />
  </a>
</template>
