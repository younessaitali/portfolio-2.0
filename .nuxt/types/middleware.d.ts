import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "/home/youness/dev/portfolio-2.0/node_modules/.pnpm/nuxt@3.0.0-rc.5/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}