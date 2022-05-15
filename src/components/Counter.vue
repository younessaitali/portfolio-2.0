<script setup lang="ts">
  const props = defineProps<{
    initial: number;
  }>();

  const { count, inc, dec } = useCounter(props.initial);
</script>

<template>
  <div fon="bold" text="3xl" color="black dark:gray:200">
    {{ count }}
    <button class="inc" @click="inc()">+</button>
    <button class="dec" @click="dec()">-</button>
  </div>
</template>
