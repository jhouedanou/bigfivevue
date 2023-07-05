import { _ as __nuxt_component_0 } from './Logo-bd32a73e.mjs';
import { useSSRContext, reactive, watchEffect, mergeProps } from 'file://C:/Users/ASUS%20ROG/Documents/bigfivevue/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'file://C:/Users/ASUS%20ROG/Documents/bigfivevue/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc, u as useHead } from '../server.mjs';
import './nuxt-link-744fccd2.mjs';
import 'file://C:/Users/ASUS%20ROG/Documents/bigfivevue/node_modules/ufo/dist/index.mjs';
import 'file://C:/Users/ASUS%20ROG/Documents/bigfivevue/node_modules/ofetch/dist/node.mjs';
import 'file://C:/Users/ASUS%20ROG/Documents/bigfivevue/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/ASUS%20ROG/Documents/bigfivevue/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/ASUS%20ROG/Documents/bigfivevue/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://C:/Users/ASUS%20ROG/Documents/bigfivevue/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/ASUS%20ROG/Documents/bigfivevue/node_modules/@unhead/ssr/dist/index.mjs';
import 'file://C:/Users/ASUS%20ROG/Documents/bigfivevue/node_modules/unhead/dist/index.mjs';
import 'file://C:/Users/ASUS%20ROG/Documents/bigfivevue/node_modules/@unhead/shared/dist/index.mjs';
import 'file://C:/Users/ASUS%20ROG/Documents/bigfivevue/node_modules/defu/dist/defu.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file://C:/Users/ASUS%20ROG/Documents/bigfivevue/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file://C:/Users/ASUS%20ROG/Documents/bigfivevue/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/ASUS%20ROG/Documents/bigfivevue/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://C:/Users/ASUS%20ROG/Documents/bigfivevue/node_modules/scule/dist/index.mjs';
import 'file://C:/Users/ASUS%20ROG/Documents/bigfivevue/node_modules/klona/dist/index.mjs';
import 'file://C:/Users/ASUS%20ROG/Documents/bigfivevue/node_modules/ohash/dist/index.mjs';
import 'file://C:/Users/ASUS%20ROG/Documents/bigfivevue/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Users/ASUS%20ROG/Documents/bigfivevue/node_modules/unstorage/drivers/fs.mjs';
import 'file://C:/Users/ASUS%20ROG/Documents/bigfivevue/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/Users/ASUS%20ROG/Documents/bigfivevue/node_modules/pathe/dist/index.mjs';

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
