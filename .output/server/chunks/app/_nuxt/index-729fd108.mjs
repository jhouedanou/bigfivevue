import { _ as __nuxt_component_0$2 } from './nuxt-link-744fccd2.mjs';
import { ref, reactive, watchEffect, mergeProps, unref, useSSRContext, withCtx, createTextVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { _ as __nuxt_component_0$1 } from './Logo-bd32a73e.mjs';
import { _ as _export_sfc, u as useHead } from '../server.mjs';
import 'ufo';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'vue-router';
import 'h3';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'defu';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'klona';
import 'ohash';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'http-graceful-shutdown';

const _sfc_main$1 = {
  __name: "Menu",
  __ssrInlineRender: true,
  setup(__props) {
    const state = reactive({
      menus: []
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0$2;
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
      var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2;
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
      const _component_Menu = __nuxt_component_0;
      const _component_Logo = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "lagence",
        class: "container-fluid"
      }, _attrs))} data-v-7d35072d><div class="row" data-v-7d35072d><div id="sidebar" class="col-3" data-v-7d35072d>`);
      _push(ssrRenderComponent(_component_Menu, null, null, _parent));
      _push(ssrRenderComponent(_component_Logo, { id: 2 }, null, _parent));
      _push(`</div><div class="col-9 primary-bg vh-100" data-v-7d35072d><div class="swiper" data-v-7d35072d><div class="swiper-wrapper" data-v-7d35072d><div id="slide1" class="swiper-slide" data-v-7d35072d><h3 data-v-7d35072d>${ssrInterpolate((_a2 = (_b = (_a = state.agence) == null ? void 0 : _a.slide1) == null ? void 0 : _b.title) != null ? _a2 : "")}</h3><p data-v-7d35072d>${(_b2 = (_d = (_c = state.agence) == null ? void 0 : _c.slide1) == null ? void 0 : _d.soustitre) != null ? _b2 : ""}</p><h3 data-v-7d35072d>${ssrInterpolate((_c2 = (_f = (_e = state.agence) == null ? void 0 : _e.slide1) == null ? void 0 : _f.contenu) != null ? _c2 : "")}</h3></div><div id="slide2" class="swiper-slide" data-v-7d35072d><div class="row slide-inner" data-v-7d35072d><!--[-->`);
      ssrRenderList((_d2 = (_g = state.agence) == null ? void 0 : _g.slide2) != null ? _d2 : [], (slide) => {
        var _a3, _b3, _c3;
        _push(`<div class="col-4" data-v-7d35072d><img${ssrRenderAttr("src", ("getIconPath" in _ctx ? _ctx.getIconPath : unref(getIconPath))((_a3 = slide.img) != null ? _a3 : ""))} alt="" data-v-7d35072d><h3 data-v-7d35072d>${ssrInterpolate((_b3 = slide.title) != null ? _b3 : "")}</h3><p data-v-7d35072d>${(_c3 = slide.content) != null ? _c3 : ""}</p></div>`);
      });
      _push(`<!--]--></div></div><div id="slide3" class="swiper-slide" data-v-7d35072d><p data-v-7d35072d>${(_e2 = (_h = state.agence) == null ? void 0 : _h.introslide3) != null ? _e2 : ""}</p><div id="swide" data-v-7d35072d><!--[-->`);
      ssrRenderList((_f2 = (_i = state.agence) == null ? void 0 : _i.slide3) != null ? _f2 : [], (item) => {
        _push(`<div data-v-7d35072d><h3 data-v-7d35072d>${ssrInterpolate(item.Id)}. ${ssrInterpolate(item.titre)}</h3><h4 data-v-7d35072d>${ssrInterpolate(item.nom)}</h4></div>`);
      });
      _push(`<!--]--></div></div><div id="slide4" class="swiper-slide" data-v-7d35072d><ul data-v-7d35072d><!--[-->`);
      ssrRenderList((_g2 = (_j = state.agence) == null ? void 0 : _j.slide4) != null ? _g2 : [], (item) => {
        _push(`<li data-v-7d35072d>${ssrInterpolate(item.content)}</li>`);
      });
      _push(`<!--]--></ul></div><div id="slide5" class="swiper-slide" data-v-7d35072d><div id="mouf" data-v-7d35072d>${(_h2 = (_k = state.agence) == null ? void 0 : _k.slide5) != null ? _h2 : ""}</div></div></div><div class="swiper-pagination" data-v-7d35072d></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/agence/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7d35072d"]]);

export { index as default };
//# sourceMappingURL=index-729fd108.mjs.map
