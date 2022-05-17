<script setup lang="ts">
  import { gsap, Bounce, Sine, Power3 } from 'gsap';
  // import MotionPathPlugin from 'gsap/MotionPathPlugin';

  onMounted(() => {
    const tl = gsap.timeline();
    const tl2 = gsap.timeline();
    const tl3 = gsap.timeline();
    tl.fromTo(
      '#circle',
      {
        y: '-10%',
        scaleY: 1.3
      },
      {
        duration: 1.2,
        scaleY: 1,
        y: '810px',
        ease: Bounce.easeOut
      }
    )
      .to('#circle', {
        duration: 1.2,
        x: '150px',
        rotateZ: '500deg',
        ease: Bounce.easeOut
      })
      .repeat(-1);

    tl2.to('#circle2', {
      keyframes: {
        '0%': { y: '10px', x: 500, scaleX: 1, scaleY: 1 },
        '7%': { y: '50px', scaleY: 0.9, scaleX: 1.1, ease: Sine.easeIn },
        '25%': { y: '200px', scaleY: 1.15, scaleX: 0.9, ease: Sine.easeIn },
        '50%': { y: '700px', scaleX: 1, scaleY: 1, ease: 'none' },
        '60%': { scaleX: 1.6, scaleY: 0.6, ease: 'none' },
        '65%': { y: '650px', scaleX: 1, scaleY: 1 },
        '100%': { y: '100px', scaleX: 1, scaleY: 1, ease: Power3.easeOut },
        easeEach: Sine.easeOut
      },
      duration: 1,
      repeat: -1,
      transformOrigin: 'center bottom'
    });

    tl3.to('#circle3', {
      keyframes: {
        '0%': {
          y: '-100px',
          x: '1000px',
          scaleX: 1,
          scaleY: 1,
          ease: Bounce.easeIn
        },
        '5%': { scaleY: 0.8, ease: Sine.easeIn },
        '50%': { scaleY: 1.2, ease: 'none' },
        '70%': { y: '700px', ease: Bounce.easeOut },
        '100%': { x: '1900px', scaleX: 1, scaleY: 1 },
        easeEach: Sine.easeOut
      },
      duration: 2,
      repeat: -1,
      transformOrigin: 'center bottom'
    });
  });
</script>

<template>
  <svg
    id="circle"
    xmlns="http://www.w3.org/2000/svg"
    class="absolute inset-0"
    width="100"
    height="100"
    viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="25" fill="#17c0ff" />
  </svg>
  <svg
    id="circle2"
    xmlns="http://www.w3.org/2000/svg"
    class="absolute inset-0"
    width="100"
    height="100"
    viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="25" fill="#17c0ff" />
  </svg>
  <svg
    id="circle3"
    xmlns="http://www.w3.org/2000/svg"
    class="absolute inset-0 overflow-hidden"
    width="100"
    height="100"
    viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="25" fill="#17c0ff" />
  </svg>
</template>

<style scoped></style>
