import { _ as __nuxt_component_0 } from "./Logo-bd32a73e.js";
import "./index-e12b288f.js";
import { reactive, mergeProps, useSSRContext, watchEffect } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import "axios";
import { _ as _export_sfc, u as useHead } from "../server.mjs";
import "./nuxt-link-744fccd2.js";
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
const SocialLinks_vue_vue_type_style_index_0_scoped_cf8b40db_lang = "";
const _sfc_main$1 = {
  __name: "SocialLinks",
  __ssrInlineRender: true,
  setup(__props) {
    const state = reactive({
      socialLinks: []
    });
    const getIconPath = (iconPath) => {
      return `/${iconPath}`;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ id: "menureso" }, _attrs))} data-v-cf8b40db><ul id="lesros" class="d-flex flex-row justify-content-end" data-v-cf8b40db><!--[-->`);
      ssrRenderList(state.socialLinks, (link) => {
        _push(`<li data-v-cf8b40db><a${ssrRenderAttr("href", link.url)} target="_blank" data-v-cf8b40db><img${ssrRenderAttr("src", getIconPath(link.icon))}${ssrRenderAttr("alt", link.platform)} data-v-cf8b40db></a></li>`);
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
const SocialLinks = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-cf8b40db"]]);
const index_vue_vue_type_style_index_0_scoped_1e9845a7_lang = "";
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
      }, _attrs))} data-v-1e9845a7><div id="ontwo" class="row w-100" data-v-1e9845a7><div id="main" class="col-12 d-flex flex-column justify-content-center align-items-center" data-v-1e9845a7>`);
      _push(ssrRenderComponent(_component_Logo, { id: 1 }, null, _parent));
      _push(`<h1 data-v-1e9845a7>${ssrInterpolate(state.sloganbigfive)}</h1>`);
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
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1e9845a7"]]);
export {
  index as default
};
//# sourceMappingURL=index-42d51235.js.map
