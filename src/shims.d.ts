/* eslint-disable  */
/**
 * Extends the browser window object
 */
declare interface Window {}

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
