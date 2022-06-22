<script setup lang="ts">
  import { gsap, Power2, Power4, Sine, Expo } from 'gsap';

  onMounted(() => {
    const tl = gsap.timeline();
    gsap.set('#balance', {
      yPercent: 0,
      transformOrigin: 'center bottom'
    });
    gsap.fromTo(
      '#balance',
      { rotation: -5 },
      {
        duration: 1.5,
        rotation: 5,
        yoyo: true,
        repeat: -1,
        ease: Sine.easeInOut
      }
    );

    tl.to('#balance-top-square', {
      keyframes: {
        '0%': { y: 0, rotate: -45 },
        '30%': { y: -8, rotate: -45 },
        '50%': { rotate: 45, ease: Power2.easeOut },
        '60%': { y: 0 },
        '70%': { x: 4, rotate: 50 },
        '80%': { rotate: 38 },
        '100%': { x: 0, rotate: 45, ease: Power2.easeInOut },
        easeEach: Expo.easeInOut
      },
      duration: 1.4,

      transformOrigin: 'center center'
    })
      .to(
        '#balance-circle',
        {
          keyframes: {
            '0%': { y: 0, x: 0 },
            '20%': { y: -2, x: 2, rotate: 60 },
            '40%': { y: 0, x: 5, rotate: 100 },
            '100%': { y: 0, x: 0, rotate: -100 },
            easeEach: Power2.easeInOut
          },
          duration: 1.4,
          transformOrigin: 'center center'
        },
        '<0.2'
      )
      .to(
        '#balance-top-half-circle',
        {
          keyframes: {
            '0%': { rotate: 0 },
            '50%': { rotate: 5 },
            '75%': { rotate: -1 },
            '100%': { rotate: 0 },
            easeEach: Power4.easeOut
          },
          transformOrigin: 'center bottom',
          duration: 1.2
        },
        '<0.4'
      )

      .to('#balance-top-square', {
        keyframes: {
          '0%': { y: 0, rotate: 45 },
          '40%': { y: -5, rotate: 45 },
          '80%': { rotate: -45, ease: Power2.easeOut },
          '100%': { y: 0 },
          easeEach: Expo.easeInOut
        },
        duration: 1.2,
        transformOrigin: 'center center'
      })
      .to(
        '#balance-circle',
        {
          keyframes: {
            '0%': { y: 0 },
            '50%': { y: -2 },
            '100%': { y: 0 },
            easeEach: Sine.easeInOut
          },
          duration: 0.4,
          transformOrigin: 'center center'
        },
        '<0.2'
      )
      .repeat(-1);
  });
</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" id="animation" viewBox="0 0 130 100">
    <g transform="translate(35 8)">
      <g id="balance">
        <rect
          id="balance-top-square"
          x="25"
          y="4"
          width="16.5"
          height="16.5"
          fill="#37b8af" />
        <circle
          id="balance-circle"
          cx="33"
          cy="30.92"
          r="7.33"
          fill="#f79a3e" />
        <path
          id="balance-top-half-circle"
          d="M33,56.58A18.32,18.32,0,0,0,51.33,38.25H14.67A18.32,18.32,0,0,0,33,56.58Z"
          fill="#75a640" />
        <rect
          id="balance-rectangle"
          y="56.58"
          width="66"
          height="12.83"
          fill="#edc73d" />
      </g>
      <path
        id="balance-base"
        d="M33,69.42A18.33,18.33,0,0,0,14.67,87.75H51.33A18.33,18.33,0,0,0,33,69.42Z"
        fill="#ff5256" />
    </g>
  </svg>
</template>
