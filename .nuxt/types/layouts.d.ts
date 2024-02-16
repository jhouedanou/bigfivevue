import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "contact-layout" | "contenu-realisations" | "solutions-layout" | "contenu" | "contenu-alt"
declare module "C:/Users/ASUS ROG/Documents/bigfivevue/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}