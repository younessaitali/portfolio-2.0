<script setup lang="ts">
  import { gsap, Power3 } from 'gsap';

  // const x1 = ref(0);
  // const x2 = ref(80);
  onMounted(() => {
    const tl = gsap.timeline();
    tl.to('#line', {
      duration: 1.2,
      attr: { x2: 80 },
      ease: Power3.easeOut
    }).repeat(-1);
  });
</script>

<template>
  <svg
    class="absolute inset-0"
    xmlns="http://www.w3.org/2000/svg"
    width="88"
    height="5"
    viewBox="0 0 88 0.25">
    <line
      id="line"
      y1="0.13"
      x1="0"
      x2="0"
      y2="0.13"
      stroke="#17c0ff"
      stroke-miterlimit="10"
      stroke-width="10" />
  </svg>
</template>
