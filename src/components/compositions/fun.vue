<script lang="ts" setup>
  import { gsap, Power0 } from 'gsap';
  import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
  gsap.registerPlugin(MotionPathPlugin);

  onMounted(() => {
    gsap.set('#half-pipe', {
      scale: 2
    });
    gsap.set('#bike', {
      scale: 0.35,
      x: '-590',
      transformOrigin: 'center center',
      y: '50'
    });
    const tl = gsap.timeline();
    tl.to('#bike', {
      duration: 2,
      repeat: 12,
      repeatDelay: 1,
      yoyo: true,
      ease: Power0.easeInOut,
      motionPath: {
        path: '#bike-path',
        align: '#bike-path',
        alignOrigin: [1, 1],
        autoRotate: true
      }
    });
  });
</script>
<template>
  <g id="half-pipe">
    <path
      d="M439,161.76s6.1,94.49-94.49,88.39c-82.32,0-92.66.19-93.7.26s-11.38-.26-93.71-.26c-100.58,6.1-95.49-88.7-95.49-88.7H1l-1,162,250.84-.15h0l249.14.15V161.76Z"
      fill="#37b8af" />
    <path
      id="bike-path"
      d="M61.65,161.45s-4.69,94,94.58,88.75c101.27-.25,172.12-.29,196.19.23C386.5,248,434.5,242,439,161.76"
      fill="#fff"
      opacity="0"
      stroke="#fff"
      stroke-miterlimit="10" />
  </g>

  <g id="bike">
    <circle id="back-wheel" cx="658.86" cy="224.47" r="89.22" fill="#043c42" />
    <circle id="front-wheel" cx="971.14" cy="224.47" r="89.22" fill="#fdfdfe" />
    <polygon
      id="center"
      points="694.49 100.41 926.26 80.19 822.48 228.99 694.49 100.41"
      fill="#75a640" />
    <polygon
      id="teal"
      points="585.51 101.7 582.66 50.38 614.8 74.33 585.51 101.7"
      fill="#30bcb1" />
    <rect
      id="seat"
      x="628.5"
      y="46.72"
      width="163.58"
      height="44.61"
      transform="translate(-2.74 39.54) rotate(-3.18)"
      fill="#fdfdfe" />
    <polygon
      id="handlebars"
      points="925.68 0.4 1029.77 0 1030.17 104.09 978.12 104.29 977.92 52.24 925.88 52.44 925.68 0.4"
      fill="#ff5256" />
  </g>
</template>
