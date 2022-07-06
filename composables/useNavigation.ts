import { MaybeRef, noop } from '@vueuse/shared';
import { SwipeDirection } from '@vueuse/core';

export interface useNavigationOptions {
    /**
     *
     * element to listen to scroll events on
     */

    element?: MaybeRef<
        HTMLElement | SVGElement | Window | Document | null | undefined
    >;

    /**
     *  trigger when scrolling down | arrow down |arrow right |  swipe right
     */
    next?: (e?: Event) => void;
    /**
     *  trigger when scrolling up | arrow up |arrow left |  swipe left
     */
    prev?: (e?: Event) => void;

    /**
     * key navigation delay
     * @default 100
     */
    keyStrokeDelay?: number;
}

export const useNavigation = (options: useNavigationOptions = {}) => {
    const { element, next = noop, prev = noop, keyStrokeDelay = 100 } = options;

    onKeyStroke(
        'ArrowLeft',
        useDebounceFn(() => {
            prev();
        }, keyStrokeDelay)
    );
    onKeyStroke(
        'ArrowRight',
        useDebounceFn(() => {
            next();
        }, keyStrokeDelay)
    );
    onKeyStroke(
        'ArrowUp',
        useDebounceFn(() => {
            prev();
        }, keyStrokeDelay)
    );
    onKeyStroke(
        'ArrowDown',
        useDebounceFn(() => {
            next();
        }, keyStrokeDelay)
    );

    if (element) {
        useWheel(element, {
            onScroll: ({ directions: { bottom, top }, e }) => {
                if (bottom) next(e);
                if (top) prev(e);
            }
        });
        useSwipe(element, {
            onSwipeEnd(e, direction) {
                if (direction === SwipeDirection.RIGHT) next(e);
                if (direction === SwipeDirection.LEFT) prev(e);
            },
            threshold: 50
        });
    }
};
