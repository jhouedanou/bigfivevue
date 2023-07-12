import { _ as __nuxt_component_0 } from "./Logo-6e6942f4.js";
import "./index-e12b288f.js";
import { reactive, watchEffect, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import "axios";
import { _ as __nuxt_component_2 } from "./SocialLinks-53e8f17f.js";
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
const index_vue_vue_type_style_index_0_scoped_bb937851_lang = "";
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
      }, _attrs))} data-v-bb937851><div id="ontwo" class="row w-100" data-v-bb937851><div id="main" class="col-12 d-flex flex-column justify-content-center align-items-center" data-v-bb937851>`);
      _push(ssrRenderComponent(_component_Logo, { id: 1 }, null, _parent));
      _push(`<h1 data-v-bb937851>${ssrInterpolate(state.sloganbigfive)}</h1>`);
      _push(ssrRenderComponent(__nuxt_component_2, null, null, _parent));
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
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-bb937851"]]);
export {
  index as default
};
//# sourceMappingURL=index-b53e03f2.js.map
