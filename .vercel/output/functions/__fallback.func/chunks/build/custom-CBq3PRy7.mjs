import _sfc_main$1 from './NavHeader-DfmO14ax.mjs';
import _sfc_main$2 from './TheFooter-B7aEpvzH.mjs';
import { t as tryUseNuxtApp } from './server.mjs';
import { d as ssrRenderAttrs_1, a as ssrRenderComponent_1, j as ssrRenderSlot_1, u as useHead$1, v as vueExports, k as headSymbol } from '../routes/renderer.mjs';
import './nebo_logo-Dcha8Ng5.mjs';
import '@headlessui/vue';
import '@heroicons/vue/24/outline';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '../_/shared.cjs.prod.mjs';
import 'entities/decode';
import 'estree-walker';
import 'source-map-js';
import '@vue/compiler-ssr';
import 'node:stream';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';

function injectHead(nuxtApp) {
  var _a;
  const nuxt = nuxtApp || tryUseNuxtApp();
  return ((_a = nuxt == null ? void 0 : nuxt.ssrContext) == null ? void 0 : _a.head) || (nuxt == null ? void 0 : nuxt.runWithContext(() => {
    if (vueExports.hasInjectionContext()) {
      return vueExports.inject(headSymbol);
    }
  }));
}
function useHead(input, options = {}) {
  const head = injectHead(options.nuxt);
  if (head) {
    return useHead$1(input, { head, ...options });
  }
}
const _sfc_main = {
  __name: "custom",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "NEBO: Yamaha NMAX Neo Turbo Community",
      meta: [
        {
          name: "description",
          content: "NEBO adalah komunitas pecinta Yamaha NMAX yang menggabungkan semangat berkendara dengan modifikasi unik untuk menciptakan pengalaman berkendara yang lebih dinamis. Dengan fokus pada performa, gaya, dan kebersamaan, NEBO adalah tempat berkumpulnya para penggemar NMAX yang telah memodifikasi motornya menjadi lebih bertenaga dengan konsep Neo Turbo"
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs_1(_attrs)}>`);
      _push(ssrRenderComponent_1(_sfc_main$1, null, null, _parent));
      ssrRenderSlot_1(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(ssrRenderComponent_1(_sfc_main$2, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/custom.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=custom-CBq3PRy7.mjs.map
