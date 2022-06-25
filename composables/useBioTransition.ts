import { acceptHMRUpdate, defineStore } from 'pinia';

export const useBioTransition = defineStore('bio', () => {
  const route = useRoute();
  const router = useRouter();

  type TransitionType = 'up' | 'down';

  let enterTransition = $ref<TransitionType>('up');
  let leaveTransition = $ref<TransitionType>('down');

  const bio = $ref<HTMLElement | null>(null);

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

  const activeLinkIndex = $computed(() => {
    const linkIndex = bioLinks.findIndex((link) => link.isActive);
    if (linkIndex === -1) return 0;

    return linkIndex;
  });

  let uuid = $ref<string>('');

  const randomUid = () => {
    return (
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
    );
  };

  useNavigation({
    element: bio,
    next: () => {
      enterTransition = 'up';
      leaveTransition = 'down';
      console.log('next');
      uuid = randomUid();
      const index = (activeLinkIndex + 1 + bioLinks.length) % bioLinks.length;
      const link = bioLinks[index];
      router.push(link.path);
    },
    prev: () => {
      enterTransition = 'down';
      leaveTransition = 'up';
      console.log('prev');
      uuid = randomUid();
      const index = (activeLinkIndex - 1 + bioLinks.length) % bioLinks.length;
      const link = bioLinks[index];
      router.push(link.path);
    }
  });

  // const pageTransition = $computed(() => {
  //   return {
  //     onLeave(el: Element, done: () => void) {
  //       gsap.to(el.querySelector('main'), {
  //         duration: 0.5,
  //         yPercent: leaveTransition === 'down' ? -200 : 200,

  //         opacity: 0,
  //         ease: Power2.easeInOut,
  //         onComplete: done
  //       });
  //     },

  //     onEnter(el: Element, done: () => void) {
  //       gsap.fromTo(
  //         el.querySelector('main'),
  //         {
  //           yPercent: enterTransition === 'up' ? 200 : -200,

  //           opacity: 0
  //         },
  //         {
  //           yPercent: 0,
  //           opacity: 1,
  //           duration: 0.5,
  //           onComplete: done,
  //           ease: Power2.easeInOut
  //         }
  //       );
  //     }
  //   };
  // });

  watch(
    route,
    () => {
      bioLinks.forEach((link) => {
        link.isActive = link.path === route.path;
      });
    },
    { immediate: true, deep: true }
  );

  return { bioLinks, bio, leaveTransition, enterTransition, uuid };
});

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useBioTransition, import.meta.hot));
