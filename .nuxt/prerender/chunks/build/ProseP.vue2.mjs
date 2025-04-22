import { ssrRenderAttrs, ssrRenderSlot } from 'file:///Users/emanuele/Workspace/colonnaemanuele.github.io/node_modules/vue/server-renderer/index.mjs';
import { useSSRContext } from 'file:///Users/emanuele/Workspace/colonnaemanuele.github.io/node_modules/vue/index.mjs';
import { _ as _export_sfc } from './server.mjs';
import 'file:///Users/emanuele/Workspace/colonnaemanuele.github.io/node_modules/hookable/dist/index.mjs';
import 'file:///Users/emanuele/Workspace/colonnaemanuele.github.io/node_modules/unctx/dist/index.mjs';
import 'file:///Users/emanuele/Workspace/colonnaemanuele.github.io/node_modules/h3/dist/index.mjs';
import 'file:///Users/emanuele/Workspace/colonnaemanuele.github.io/node_modules/ufo/dist/index.mjs';
import 'file:///Users/emanuele/Workspace/colonnaemanuele.github.io/node_modules/radix3/dist/index.mjs';
import 'file:///Users/emanuele/Workspace/colonnaemanuele.github.io/node_modules/defu/dist/defu.mjs';
import 'file:///Users/emanuele/Workspace/colonnaemanuele.github.io/node_modules/@iconify/vue/dist/iconify.mjs';
import 'file:///Users/emanuele/Workspace/colonnaemanuele.github.io/node_modules/klona/dist/index.mjs';
import '../_/renderer.mjs';
import 'file:///Users/emanuele/Workspace/colonnaemanuele.github.io/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/emanuele/Workspace/colonnaemanuele.github.io/node_modules/unhead/dist/server.mjs';
import 'file:///Users/emanuele/Workspace/colonnaemanuele.github.io/node_modules/unhead/dist/utils.mjs';
import '../nitro/nitro.mjs';
import 'file:///Users/emanuele/Workspace/colonnaemanuele.github.io/node_modules/destr/dist/index.mjs';
import 'file:///Users/emanuele/Workspace/colonnaemanuele.github.io/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/emanuele/Workspace/colonnaemanuele.github.io/node_modules/node-mock-http/dist/index.mjs';
import 'file:///Users/emanuele/Workspace/colonnaemanuele.github.io/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/emanuele/Workspace/colonnaemanuele.github.io/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/emanuele/Workspace/colonnaemanuele.github.io/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/emanuele/Workspace/colonnaemanuele.github.io/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/emanuele/Workspace/colonnaemanuele.github.io/node_modules/ohash/dist/index.mjs';
import 'file:///Users/emanuele/Workspace/colonnaemanuele.github.io/node_modules/scule/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/emanuele/Workspace/colonnaemanuele.github.io/node_modules/pathe/dist/index.mjs';
import 'file:///Users/emanuele/Workspace/colonnaemanuele.github.io/node_modules/@iconify/utils/lib/index.mjs';
import 'file:///Users/emanuele/Workspace/colonnaemanuele.github.io/node_modules/consola/dist/index.mjs';
import 'file:///Users/emanuele/Workspace/colonnaemanuele.github.io/node_modules/db0/dist/connectors/better-sqlite3.mjs';
import 'file:///Users/emanuele/Workspace/colonnaemanuele.github.io/node_modules/devalue/index.js';
import 'file:///Users/emanuele/Workspace/colonnaemanuele.github.io/node_modules/unhead/dist/plugins.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<p${ssrRenderAttrs(_attrs)}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</p>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseP.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ProseP = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { ProseP as default };
//# sourceMappingURL=ProseP.vue2.mjs.map
