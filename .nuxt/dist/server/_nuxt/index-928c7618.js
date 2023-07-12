import { _ as __nuxt_component_1 } from "./swiper-bundle.min-503c0432.js";
import { _ as __nuxt_component_0 } from "./Logo-6e6942f4.js";
import "./index-e12b288f.js";
import { ref, reactive, watchEffect, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import "axios";
import "swiper/bundle";
import { _ as _export_sfc, u as useHead } from "../server.mjs";
import "./nuxt-link-7a607302.js";
import "ufo";
import "hookable";
import "unhead";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "vue-router";
import "h3";
import "devalue";
import "@unhead/ssr";
import "@unhead/shared";
import "destr";
import "klona";
import "@yeger/vue-masonry-wall";
import "defu";
const index_vue_vue_type_style_index_0_scoped_2a0f884b_lang = "";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    ref(null);
    ref([]);
    const state = reactive({
      metadesc: "",
      pageTitle: "",
      agence: null
    });
    watchEffect(() => {
      useHead({
        title: state.pageTitle,
        meta: [
          {
            hid: "description",
            name: "description",
            content: state.metadesc
          },
          {
            property: "og:title",
            content: state.pageTitle
          },
          {
            property: "og:description",
            content: state.metadesc
          }
        ]
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
      const _component_Menu = __nuxt_component_1;
      const _component_Logo = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "lagence",
        class: "container-fluid"
      }, _attrs))} data-v-2a0f884b><div class="row" data-v-2a0f884b><div id="sidebar" class="col-3" data-v-2a0f884b>`);
      _push(ssrRenderComponent(_component_Menu, null, null, _parent));
      _push(ssrRenderComponent(_component_Logo, { id: 2 }, null, _parent));
      _push(`</div><div class="col-9 primary-bg vh-100" data-v-2a0f884b><div class="swiper" data-v-2a0f884b><div class="swiper-wrapper" data-v-2a0f884b><div id="slide1" class="swiper-slide" data-v-2a0f884b><h3 data-v-2a0f884b>${ssrInterpolate(((_b = (_a = state.agence) == null ? void 0 : _a.slide1) == null ? void 0 : _b.title) ?? "")}</h3><p data-v-2a0f884b>${((_d = (_c = state.agence) == null ? void 0 : _c.slide1) == null ? void 0 : _d.soustitre) ?? ""}</p><h3 data-v-2a0f884b>${ssrInterpolate(((_f = (_e = state.agence) == null ? void 0 : _e.slide1) == null ? void 0 : _f.contenu) ?? "")}</h3></div><div id="slide2" class="swiper-slide" data-v-2a0f884b><div class="row slide-inner" data-v-2a0f884b><!--[-->`);
      ssrRenderList(((_g = state.agence) == null ? void 0 : _g.slide2) ?? [], (slide) => {
        _push(`<div class="col-4" data-v-2a0f884b><img${ssrRenderAttr("src", _ctx.getIconPath(slide.img ?? ""))} alt="" data-v-2a0f884b><h3 data-v-2a0f884b>${ssrInterpolate(slide.title ?? "")}</h3><p data-v-2a0f884b>${slide.content ?? ""}</p></div>`);
      });
      _push(`<!--]--></div></div><div id="slide3" class="swiper-slide" data-v-2a0f884b><p data-v-2a0f884b>${((_h = state.agence) == null ? void 0 : _h.introslide3) ?? ""}</p><div id="swide" data-v-2a0f884b><!--[-->`);
      ssrRenderList(((_i = state.agence) == null ? void 0 : _i.slide3) ?? [], (item) => {
        _push(`<div data-v-2a0f884b><h3 data-v-2a0f884b>${ssrInterpolate(item.Id)}. ${ssrInterpolate(item.titre)}</h3><h4 data-v-2a0f884b>${ssrInterpolate(item.nom)}</h4></div>`);
      });
      _push(`<!--]--></div></div><div id="slide4" class="swiper-slide" data-v-2a0f884b><ul data-v-2a0f884b><!--[-->`);
      ssrRenderList(((_j = state.agence) == null ? void 0 : _j.slide4) ?? [], (item) => {
        _push(`<li data-v-2a0f884b>${ssrInterpolate(item.content)}</li>`);
      });
      _push(`<!--]--></ul></div><div id="slide5" class="swiper-slide" data-v-2a0f884b><div id="mouf" data-v-2a0f884b>${((_k = state.agence) == null ? void 0 : _k.slide5) ?? ""}</div></div></div><div class="swiper-pagination" data-v-2a0f884b></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/agence/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2a0f884b"]]);
export {
  index as default
};
//# sourceMappingURL=index-928c7618.js.map
