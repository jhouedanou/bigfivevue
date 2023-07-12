import { _ as __nuxt_component_0 } from "./nuxt-link-7a607302.js";
import { reactive, mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import "axios";
const _sfc_main = {
  __name: "Menu",
  __ssrInlineRender: true,
  setup(__props) {
    const state = reactive({
      menus: []
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Menu.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main;
const swiperBundle_min = "";
export {
  __nuxt_component_1 as _
};
//# sourceMappingURL=swiper-bundle.min-503c0432.js.map
