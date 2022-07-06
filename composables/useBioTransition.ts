import { acceptHMRUpdate, defineStore } from 'pinia';
import { gsap, Power2 } from 'gsap';
import { MaybeRef } from '@vueuse/shared';
import { breakpointsTailwind } from '@vueuse/core';
import { TransitionProps } from 'vue';

export const useBioTransition = defineStore('bio', () => {
    const route = useRoute();
    const router = useRouter();

    type TransitionType = 'up' | 'down' | 'left' | 'right';

    /**
     * page transition direction (up or down)
     */
    const enterTransition = ref<TransitionType>('up');
    const leaveTransition = ref<TransitionType>('down');

    /**
     * variables to  determine if to trigger animation or not when route changes
     */

    const animateLeaveOnRouteChange = ref(true);
    const animateEnterOnRouteChange = ref(false);

    const setAnimaLeaveOnRouteChange = (value: boolean) => {
        animateLeaveOnRouteChange.value = value;
    };
    const setAnimateEnterOnRouteChange = (value: boolean) => {
        animateEnterOnRouteChange.value = value;
    };

    /**
     *  variables to determine if  we are in mobile or desktop mode to change the animation direction from Y axis to X axis
     */

    const breakPoints = useBreakpoints(breakpointsTailwind);
    const mdAndSmaller = breakPoints.smaller('lg');

    const bioLinks = $ref([
        {
            label: 'introduction',
            path: '/',
            isActive: false
        },
        {
            label: 'build',
            path: '/build',
            isActive: false
        },
        {
            label: 'fun',
            path: '/fun',
            isActive: false
        },
        {
            label: 'balance',
            path: '/balance',
            isActive: false
        },
        {
            label: 'support',
            path: '/support',
            isActive: false
        }
    ]);

    const activeLinkIndex = computed(() => {
        const linkIndex = bioLinks.findIndex((link) => link.isActive);
        if (linkIndex === -1) return 0;
        return linkIndex;
    });

    /**
     *
     * random uuid to force component re-render when route changes
     */

    const uuid = ref<string>('');

    const randomUid = () => {
        return (
            Math.random().toString(36).substring(2, 15) +
            Math.random().toString(36).substring(2, 15)
        );
    };

    // i did use throttle here to prevent triggering route change multiple times when scrolling fast or using  laptop touchPad(trigger multiple scroll event when scrolling)

    const next = useThrottleFn(() => {
        enterTransition.value = mdAndSmaller ? 'right' : 'up';
        leaveTransition.value = mdAndSmaller ? 'left' : 'down';

        uuid.value = randomUid();

        const index =
            (activeLinkIndex.value + 1 + bioLinks.length) % bioLinks.length;
        const link = bioLinks[index];
        navigateTo({ path: link.path });
    }, 500);

    const prev = useThrottleFn(() => {
        enterTransition.value = mdAndSmaller ? 'left' : 'down';
        leaveTransition.value = mdAndSmaller ? 'right' : 'up';

        uuid.value = randomUid();

        const index =
            (activeLinkIndex.value - 1 + bioLinks.length) % bioLinks.length;
        const link = bioLinks[index];
        navigateTo({ path: link.path });
    }, 500);

    /**
     *
     * function to set init ref element to start detecting scroll and keystroke  events
     */

    const setNavigationElement = (
        el?: MaybeRef<
            HTMLElement | SVGElement | Window | Document | null | undefined
        >
    ) => {
        useNavigation({
            element: el,
            next,
            prev
        });
    };

    watch(
        route,
        () => {
            bioLinks.forEach((link) => {
                link.isActive = link.path === route.path;
            });
        },
        { immediate: true, deep: true }
    );

    return {
        bioLinks: readonly(bioLinks),
        leaveTransition: readonly(leaveTransition),
        enterTransition: readonly(enterTransition),
        uuid: readonly(uuid),
        setNavigationElement,
        setAnimaLeaveOnRouteChange,
        setAnimateEnterOnRouteChange,
        animateEnterOnRouteChange: readonly(animateEnterOnRouteChange),
        animateLeaveOnRouteChange: readonly(animateLeaveOnRouteChange),
        mdAndSmaller: readonly(mdAndSmaller)
    };
});

if (import.meta.hot)
    import.meta.hot.accept(acceptHMRUpdate(useBioTransition, import.meta.hot));

function disableNavigation(el: Element) {
    const scene = el.querySelector('#scene');
    scene?.classList.add('overflow-y-hidden', 'overflow-x-hidden');

    const disableScroll = (e: Event) => {
        e.preventDefault();
        return false;
    };

    const disableKeyBoardScroll = (e: Event) => {
        const keys = [
            'ArrowUp',
            'ArrowDown',
            'ArrowLeft',
            'ArrowRight',
            'End',
            'PageDown',
            'PageUp',
            'Home',
            ' '
        ];

        console.log('e');

        if (keys.includes((e as KeyboardEvent).key)) {
            e.preventDefault();
            return false;
        }
    };

    el.addEventListener('wheel', disableScroll, { passive: false });

    el.addEventListener('touchmove', disableScroll, { passive: false });

    document.addEventListener('keydown', disableKeyBoardScroll, {
        passive: false
    });

    const resetNavigation = (el: Element) => {
        return () => {
            scene?.classList.remove('overflow-y-hidden', 'overflow-x-hidden');
            el.removeEventListener('wheel', disableScroll);
            el.removeEventListener('touchmove', disableScroll);
            document.removeEventListener('keydown', disableKeyBoardScroll);
        };
    };

    return resetNavigation(el);
}

export const pageTransition: TransitionProps = {
    css: false,
    duration: {
        enter: 1.4,
        leave: 0.9
    },
    onLeave(el: Element, done: () => void) {
        const resetNavigation = disableNavigation(el);
        const mainElement = el.querySelector('main');

        const { leaveTransition, animateLeaveOnRouteChange, mdAndSmaller } =
            useBioTransition();

        // to change animation direction depending on screen size
        const transitionAxis = mdAndSmaller ? 'xPercent' : 'yPercent';

        const percent =
            leaveTransition === 'down' || leaveTransition === 'left' ? 80 : -80;

        const animation = animateLeaveOnRouteChange
            ? {
                  duration: 0.6,
                  [transitionAxis]: percent,
                  opacity: 0,
                  ease: Power2.easeInOut,
                  onComplete: () => {
                      resetNavigation();
                      done();
                  }
              }
            : {
                  duration: 0.7,
                  opacity: 0,
                  ease: Power2.easeOut,
                  onComplete: () => {
                      resetNavigation();
                      done();
                  }
              };

        gsap.to(mainElement, {
            ...animation,
            delay: 0.1
        });
    },
    onEnter(el: Element, done: () => void) {
        const resetNavigation = disableNavigation(el);
        const mainElement = el.querySelector('main');
        const { enterTransition, animateEnterOnRouteChange, mdAndSmaller } =
            useBioTransition();

        const transitionAxis = mdAndSmaller ? 'xPercent' : 'yPercent';

        const percent =
            enterTransition === 'up' || enterTransition === 'left' ? 100 : -100;

        const translation = {
            [transitionAxis]: percent
        };

        const animation = animateEnterOnRouteChange
            ? {
                  keyframes: {
                      '0%': {
                          ...translation,
                          opacity: 0
                      },
                      '40%': {
                          ...translation,
                          opacity: 0
                      },
                      '100%': {
                          [transitionAxis]: 0,
                          opacity: 1
                      },
                      ease: Power2.easeOut
                  },
                  onComplete: () => {
                      resetNavigation();
                      done();
                  },
                  duration: 1,
                  delay: 0.3
              }
            : {};

        gsap.to(mainElement, {
            ...animation
        });
    }
};
