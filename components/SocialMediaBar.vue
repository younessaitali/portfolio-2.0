<script setup lang="ts">
  import { breakpointsTailwind } from '@vueuse/core';
  import { gsap, Power2 } from 'gsap';

  const socialMedia = [
    {
      path: 'https://github.com/younessaitali',
      icon: 'i-carbon:logo-github',
      title: 'Github'
    },
    {
      path: 'https://twitter.com/younesaitali',
      icon: 'i-carbon:logo-twitter',
      title: 'Twitter'
    },
    {
      path: 'https://www.linkedin.com/in/younessaitali/',
      icon: 'i-carbon:logo-linkedin',
      title: 'linkedIn'
    },
    {
      path: 'mailto:younes.aitali95@gmail.com',
      icon: 'i-carbon:email',
      title: 'Contact me by Email'
    }
  ];

  const breakPoints = useBreakpoints(breakpointsTailwind);

  const mdAndGreater = breakPoints.greater('md');

  const open = ref(false);

  const showSocialMedia = computed(() => {
    return mdAndGreater.value || open.value;
  });

  const onBeforeEnter = (el: HTMLElement) => {
    gsap.set(el, {
      scaleX: 0.75,
      scaleY: 0.75,
      xPercent: 200,
      opacity: 0.25
    });
  };

  const onEnter = (el: HTMLElement, done: () => void) => {
    gsap.to(el, {
      duration: 1,
      xPercent: 0,
      scaleX: 1,
      scaleY: 1,
      opacity: 1,
      ease: Power2.easeInOut,
      onComplete: done
    });
  };

  const onLeave = (el: HTMLElement, done: () => void) => {
    gsap.to(el, {
      duration: 0.7,
      scaleX: 1,
      scaleY: 1,
      xPercent: 200,
      ease: Power2.easeInOut
    });
    gsap.to(el, {
      duration: 0.2,
      delay: 0.5,
      opacity: 0,
      onComplete: done
    });
  };
</script>

<template>
  <button
    v-if="!mdAndGreater"
    @click="open = !open"
    class="h-12 fixed z-30 px-2 py-2 bottom-4 right-4 inline-flex justify-center items-center text-2xl w-12 bg-dark-blue rounded-lg shadow-dark-900 drop-shadow-2xl shadow-lg">
    <div class="i-icon-park-outline:connect" />
  </button>
  <transition
    @before-enter="onBeforeEnter"
    @enter="onEnter"
    @leave="onLeave"
    :css="false">
    <ul
      v-if="showSocialMedia"
      md="bottom-8 right-24 gap-x-10 "
      class="flex fixed z-30 bottom-4 right-22 gap-x-6">
      <li v-for="item in socialMedia" :key="item.title">
        <social-card v-bind="{ ...item }" />
      </li>
    </ul>
  </transition>
</template>
