import { acceptHMRUpdate, defineStore } from 'pinia';
import { gsap, Power2 } from 'gsap';
import { MaybeRef } from '@vueuse/shared';
import { breakpointsTailwind } from '@vueuse/core';

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
      next: () => {
        enterTransition.value = mdAndSmaller ? 'right' : 'up';
        leaveTransition.value = mdAndSmaller ? 'left' : 'down';

        uuid.value = randomUid();

        const index =
          (activeLinkIndex.value + 1 + bioLinks.length) % bioLinks.length;
        const link = bioLinks[index];
        router.push(link.path);
      },
      prev: () => {
        enterTransition.value = mdAndSmaller ? 'left' : 'down';
        leaveTransition.value = mdAndSmaller ? 'right' : 'up';

        uuid.value = randomUid();

        const index =
          (activeLinkIndex.value - 1 + bioLinks.length) % bioLinks.length;
        const link = bioLinks[index];
        router.push(link.path);
      }
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

export const pageTransition = {
  onLeave(el: Element, done: () => void) {
    const { leaveTransition, animateLeaveOnRouteChange, mdAndSmaller } =
      useBioTransition();

    const transitionAxis = mdAndSmaller ? 'xPercent' : 'yPercent';

    const percent =
      leaveTransition === 'down' || leaveTransition === 'left' ? 100 : -100;

    const animation = animateLeaveOnRouteChange
      ? {
          duration: 0.6,
          [transitionAxis]: percent,
          opacity: 0,
          ease: Power2.easeInOut,
          onComplete: done
        }
      : { duration: 0.7, opacity: 0, ease: Power2.easeOut, onComplete: done };

    gsap.to(el.querySelector('main'), {
      ...animation
    });
  },
  onEnter(el: Element, done: () => void) {
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
              opacity: 1,
              onComplete: done
            },
            ease: Power2.easeInOut
          },
          duration: 1.3
        }
      : {};

    gsap.to(el.querySelector('main'), {
      ...animation
    });
  }
};
