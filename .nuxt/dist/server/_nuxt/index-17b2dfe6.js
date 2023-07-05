import { _ as __nuxt_component_0$1 } from "./nuxt-link-744fccd2.js";
import { reactive, mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext, ref, watchEffect, unref } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import "axios";
import { _ as __nuxt_component_0$2 } from "./Logo-bd32a73e.js";
import "./index-e12b288f.js";
import "swiper/bundle";
import { _ as _export_sfc, u as useHead } from "../server.mjs";
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
import "defu";
const _sfc_main$1 = {
  __name: "Menu",
  __ssrInlineRender: true,
  setup(__props) {
    const state = reactive({
      menus: []
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "menucontainer" }, _attrs))}><ul id="menulinks"><!--[-->`);
      ssrRenderList(state.menuLinks, (link) => {
        _push(`<li>`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: link.url
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(link.nom)}`);
            } else {
              return [
                createTextVNode(toDisplayString(link.nom), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Menu.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$1;
const getIconPath = (iconPath) => {
  return `/${iconPath}`;
};
const swiperBundle_min = "";
const index_vue_vue_type_style_index_0_scoped_a5e06e86_lang = "";
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
      const _component_Menu = __nuxt_component_0;
      const _component_Logo = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "lagence",
        class: "container-fluid"
      }, _attrs))} data-v-a5e06e86><div class="row" data-v-a5e06e86><div id="sidebar" class="col-3" data-v-a5e06e86>`);
      _push(ssrRenderComponent(_component_Menu, null, null, _parent));
      _push(ssrRenderComponent(_component_Logo, { id: 2 }, null, _parent));
      _push(`</div><div class="col-9 primary-bg vh-100" data-v-a5e06e86><div class="swiper" data-v-a5e06e86><div class="swiper-wrapper" data-v-a5e06e86><div id="slide1" class="swiper-slide" data-v-a5e06e86><h3 data-v-a5e06e86>${ssrInterpolate(((_b = (_a = state.agence) == null ? void 0 : _a.slide1) == null ? void 0 : _b.title) ?? "")}</h3><p data-v-a5e06e86>${((_d = (_c = state.agence) == null ? void 0 : _c.slide1) == null ? void 0 : _d.soustitre) ?? ""}</p><h3 data-v-a5e06e86>${ssrInterpolate(((_f = (_e = state.agence) == null ? void 0 : _e.slide1) == null ? void 0 : _f.contenu) ?? "")}</h3></div><div id="slide2" class="swiper-slide" data-v-a5e06e86><div class="row slide-inner" data-v-a5e06e86><!--[-->`);
      ssrRenderList(((_g = state.agence) == null ? void 0 : _g.slide2) ?? [], (slide) => {
        _push(`<div class="col-4" data-v-a5e06e86><img${ssrRenderAttr("src", ("getIconPath" in _ctx ? _ctx.getIconPath : unref(getIconPath))(slide.img ?? ""))} alt="" data-v-a5e06e86><h3 data-v-a5e06e86>${ssrInterpolate(slide.title ?? "")}</h3><p data-v-a5e06e86>${slide.content ?? ""}</p></div>`);
      });
      _push(`<!--]--></div></div><div id="slide3" class="swiper-slide" data-v-a5e06e86><p data-v-a5e06e86>${((_h = state.agence) == null ? void 0 : _h.introslide3) ?? ""}</p><div id="swide" data-v-a5e06e86><!--[-->`);
      ssrRenderList(((_i = state.agence) == null ? void 0 : _i.slide3) ?? [], (item) => {
        _push(`<div data-v-a5e06e86><h3 data-v-a5e06e86>${ssrInterpolate(item.Id)}. ${ssrInterpolate(item.titre)}</h3><h4 data-v-a5e06e86>${ssrInterpolate(item.nom)}</h4></div>`);
      });
      _push(`<!--]--></div></div><div id="slide4" class="swiper-slide" data-v-a5e06e86><ul data-v-a5e06e86><!--[-->`);
      ssrRenderList(((_j = state.agence) == null ? void 0 : _j.slide4) ?? [], (item) => {
        _push(`<li data-v-a5e06e86>${ssrInterpolate(item.content)}</li>`);
      });
      _push(`<!--]--></ul></div><div id="slide5" class="swiper-slide" data-v-a5e06e86><div id="mouf" data-v-a5e06e86>${((_k = state.agence) == null ? void 0 : _k.slide5) ?? ""}</div></div></div><div class="swiper-pagination" data-v-a5e06e86></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/agence/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a5e06e86"]]);
export {
  index as default
};
//# sourceMappingURL=index-17b2dfe6.js.map
