export default defineNuxtRouteMiddleware((to, from) => {
  const animationRoutes = ['/', '/balance', '/build', '/fun', '/support'];
  const { setAnimaLeaveOnRouteChange, setAnimateEnterOnRouteChange } =
    useBioTransition();

  if (!animationRoutes.includes(from.path)) {
    setAnimateEnterOnRouteChange(false);
  } else {
    setAnimateEnterOnRouteChange(true);
  }

  if (!animationRoutes.includes(to.path)) {
    setAnimaLeaveOnRouteChange(false);
  } else {
    setAnimaLeaveOnRouteChange(true);
  }
});
