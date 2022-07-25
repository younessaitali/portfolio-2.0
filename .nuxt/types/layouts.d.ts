import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default" | "home"
declare module "/home/youness/dev/portfolio-2.0/node_modules/.pnpm/nuxt@3.0.0-rc.6/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}