import { reactive, unref, useSSRContext } from "vue";
import "hookable";
import { a as useRoute } from "../server.mjs";
import "destr";
import "devalue";
import "klona";
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderStyle } from "vue/server-renderer";
import "axios";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "vue-router";
import "h3";
import "ufo";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "@yeger/vue-masonry-wall";
import "defu";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const state = reactive({
      textespageContact: null,
      formFields: null
    });
    useRoute();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div id="contacts" class="container"><div class="row"><!--[-->`);
      ssrRenderList(unref(state).textespageContacts, (texte) => {
        _push(`<div class="col-3"><h2>${ssrInterpolate(texte.titre)}</h2><h4>${ssrInterpolate(texte.adresse)}</h4></div>`);
      });
      _push(`<!--]--></div></div><form action="https://public.herotofu.com/v1/1c419dc0-1cd8-11ee-b0a7-9f000c4c1540" method="post" accept-charset="UTF-8"><div><label for="name">Your Name</label><input name="Name" id="name" type="text" required></div><div><label for="email">Your Email</label><input name="Email" id="email" type="email" required></div><div><input type="submit" value="Envoyer un message"><div style="${ssrRenderStyle({ "text-indent": "-99999px", "white-space": "nowrap", "overflow": "hidden", "position": "absolute" })}" aria-hidden="true"><input type="text" name="_gotcha" tabindex="-1" autocomplete="off"></div></div></form></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-d3d3b015.js.map
