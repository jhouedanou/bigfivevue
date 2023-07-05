import { ssrRenderAttrs } from 'file://C:/Users/ASUS%20ROG/Documents/bigfivevue/node_modules/vue/server-renderer/index.mjs';
import { useSSRContext } from 'file://C:/Users/ASUS%20ROG/Documents/bigfivevue/node_modules/vue/index.mjs';
import { _ as _export_sfc } from '../server.mjs';
import 'file://C:/Users/ASUS%20ROG/Documents/bigfivevue/node_modules/ofetch/dist/node.mjs';
import 'file://C:/Users/ASUS%20ROG/Documents/bigfivevue/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/ASUS%20ROG/Documents/bigfivevue/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/ASUS%20ROG/Documents/bigfivevue/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://C:/Users/ASUS%20ROG/Documents/bigfivevue/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/ASUS%20ROG/Documents/bigfivevue/node_modules/ufo/dist/index.mjs';
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

const _sfc_main = {
  name: "SolibraPage"
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2>Solibra Page</h2></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/realisations/solibra/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-47054cd4.mjs.map
