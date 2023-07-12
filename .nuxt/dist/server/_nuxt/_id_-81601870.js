import { _ as __nuxt_component_0 } from "./nuxt-link-7a607302.js";
import { ref, computed, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import "axios";
import { useRoute } from "vue-router";
import { _ as _export_sfc } from "../server.mjs";
import "ufo";
import "hookable";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "h3";
import "devalue";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "destr";
import "klona";
import "@yeger/vue-masonry-wall";
import "defu";
const _id__vue_vue_type_style_index_0_scoped_dd6b1ee3_lang = "";
const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const realisations = ref([]);
    const route = useRoute();
    const matchingRealisation = computed(() => {
      const filterValue = route.fullPath.substring("/realisations/".length);
      return realisations.value.find((realisation) => realisation.lien === filterValue);
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<!--[--><div data-v-dd6b1ee3>`);
      if (matchingRealisation.value) {
        _push(`<div id="pargrapheIntro" data-v-dd6b1ee3><h1 data-v-dd6b1ee3>${ssrInterpolate(matchingRealisation.value.client)}</h1><div data-v-dd6b1ee3>${matchingRealisation.value.description}</div><div id="galerie" class="container" data-v-dd6b1ee3><div class="grid-wrapper" data-v-dd6b1ee3><!--[-->`);
        ssrRenderList((_a = matchingRealisation.value) == null ? void 0 : _a.galerie, (image, index) => {
          _push(`<div class="element grid-item" data-v-dd6b1ee3><img${ssrRenderAttr("src", image)} alt="Image" class="img-fluid" data-v-dd6b1ee3></div>`);
        });
        _push(`<!--]--></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/realisations",
        class: "button"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Réalisations`);
          } else {
            return [
              createTextVNode("Réalisations")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/realisations/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-dd6b1ee3"]]);
export {
  _id_ as default
};
//# sourceMappingURL=_id_-81601870.js.map
