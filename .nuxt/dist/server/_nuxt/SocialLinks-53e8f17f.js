import { reactive, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import "axios";
import { _ as _export_sfc } from "../server.mjs";
const SocialLinks_vue_vue_type_style_index_0_scoped_a589815f_lang = "";
const _sfc_main = {
  __name: "SocialLinks",
  __ssrInlineRender: true,
  setup(__props) {
    const state = reactive({
      socialLinks: []
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ id: "menureso" }, _attrs))} data-v-a589815f><ul id="lesros" class="d-flex flex-row justify-content-end" data-v-a589815f><!--[-->`);
      ssrRenderList(state.socialLinks, (link) => {
        _push(`<li data-v-a589815f><a${ssrRenderAttr("href", link.url)} target="_blank" data-v-a589815f><img${ssrRenderAttr("src", link.icon)}${ssrRenderAttr("alt", link.platform)} data-v-a589815f></a></li>`);
      });
      _push(`<!--]--></ul></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SocialLinks.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a589815f"]]);
export {
  __nuxt_component_2 as _
};
//# sourceMappingURL=SocialLinks-53e8f17f.js.map
