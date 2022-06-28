import { acceptHMRUpdate, defineStore } from 'pinia';
import { gsap, Power2 } from 'gsap';
import { MaybeRef } from '@vueuse/shared';
export const useBioTransition = defineStore('bio', () => {
  const route = useRoute();
  const router = useRouter();

  type TransitionType = 'up' | 'down';

  /**
   * page transition direction (up or down)
   */
  const enterTransition = ref<TransitionType>('up');
  const leaveTransition = ref<TransitionType>('down');

  /**
   * determine if to trigger animation or not when route changes
   */

  const animateLeaveOnRouteChange = ref(true);
  const animateEnterOnRouteChange = ref(false);

  const setAnimaLeaveOnRouteChange = (value: boolean) => {
    animateLeaveOnRouteChange.value = value;
  };
  const setAnimateEnterOnRouteChange = (value: boolean) => {
    animateEnterOnRouteChange.value = value;
  };

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
        enterTransition.value = 'up';
        leaveTransition.value = 'down';

        uuid.value = randomUid();

        const index =
          (activeLinkIndex.value + 1 + bioLinks.length) % bioLinks.length;
        const link = bioLinks[index];
        router.push(link.path);
      },
      prev: () => {
        enterTransition.value = 'down';
        leaveTransition.value = 'up';

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
    animateLeaveOnRouteChange: readonly(animateLeaveOnRouteChange)
  };
});

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useBioTransition, import.meta.hot));

export const pageTransition = {
  onLeave(el: Element, done: () => void) {
    const { leaveTransition, animateLeaveOnRouteChange } = useBioTransition();

    const animation = animateLeaveOnRouteChange
      ? {
          duration: 0.6,
          yPercent: leaveTransition === 'down' ? -100 : 100,
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
    const { enterTransition, animateEnterOnRouteChange } = useBioTransition();

    const yPercent = enterTransition === 'up' ? 100 : -100;

    const animation = animateEnterOnRouteChange
      ? {
          keyframes: {
            '0%': {
              yPercent,
              opacity: 0
            },
            '40%': {
              yPercent,
              opacity: 0
            },
            '100%': {
              yPercent: 0,
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
