import { defineComponent, ref, unref, useSSRContext } from "vue";
import "hookable";
import { u as useDirectusAuth, _ as _export_sfc } from "../server.mjs";
import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import "ofetch";
import "#internal/nuxt/paths";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "ufo";
import "radix3";
import "defu";
import "klona";
import "devalue";
import "@apollo/client/core/index.js";
import "@vue/apollo-composable";
import "@apollo/client/link/context/index.js";
import "@directus/sdk";
import "jwt-decode";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    useDirectusAuth();
    const email = ref("tester@test.com");
    const password = ref("test123");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-06c8487d><h1 data-v-06c8487d>Login</h1><div data-v-06c8487d><label data-v-06c8487d>E-Mail:</label><input${ssrRenderAttr("value", unref(email))} type="email" placeholder="Email" data-v-06c8487d></div><div data-v-06c8487d><label data-v-06c8487d>Password:</label><input${ssrRenderAttr("value", unref(password))} type="password" placeholder="Password" data-v-06c8487d></div><div data-v-06c8487d><button data-v-06c8487d> Login </button><button data-v-06c8487d> Login with google </button><button data-v-06c8487d> Request password reset </button></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const login = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-06c8487d"]]);
export {
  login as default
};
//# sourceMappingURL=login-CM3VwOnP.js.map
