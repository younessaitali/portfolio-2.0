<script lang="ts" setup>
  import { Elastic, gsap, Power4 } from 'gsap';
  import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
  import { CustomEase } from 'gsap/CustomEase';
  gsap.registerPlugin(MotionPathPlugin, CustomEase);

  let tl: gsap.core.Timeline | null = gsap.timeline();

  onMounted(() => {
    gsap.set('#half-pipe', {
      scale: 2
    });

    gsap.set('#bike', {
      scale: 1.7,
      transformOrigin: 'center bottom'
    });

    const ease = CustomEase.create(
      'custom',
      'M0,400C69.331,336.129,152.065,368.189,200,200,252.328,16.394,384.991,0.871,400,0'
    );

    const tl = gsap.timeline();
    tl.to('#bike', {
      ease,
      duration: 1.7,

      motionPath: {
        path: '#bike-path',
        align: '#bike-path',
        alignOrigin: [0.5, 1],
        autoRotate: true,
        start: 0.05,
        end: 0.95
      }
    })
      .to(
        '#front-wheel',
        {
          keyframes: {
            '0%': { yPercent: 0 },
            '16.5%': { scaleY: 1.2, scaleX: 0.8 },
            '33.33%': {
              yPercent: 130,
              xPercent: 0,
              scaleY: 1,
              scaleX: 1,
              ease: Power4.easeOut
            },
            '50%': { scaleX: 1.2, scaleY: 0.8 },
            '66.66%': {
              yPercent: 130,
              scaleX: 1,
              scaleY: 1,
              xPercent: -190,
              ease: Power4.easeOut
            },
            '83.16%': {
              scaleX: 0.8,
              scaleY: 1.2
            },
            '100%': { yPercent: 0, scaleX: 1, scaleY: 1 }
          },

          duration: 0.6
        },
        'transform'
      )
      .to(
        '#back-wheel',
        {
          rotate: -140,
          duration: 0.4,
          svgOrigin: '35 50',
          ease: Power4.easeOut
        },
        'transform+=0.2'
      )
      .to(
        '#handlebars',
        {
          rotate: -90,
          duration: 0.4,
          svgOrigin: '35 50',
          ease: Power4.easeOut
        },
        'transform+=0.2'
      )
      .to(
        '#seat',
        {
          xPercent: 130,
          yPercent: -50,
          duration: 0.4,
          ease: Power4.easeOut
        },
        'transform+=0.4'
      )
      .to(
        '#teal',
        {
          xPercent: 1400,
          yPercent: -70,
          rotate: 180,
          transformOrigin: 'center center',
          duration: 1,
          ease: Elastic.easeOut
        },
        'transform+=0.4'
      )
      .to('#bike', {
        ease,
        duration: 1.7,
        keyframes: {
          '0%': { scaleY: -1.7, scaleX: -1.7 }
        },
        motionPath: {
          path: '#reverse-bike-path',
          align: '#reverse-bike-path',
          alignOrigin: [0.55, 1],
          autoRotate: true,
          start: 0.05,
          end: 0.95
        }
      })
      .to(
        '#front-wheel',
        {
          keyframes: {
            '0%': { yPercent: 0, xPercent: -190 },
            '16.5%': { scaleY: 1.2, scaleX: 0.8 },
            '33.33%': {
              yPercent: 130,
              xPercent: -190,
              scaleY: 1,
              scaleX: 1,
              ease: Power4.easeOut
            },
            '50%': { scaleX: 1.2, scaleY: 0.8 },
            '66.66%': {
              yPercent: 130,
              scaleX: 1,
              scaleY: 1,
              xPercent: 5,
              ease: Power4.easeOut
            },
            '83.16%': {
              scaleX: 0.8,
              scaleY: 1.2
            },
            '100%': { yPercent: 0, scaleX: 1, scaleY: 1 }
          },

          duration: 0.6
        },
        'reverse-transform'
      )
      .to(
        '#back-wheel',
        {
          rotate: 0,
          duration: 0.4,
          svgOrigin: '35 50',
          ease: Power4.easeOut
        },
        'reverse-transform+=0.2'
      )
      .to(
        '#handlebars',
        {
          rotate: 0,
          duration: 0.4,
          svgOrigin: '35 50',
          ease: Power4.easeOut
        },
        'reverse-transform+=0.2'
      )
      .to(
        '#seat',
        {
          xPercent: 0,
          yPercent: 0,
          duration: 0.4,
          ease: Power4.easeOut
        },
        'reverse-transform+=0.4'
      )
      .to(
        '#teal',
        {
          xPercent: 0,
          yPercent: 0,
          rotate: 0,
          transformOrigin: 'center center',
          duration: 1,
          ease: Elastic.easeOut
        },
        'reverse-transform+=0.4'
      )

      .repeat(Infinity);
  });

  onUnmounted(() => {
    if (tl) {
      tl.kill();
      tl = null;
    }
  });
</script>
<template>
  <g id="half-pipe">
    <path
      d="M439,69s6.1,94.49-94.49,88.4c-82.32,0-92.66.18-93.7.25s-11.38-.25-93.71-.25C56.56,163.53,61.65,68.73,61.65,68.73H1l-1,162,250.84-.14h0l249.14.14V69Z"
      fill="#37b8af" />
    <path
      id="bike-path"
      d="M61.65,0V68.73s-4.69,94,94.58,88.76c101.27-.26,172.12-.3,196.19.22C386.5,155.23,434.5,149.23,439,69V0"
      opacity="0"
      stroke-miterlimit="1" />

    <path
      id="reverse-bike-path"
      d="M439,0V69c-4.54,80.19-52.54,86.19-86.62,88.67-24.07-.52-94.92-.48-196.19-.22C57,162.74,61.65,68.73,61.65,68.73V0"
      opacity="0"
      stroke-miterlimit="10" />
  </g>
  <g id="bike">
    <circle id="back-wheel" cx="14.61" cy="57" r="10.97" fill="#043c42" />
    <circle id="front-wheel" cx="53.03" cy="57" r="10.97" fill="#fdfdfe" />
    <polygon
      id="center"
      points="19 41.74 47.5 39.25 34.74 57.55 19 41.74"
      fill="#75a640" />
    <polygon
      id="teal"
      points="5.59 41.9 5.24 35.58 9.19 38.53 5.59 41.9"
      fill="#30bcb1" />
    <rect
      id="seat"
      x="10.88"
      y="35.13"
      width="20.12"
      height="5.49"
      transform="translate(-2.07 1.22) rotate(-3.18)"
      fill="#fdfdfe" />
    <polygon
      id="handlebars"
      points="47.43 29.44 60.24 29.39 60.29 42.19 53.88 42.22 53.86 35.81 47.46 35.84 47.43 29.44"
      fill="#ff5256" />
  </g>
</template>
