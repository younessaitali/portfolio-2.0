<script setup lang="ts">
    const svg = ref<SVGTextElement | null>(null);
    let width = ref(0);
    let height = ref(0);
    onMounted(() => {
        const svgElement = svg.value;
        if (svgElement) {
            width.value = svgElement.getBBox().width;
            height.value = svgElement.getBBox().height;
        }
    });
</script>

<template>
    <svg
        ref="svg"
        xmlns="http://www.w3.org/2000/svg"
        inline
        w-full
        h-full
        :viewBox="`0 0 ${width} ${height}`">
        <foreignObject v-if="$slots.html">
            <slot name="html" />
        </foreignObject>

        <text
            v-else
            x="50%"
            y="50%"
            dominant-baseline="middle"
            text-anchor="middle"
            paint-order="stroke"
            fill="none"
            stroke="#a6956e"
            stroke-miterlimit="10">
            <slot />
        </text>
    </svg>
</template>
