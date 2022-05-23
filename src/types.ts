import type { ViteSSGContext } from 'vite-ssg';
import { Ref, ComponentPublicInstance } from 'vue';
export type UserModule = (ctx: ViteSSGContext) => void;

export type MaybeRef<T> = T | Ref<T>;
export type VueInstance = ComponentPublicInstance;

export type MaybeElementRef = MaybeRef<
  HTMLElement | SVGElement | VueInstance | undefined | null
>;
