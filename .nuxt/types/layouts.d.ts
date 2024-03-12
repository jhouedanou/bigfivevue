import { ComputedRef, MaybeRef } from 'vue'
export type LayoutKey = "contact-layout" | "contenu-realisations" | "solutions-layout" | "contenu" | "contenu-alt" | "contenu-big-city"
declare module "../../node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: MaybeRef<LayoutKey | false> | ComputedRef<LayoutKey | false>
  }
}