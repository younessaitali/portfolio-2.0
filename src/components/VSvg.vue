//component to take SVG and make full-screen and center content on screen
<script setup lang="ts">
  interface Props {
    position?:
      | 'top-left'
      | 'top-right'
      | 'bottom-left'
      | 'bottom-right'
      | 'center'
      | 'left'
      | 'right';
    scale?: number;
  }

  let x = ref(0);
  let y = ref(0);

  const { position = 'center', scale = 1 } = defineProps<Props>();

  const scene = ref<HTMLElement | null>(null);
  const { width, height } = useWindowSize();
  const { width: elementWidth, height: elementHeight } =
    useElementBounding(scene);

  const setPosition = () => {
    if (position === 'top-left') {
      x.value = 0;
      y.value = 0;
    }
    if (position === 'top-right') {
      x.value = width.value - elementWidth.value;
      y.value = 0;
    }

    if (position === 'bottom-left') {
      x.value = 0;
      y.value = height.value - elementHeight.value;
    }
    if (position === 'bottom-right') {
      x.value = width.value - elementWidth.value;
      y.value = height.value - elementHeight.value;
    }
    if (position === 'center') {
      x.value = width.value / 2 - elementWidth.value / 2;
      y.value = height.value / 2 - elementHeight.value / 2;
    }
    if (position === 'left') {
      x.value = width.value / 4 - elementWidth.value / 2;
      y.value = height.value / 2 - elementHeight.value / 2;
    }
    if (position === 'right') {
      x.value = (width.value * 3) / 4 - elementWidth.value / 2;
      y.value = height.value / 2 - elementHeight.value / 2;
    }
  };

  watchAtMost(
    elementWidth,
    () => {
      setPosition();
    },
    {
      count: 3
    }
  );

  watch(
    width,
    async () => {
      setPosition();
    },
    { immediate: true }
  );
</script>

<template>
  <div
    class="absolute grid grid-cols-4 grid-rows-4 inset-0 w-full h-full"></div>
  <svg
    class="absolute inset-0 w-full h-full"
    xmlns="http://www.w3.org/2000/svg"
    id="animation"
    :viewBox="`0 0 ${width} ${height}`">
    >
    <g ref="scene" :transform="`translate(${x} ${y}) scale(${scale})`">
      <slot />
    </g>
  </svg>
</template>

<style scoped>
  g {
    /* transform-origin: center ; */
  }
</style>
