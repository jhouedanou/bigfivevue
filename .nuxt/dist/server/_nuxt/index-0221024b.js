import { _ as __nuxt_component_0$2 } from "./nuxt-link-7a607302.js";
import { mergeProps, useSSRContext, ref, withCtx, createTextVNode, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import "axios";
import "swiper/bundle";
import { _ as __nuxt_component_0$1 } from "./Logo-6e6942f4.js";
import { _ as __nuxt_component_1$1 } from "./swiper-bundle.min-503c0432.js";
import { _ as __nuxt_component_2 } from "./SocialLinks-53e8f17f.js";
import { _ as _export_sfc } from "../server.mjs";
import "ufo";
import "hookable";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "vue-router";
import "h3";
import "devalue";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "destr";
import "klona";
import "@yeger/vue-masonry-wall";
import "defu";
const _sfc_main$3 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_Logo = __nuxt_component_0$1;
  const _component_Menu = __nuxt_component_1$1;
  const _component_SocialLinks = __nuxt_component_2;
  _push(`<div${ssrRenderAttrs(mergeProps({
    id: "header-alt",
    class: "container-fluid fixed"
  }, _attrs))}><div class="row"><div class="col-8">`);
  _push(ssrRenderComponent(_component_Logo, { id: 3 }, null, _parent));
  _push(`</div><div class="col-4 d-flex justify-content-end">`);
  _push(ssrRenderComponent(_component_Menu, null, null, _parent));
  _push(ssrRenderComponent(_component_SocialLinks, null, null, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeaderAlt.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}> le footer </div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_HeaderAlt = __nuxt_component_0;
  const _component_Footer = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ id: "pagewrapper" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_HeaderAlt, null, null, _parent));
  _push(`<main>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</main>`);
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/contenuAlt.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ContenuAltLayout = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const index_vue_vue_type_style_index_0_scoped_8175ba70_lang = "";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const swiperContainer = ref(null);
    const realisations = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$2;
      _push(ssrRenderComponent(ContenuAltLayout, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div id="realisationList" data-v-8175ba70${_scopeId}><div class="swiper" data-v-8175ba70${_scopeId}><div class="swiper-wrapper" data-v-8175ba70${_scopeId}><!--[-->`);
            ssrRenderList(realisations.value, (realisation) => {
              _push2(`<div${ssrRenderAttr("id", `slide-${realisation.id}`)} class="swiper-slide" data-v-8175ba70${_scopeId}><div class="realisationwrapper" data-v-8175ba70${_scopeId}><div class="cartouche" data-v-8175ba70${_scopeId}><span data-v-8175ba70${_scopeId}>${ssrInterpolate(realisation.client)}</span><h3 data-v-8175ba70${_scopeId}>${realisation.titre}</h3>`);
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: `/realisations/${realisation.lien}`,
                class: "btn"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Voir plus`);
                  } else {
                    return [
                      createTextVNode("Voir plus")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div><img${ssrRenderAttr("src", realisation.image)} alt="" class="img-fluid" data-v-8175ba70${_scopeId}></div></div>`);
            });
            _push2(`<!--]--></div><div class="swiper-pagination" data-v-8175ba70${_scopeId}></div></div></div>`);
          } else {
            return [
              createVNode("div", { id: "realisationList" }, [
                createVNode("div", {
                  class: "swiper",
                  ref_key: "swiperContainer",
                  ref: swiperContainer
                }, [
                  createVNode("div", { class: "swiper-wrapper" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(realisations.value, (realisation) => {
                      return openBlock(), createBlock("div", {
                        id: `slide-${realisation.id}`,
                        key: realisation.lien,
                        class: "swiper-slide"
                      }, [
                        createVNode("div", { class: "realisationwrapper" }, [
                          createVNode("div", { class: "cartouche" }, [
                            createVNode("span", null, toDisplayString(realisation.client), 1),
                            createVNode("h3", {
                              innerHTML: realisation.titre
                            }, null, 8, ["innerHTML"]),
                            createVNode(_component_NuxtLink, {
                              to: `/realisations/${realisation.lien}`,
                              class: "btn"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Voir plus")
                              ]),
                              _: 2
                            }, 1032, ["to"])
                          ]),
                          createVNode("img", {
                            src: realisation.image,
                            alt: "",
                            class: "img-fluid"
                          }, null, 8, ["src"])
                        ])
                      ], 8, ["id"]);
                    }), 128))
                  ]),
                  createVNode("div", { class: "swiper-pagination" })
                ], 512)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/realisations/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8175ba70"]]);
export {
  index as default
};
//# sourceMappingURL=index-0221024b.js.map
