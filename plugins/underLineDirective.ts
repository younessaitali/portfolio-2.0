export default defineNuxtPlugin((nuxtApp) => {
    const animationOut = (el: HTMLElement | undefined) => {
        if (!el || !el.classList) return;

        el.classList.add('underline-out');

        setTimeout(() => {
            el.classList.remove('underline-out');
        }, 300);
    };

    const elementIsActive = (el: HTMLElement | undefined, isActive = false) => {
        if (!el) return;

        if (!isActive && el.classList.contains('after:translate-x-0')) {
            animationOut(el);
            el.classList.remove('after:translate-x-0');
        } else if (isActive && !el.classList.contains('after:translate-x-0')) {
            el.classList.add('after:translate-x-0');
        }
    };

    nuxtApp.vueApp.directive('underline-animation', {
        beforeMount(el, binding: { value: { isActive: boolean } | undefined }) {
            const { value } = binding;
            el.classList.add('underline-enter');

            elementIsActive(el, value?.isActive ?? false);
            useEventListener(el, 'mouseleave', () => {
                animationOut(el);
            });
        },

        updated(el, binding: { value: { isActive: false } | undefined }) {
            const { value } = binding;
            el.classList.add('underline-enter');
            elementIsActive(el, value?.isActive ?? false);
        }
    });
});
