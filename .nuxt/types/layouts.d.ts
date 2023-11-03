import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "contact-layout" | "contenu-realisations" | "contenu" | "contenu-alt"
declare module "/Applications/MAMP/htdocs/bigfivevue/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}