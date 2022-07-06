import { MaybeRef, noop } from '@vueuse/shared';

interface Directions {
    top: boolean;
    bottom: boolean;
}

interface onScrollParam {
    directions: Directions;
    e: WheelEvent;
}
export interface UseScrollOptions {
    /**
     * Throttle time for scroll event, it’s disabled by default.
     *
     * @default 200
     */
    throttle?: number;

    /**
     * Trigger it when scrolling.
     *
     */
    onScroll?: (param: onScrollParam) => void;

    /**
     * Listener options for scroll event.
     *
     * @default {capture: false, passive: true}
     */
    eventListenerOptions?: boolean | AddEventListenerOptions;
}

export function useWheel(
    element: MaybeRef<
        HTMLElement | SVGElement | Window | Document | null | undefined
    >,
    options: UseScrollOptions = {}
) {
    const {
        throttle = 200,
        onScroll = noop,

        eventListenerOptions = {
            capture: false,
            passive: false
        }
    } = options;

    const isScrolling = ref(false);

    const directions: Directions = reactive({
        top: false,
        bottom: false
    });

    if (element) {
        const onScrollEnd = useDebounceFn(() => {
            isScrolling.value = false;
            directions.top = false;
            directions.bottom = false;
        }, throttle);

        const onScrollHandler = (e: WheelEvent) => {
            const deltaY = e.deltaY;
            directions.top = deltaY < 0;
            directions.bottom = deltaY > 0;

            isScrolling.value = true;
            onScrollEnd();

            onScroll({ directions, e });
        };

        useEventListener(
            element,
            'wheel',
            throttle
                ? useThrottleFn(onScrollHandler, throttle)
                : onScrollHandler,
            eventListenerOptions
        );
    }

    return {
        isScrolling,
        directions
    };
}

export type UseScrollReturn = ReturnType<typeof useScroll>;
