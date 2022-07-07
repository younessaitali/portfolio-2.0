<script setup lang="ts">
    import { Expo, gsap, Power0 } from 'gsap';
    import { CustomEase } from 'gsap/CustomEase';
    const tl = gsap.timeline();

    onMounted(() => {
        tl.restart();

        tl.set('#support-rectangle', {
            clearProps: 'all'
        });
        tl.set('#support-square', {
            clearProps: 'all'
        });

        setTimeout(() => {
            tl.set('#support-rectangle', {
                transformOrigin: 'bottom center'
            });

            tl.set('#support-square', {
                transformOrigin: 'bottom center',
                xPercent: 160
            });
            tl.to(
                '#support-square',
                {
                    keyframes: {
                        '0%': { yPercent: 0, scaleY: 1 },
                        '10%': { yPercent: 0, scaleY: 0.7, rotate: 0 },
                        '50%': { yPercent: -70, scaleY: 1 },
                        '100%': { rotate: -18 }
                    },
                    duration: 0.7
                },
                'support'
            )
                .to(
                    '#support-rectangle',
                    {
                        keyframes: {
                            '0%': { yPercent: 0, scaleY: 1 },
                            '10%': { yPercent: 0, scaleY: 0.7, rotate: 0 },
                            '50%': { yPercent: -30, scaleY: 1 },
                            '100%': { rotate: 8 }
                        },
                        duration: 0.7
                    },
                    '<support'
                )
                .to(
                    '#support-rectangle',
                    {
                        keyframes: {
                            '0%': { yPercent: -30 },
                            '5%': { yPercent: 0, rotate: 8 },
                            '10%': { yPercent: -20, ease: Power0.easeOut },
                            '15%': {
                                yPercent: 6,
                                rotate: -10,
                                transformOrigin: 'bottom left',
                                ease: Power0.easeOut
                            },
                            '25%': {
                                yPercent: -10,
                                rotate: -10,
                                ease: Power0.easeInOut
                            },
                            '35%': {
                                rotate: 8,
                                yPercent: 13,
                                transformOrigin: 'bottom right',
                                ease: Power0.easeOut
                            },
                            '45%': { rotate: 15, ease: Power0.easeOut },
                            '85%': {
                                rotate: 52,
                                ease: CustomEase.create(
                                    'custom',
                                    'M0,0,C0.89,0.084,0.874,0.394,1,1'
                                )
                            },
                            '95%': { rotate: 40, ease: Expo.easeOut },
                            '100%': { rotate: 52, ease: Expo.easeIn }
                        },
                        duration: 2.5
                    },
                    '>support'
                )
                .to(
                    '#support-square',
                    {
                        keyframes: {
                            '0%': { yPercent: -70 },
                            '10%': { yPercent: 0, rotate: 0 },
                            '40%': {
                                rotate: 10,
                                xPercent: 160,
                                ease: Expo.easeOut
                            },
                            '90%': {
                                rotate: 20,
                                xPercent: 210,
                                ease: Expo.easeOut
                            },
                            '100%': {
                                rotate: 0,
                                xPercent: 47,
                                ease: Expo.easeOut
                            }
                        },
                        duration: 2.2
                    },
                    '<support'
                )
                .to('#support-square', {
                    keyframes: {
                        '50%': { xPercent: 90, ease: Expo.easeIn },
                        '100%': { xPercent: 10 }
                    },
                    duration: 0.8
                })
                .to(
                    '#support-rectangle',
                    {
                        keyframes: {
                            '25%': {
                                yPercent: 15,
                                rotate: 56,
                                ease: Expo.easeIn
                            },
                            '79%': {
                                yPercent: 27,
                                transformOrigin: 'bottom center'
                            },
                            '80%': {
                                rotate: 0,
                                yPercent: 27,
                                ease: CustomEase.create(
                                    'custom',
                                    'M0,0 C0.446,0 0.395,0.999 0.6,1 0.668,1 0.688,0.692 0.79,0.692 0.88,0.692 1,1 1,1 '
                                )
                            }
                        },
                        duration: 1.6
                    },
                    '<'
                )
                .to('#support-square', {
                    keyframes: {
                        '50%': { rotate: 90, yPercent: -200 },
                        '100%': {
                            xPercent: 180,
                            rotate: 180,
                            yPercent: -101
                        }
                    },
                    duration: 0.8
                })
                .repeat(-1)
                .repeatDelay(0.5);
        }, 500);
    });

    onBeforeUnmount(() => {
        tl.restart();
        tl.kill();
    });
</script>

<template>
    <svg xmlns="http://www.w3.org/2000/svg" id="animation" viewBox="0 0 5 50">
        <g id="support" transform="translate(-30 15)">
            <rect
                id="support-rectangle"
                width="14"
                height="32"
                fill="#78a300" />
            <rect
                id="support-square"
                x="25"
                y="19"
                width="13"
                height="13"
                class="dark:fill-white fill-sky-400" />
        </g>
    </svg>
</template>
