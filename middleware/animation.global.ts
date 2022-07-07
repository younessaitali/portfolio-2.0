export default defineNuxtRouteMiddleware((to, from) => {
    const {
        setAnimaLeaveOnRouteChange,
        setAnimateEnterOnRouteChange,
        setEnterTransition,
        setLeaveTransition,
        mdAndSmaller,
        bioLinks
    } = useBioTransition();
    const animationRoutes = bioLinks.map((link) => link.path);

    const toIndex = animationRoutes.indexOf(to.path);
    const fromIndex = animationRoutes.indexOf(from.path);

    if (toIndex > -1 && fromIndex > -1) {
        if (
            (toIndex < fromIndex && toIndex !== 0) ||
            (fromIndex === 0 && toIndex === animationRoutes.length - 1) ||
            (toIndex === 0 && fromIndex === 1)
        ) {
            const direction = mdAndSmaller ? 'right' : 'up';
            setEnterTransition(direction);
            setLeaveTransition(direction);
        } else {
            const direction = mdAndSmaller ? 'left' : 'down';
            setEnterTransition(direction);
            setLeaveTransition(direction);
        }
    }

    if (fromIndex > -1) {
        setAnimateEnterOnRouteChange(true);
    } else {
        setAnimateEnterOnRouteChange(false);
    }

    if (toIndex > -1) {
        setAnimaLeaveOnRouteChange(true);
    } else {
        setAnimaLeaveOnRouteChange(false);
    }
});
