import { _ as __nuxt_component_0$1 } from './nuxt-link-744fccd2.mjs';
import { useSSRContext, reactive, computed, mergeProps, withCtx, unref, openBlock, createBlock, createCommentVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';

const _sfc_main = {
  __name: "Logo",
  __ssrInlineRender: true,
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const state = reactive({
      logo: []
    });
    const selectedLogo = computed(() => {
      return state.logo.find((logo) => logo.id === props.id);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "logocontainer" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_nuxt_link, { to: "/agence" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(selectedLogo)) {
              _push2(`<img${ssrRenderAttr("src", unref(selectedLogo).src)} alt="Big Five Solutions" class="img-fluid"${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              unref(selectedLogo) ? (openBlock(), createBlock("img", {
                key: 0,
                src: unref(selectedLogo).src,
                alt: "Big Five Solutions",
                class: "img-fluid"
              }, null, 8, ["src"])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Logo.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main;

export { __nuxt_component_0 as _ };
//# sourceMappingURL=Logo-bd32a73e.mjs.map
