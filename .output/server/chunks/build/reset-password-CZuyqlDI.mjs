import { useSSRContext } from 'vue';
import { u as useDirectusAuth } from './server.mjs';
import { ssrRenderAttrs } from 'vue/server-renderer';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@apollo/client/core/index.js';
import '@vue/apollo-composable';
import '@apollo/client/link/context/index.js';
import '@directus/sdk';
import 'jwt-decode';

const _sfc_main = {
  __name: "reset-password",
  __ssrInlineRender: true,
  setup(__props) {
    useDirectusAuth();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h1>Reset password</h1><button> Reset password </button></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/reset-password.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=reset-password-CZuyqlDI.mjs.map
