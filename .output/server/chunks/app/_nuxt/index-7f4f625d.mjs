import { _ as __nuxt_component_0 } from './Logo-bd32a73e.mjs';
import { useSSRContext, reactive, watchEffect, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc, u as useHead } from '../server.mjs';
import './nuxt-link-744fccd2.mjs';
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
  __name: "SocialLinks",
  __ssrInlineRender: true,
  setup(__props) {
    const state = reactive({
      socialLinks: []
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ id: "menureso" }, _attrs))} data-v-f3ee2726><ul id="lesros" class="d-flex flex-row justify-content-end" data-v-f3ee2726><!--[-->`);
      ssrRenderList(state.socialLinks, (link) => {
        _push(`<li data-v-f3ee2726><a${ssrRenderAttr("href", link.url)} target="_blank" data-v-f3ee2726><img${ssrRenderAttr("src", link.icon)}${ssrRenderAttr("alt", link.platform)} data-v-f3ee2726></a></li>`);
      });
      _push(`<!--]--></ul></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SocialLinks.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const SocialLinks = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-f3ee2726"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const state = reactive({
      logoAltText: "",
      sidebarText: "",
      logo: "",
      sloganbigfive: "",
      metadesc: ""
    });
    watchEffect(() => {
      useHead({
        title: state.homepageTitle,
        // Use new variable
        meta: [
          {
            hid: "description",
            name: "description",
            content: state.metadesc
          },
          // Open Graph Tags
          {
            property: "og:title",
            content: state.homepageTitle
          },
          {
            property: "og:description",
            content: state.metadesc
          }
        ]
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Logo = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "homewrapper",
        class: "container-fluid d-flex align-items-center flex-column justify-content-center vh-100 w-100"
      }, _attrs))} data-v-19b0303b><div id="ontwo" class="row w-100" data-v-19b0303b><div id="main" class="col-12 d-flex flex-column justify-content-center align-items-center" data-v-19b0303b>`);
      _push(ssrRenderComponent(_component_Logo, { id: 1 }, null, _parent));
      _push(`<h1 data-v-19b0303b>${ssrInterpolate(state.sloganbigfive)}</h1>`);
      _push(ssrRenderComponent(SocialLinks, null, null, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-19b0303b"]]);

export { index as default };
//# sourceMappingURL=index-7f4f625d.mjs.map
