<script setup lang="ts">
  const counter = ref(0);
  const increment = () => {
    counter.value++;
  };

  const decrement = () => {
    counter.value--;
  };
</script>

<template>
  <h2>{{ counter }}</h2>
  <button btn @click="increment">+</button>
  <button btn @click="decrement">-</button>
</template>
