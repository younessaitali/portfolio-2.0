<script setup lang="ts">
  import { gsap, Power2 } from 'gsap';
  const { uuid } = useBioTransition();
  definePageMeta({
    layout: 'home',
    pageTransition: {
      onLeave(el: Element, done: () => void) {
        gsap.to(el.querySelector('main'), {
          duration: 0.5,
          yPercent: useBioTransition().leaveTransition === 'down' ? -200 : 200,
          opacity: 0,
          ease: Power2.easeInOut,
          onComplete: done
        });
      },
      onEnter(el: Element, done: () => void) {
        gsap.fromTo(
          el.querySelector('main'),
          {
            yPercent: useBioTransition().enterTransition === 'up' ? 200 : -200,
            opacity: 0
          },
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.5,
            onComplete: done,
            ease: Power2.easeInOut
          }
        );
      }
    }
  });
</script>

<template>
  <nuxt-layout>
    <div
      class="pointer-events-none h-full flex md:flex-row flex-col-reverse gap-x-3">
      <BalanceAnimation class="w-full" :key="uuid" />
      <div class="self-center">
        <p font="medium" px-2 text="champagne md:xl md center" max-w-5xl>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          euismod, nisi eu consectetur consectetur,
        </p>
      </div>
    </div>
  </nuxt-layout>
</template>
