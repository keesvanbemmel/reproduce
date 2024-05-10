import { _ as __nuxt_component_0 } from "./nuxt-link-Cs_hzKNb.js";
import { withCtx, createTextVNode, useSSRContext } from "vue";
import "hookable";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import "ufo";
import "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "klona";
import "devalue";
import "@apollo/client/core/index.js";
import "@vue/apollo-composable";
import "@apollo/client/link/context/index.js";
import "@directus/sdk";
import "jwt-decode";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><h1>Index</h1>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/auth/login" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Login `);
          } else {
            return [
              createTextVNode(" Login ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-D94hDDCK.js.map
