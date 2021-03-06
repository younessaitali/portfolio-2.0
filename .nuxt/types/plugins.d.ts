// Generated by Nuxt'
import type { Plugin } from '#app'

type Decorate<T extends Record<string, any>> = { [K in keyof T as K extends string ? `$${K}` : never]: T[K] }

type InjectionType<A extends Plugin> = A extends Plugin<infer T> ? Decorate<T> : unknown

type NuxtAppInjections = 
  InjectionType<typeof import("../components.plugin").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.0.0-rc.5/node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.0.0-rc.5/node_modules/nuxt/dist/head/runtime/plugin").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.0.0-rc.5/node_modules/nuxt/dist/pages/runtime/router").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/@nuxt+content@2.0.1/node_modules/@nuxt/content/dist/runtime/plugin").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/@nuxtjs+color-mode@3.1.4/node_modules/@nuxtjs/color-mode/dist/runtime/plugin.server").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/@nuxtjs+color-mode@3.1.4/node_modules/@nuxtjs/color-mode/dist/runtime/plugin.client").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/@pinia+nuxt@0.3.0_typescript@4.7.4/node_modules/@pinia/nuxt/dist/runtime/plugin.vue3").default> &
  InjectionType<typeof import("../unocss").default> &
  InjectionType<typeof import("../../plugins/__typed-router").default> &
  InjectionType<typeof import("../../plugins/underLineDirective").default>

declare module '#app' {
  interface NuxtApp extends NuxtAppInjections { }
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties extends NuxtAppInjections { }
}

export { }
