<template>
    <div
        class="overflow-hidden relative hidden sm:block w-full absolute px-2 h-30">
        <div
            ref="inner"
            class="transition-transform absolute flex h-full gap-x-3"
            aria-orientation="horizontal"
            role="tablist"
            :style="innerStyles">
            <button
                v-for="image in reactiveImages"
                :key="image"
                class="relative h-24 w-48 bg-white place-self-center rounded-md inline-flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                aria-controls="tabs-2-panel-1"
                role="tab"
                type="button">
                <span class="sr-only"> Angled view </span>
                <span class="absolute inset-0 rounded-md overflow-hidden">
                    <img
                        src="/m.jpg"
                        alt=""
                        class="w-full h-full object-center object-cover" />
                </span>
                <h3 text-6xl absolute text-red-500 text-center>{{ image }}</h3>
                <!-- Selected: "ring-indigo-500", Not Selected: "ring-transparent" -->
                <span
                    class="ring-transparent absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none"
                    aria-hidden="true"></span>
            </button>
        </div>
        <button class="absolute top-15 left-4" @click="prev">prev</button>
        <button class="absolute top-15 right-4" @click="next">next</button>
    </div>
</template>

<script lang="ts" setup>
    interface Props {
        images?: string[];
    }

    const { images = ['1', '2', '3', '4', '5', '6', '7', '8', '9'] } =
        defineProps<Props>();
    const reactiveImages = toReactive(images);
    const innerStyles = ref({});
    const step = ref('');
    const transitioning = ref(false);
    const inner = ref<HTMLDivElement | null>(null);

    const moveRight = () => {
        innerStyles.value = {
            transform: `translateX(${step.value})
                        translateX(-${step.value})`
        };
    };

    const moveLeft = () => {
        innerStyles.value = {
            transform: `translateX(-${step.value})
                          translateX(-${step.value})`
        };
    };

    const afterTransition = (callback: () => void) => {
        const listener = () => {
            callback();
            inner.value?.removeEventListener('transitionend', listener);
        };

        inner.value?.addEventListener('transitionend', listener);
    };

    const resetTranslate = () => {
        innerStyles.value = {
            transition: 'none',
            transform: `translateX(-${step.value})`
        };
    };

    const setStep = () => {
        const innerWidth = inner && (inner.value?.scrollWidth ?? 0);

        const totalCards = reactiveImages.length;
        step.value = `${innerWidth / totalCards}px`;
    };

    const next = () => {
        if (transitioning.value) return;
        transitioning.value = true;
        moveLeft();
        afterTransition(() => {
            const image = reactiveImages.shift() ?? '';
            reactiveImages.push(image);
            resetTranslate();
            transitioning.value = false;
        });
    };

    const prev = () => {
        if (transitioning.value) return;
        transitioning.value = true;
        moveRight();
        afterTransition(() => {
            const image = reactiveImages.pop() ?? '';
            reactiveImages.unshift(image);
            resetTranslate();
            transitioning.value = false;
        });
    };

    onMounted(() => {
        setStep();
        resetTranslate();
    });
</script>
