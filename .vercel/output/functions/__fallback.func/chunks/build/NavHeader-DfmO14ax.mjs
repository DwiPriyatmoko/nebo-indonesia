import { _ as _imports_0 } from './nebo_logo-Dcha8Ng5.mjs';
import { Dialog, DialogPanel } from '@headlessui/vue';
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline';
import { v as vueExports, d as ssrRenderAttrs_1, e as ssrRenderAttr_1, a as ssrRenderComponent_1, f as ssrRenderList_1, g as ssrInterpolate_1 } from '../routes/renderer.mjs';
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

const _sfc_main = {
  __name: "NavHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const navigation = [
      { name: "Home", href: "/" },
      { name: "Peraturan", href: "/rules" },
      { name: "Daftar Member", href: "/register" },
      { name: "Tentang Kami", href: "/about" },
      { name: "Struktur Kepengurusan", href: "/community-management" }
      // { name: 'Products', href: '#' },
    ];
    const mobileMenuOpen = vueExports.ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs_1(vueExports.mergeProps({ class: "bg-transparent" }, _attrs))}><header class="absolute inset-x-0 top-0 z-50"><nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global"><div class="flex lg:flex-1"><a href="#" class="-m-1.5 p-1.5"><span class="sr-only">Your Company</span><img class="h-10 rounded-full w-auto"${ssrRenderAttr_1("src", _imports_0)} alt=""></a></div><div class="flex lg:hidden"><button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-brand-text/80 hover:text-brand-accent transition-colors"><span class="sr-only">Open main menu</span>`);
      _push(ssrRenderComponent_1(vueExports.unref(Bars3Icon), {
        class: "h-6 w-6",
        "aria-hidden": "true"
      }, null, _parent));
      _push(`</button></div><div class="hidden lg:flex lg:gap-x-12"><!--[-->`);
      ssrRenderList_1(navigation, (item) => {
        _push(`<a${ssrRenderAttr_1("href", item.href)} class="text-sm font-semibold leading-6 text-brand-text/85 hover:text-brand-accent transition-colors">${ssrInterpolate_1(item.name)}</a>`);
      });
      _push(`<!--]--></div><div class="hidden lg:flex lg:flex-1 lg:justify-end"></div></nav>`);
      _push(ssrRenderComponent_1(vueExports.unref(Dialog), {
        class: "lg:hidden",
        onClose: ($event) => mobileMenuOpen.value = false,
        open: mobileMenuOpen.value
      }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="fixed inset-0 z-50 bg-brand-ink/70 backdrop-blur-sm"${_scopeId}></div>`);
            _push2(ssrRenderComponent_1(vueExports.unref(DialogPanel), { class: "fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-brand-slate px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-brand-border/60" }, {
              default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center justify-between"${_scopeId2}><a href="#" class="-m-1.5 p-1.5"${_scopeId2}><span class="sr-only"${_scopeId2}>Your Company</span><img class="h-10 rounded-full w-auto"${ssrRenderAttr_1("src", _imports_0)} alt=""${_scopeId2}></a><button type="button" class="-m-2.5 rounded-md p-2.5 text-brand-text/80 hover:text-brand-accent transition-colors"${_scopeId2}><span class="sr-only"${_scopeId2}>Close menu</span>`);
                  _push3(ssrRenderComponent_1(vueExports.unref(XMarkIcon), {
                    class: "h-6 w-6",
                    "aria-hidden": "true"
                  }, null, _parent3, _scopeId2));
                  _push3(`</button></div><div class="mt-6 flow-root"${_scopeId2}><div class="-my-6 divide-y divide-brand-border/70"${_scopeId2}><div class="space-y-2 py-6"${_scopeId2}><!--[-->`);
                  ssrRenderList_1(navigation, (item) => {
                    _push3(`<a${ssrRenderAttr_1("href", item.href)} class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-brand-text/90 hover:bg-brand-surface transition-colors"${_scopeId2}>${ssrInterpolate_1(item.name)}</a>`);
                  });
                  _push3(`<!--]--></div><div class="py-6 hidden"${_scopeId2}><a href="#" class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"${_scopeId2}>Log in</a></div></div></div>`);
                } else {
                  return [
                    vueExports.createVNode("div", { class: "flex items-center justify-between" }, [
                      vueExports.createVNode("a", {
                        href: "#",
                        class: "-m-1.5 p-1.5"
                      }, [
                        vueExports.createVNode("span", { class: "sr-only" }, "Your Company"),
                        vueExports.createVNode("img", {
                          class: "h-10 rounded-full w-auto",
                          src: _imports_0,
                          alt: ""
                        })
                      ]),
                      vueExports.createVNode("button", {
                        type: "button",
                        class: "-m-2.5 rounded-md p-2.5 text-brand-text/80 hover:text-brand-accent transition-colors",
                        onClick: ($event) => mobileMenuOpen.value = false
                      }, [
                        vueExports.createVNode("span", { class: "sr-only" }, "Close menu"),
                        vueExports.createVNode(vueExports.unref(XMarkIcon), {
                          class: "h-6 w-6",
                          "aria-hidden": "true"
                        })
                      ], 8, ["onClick"])
                    ]),
                    vueExports.createVNode("div", { class: "mt-6 flow-root" }, [
                      vueExports.createVNode("div", { class: "-my-6 divide-y divide-brand-border/70" }, [
                        vueExports.createVNode("div", { class: "space-y-2 py-6" }, [
                          (vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(navigation, (item) => {
                            return vueExports.createVNode("a", {
                              key: item.name,
                              href: item.href,
                              class: "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-brand-text/90 hover:bg-brand-surface transition-colors"
                            }, vueExports.toDisplayString(item.name), 9, ["href"]);
                          }), 64))
                        ]),
                        vueExports.createVNode("div", { class: "py-6 hidden" }, [
                          vueExports.createVNode("a", {
                            href: "#",
                            class: "-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          }, "Log in")
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              vueExports.createVNode("div", { class: "fixed inset-0 z-50 bg-brand-ink/70 backdrop-blur-sm" }),
              vueExports.createVNode(vueExports.unref(DialogPanel), { class: "fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-brand-slate px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-brand-border/60" }, {
                default: vueExports.withCtx(() => [
                  vueExports.createVNode("div", { class: "flex items-center justify-between" }, [
                    vueExports.createVNode("a", {
                      href: "#",
                      class: "-m-1.5 p-1.5"
                    }, [
                      vueExports.createVNode("span", { class: "sr-only" }, "Your Company"),
                      vueExports.createVNode("img", {
                        class: "h-10 rounded-full w-auto",
                        src: _imports_0,
                        alt: ""
                      })
                    ]),
                    vueExports.createVNode("button", {
                      type: "button",
                      class: "-m-2.5 rounded-md p-2.5 text-brand-text/80 hover:text-brand-accent transition-colors",
                      onClick: ($event) => mobileMenuOpen.value = false
                    }, [
                      vueExports.createVNode("span", { class: "sr-only" }, "Close menu"),
                      vueExports.createVNode(vueExports.unref(XMarkIcon), {
                        class: "h-6 w-6",
                        "aria-hidden": "true"
                      })
                    ], 8, ["onClick"])
                  ]),
                  vueExports.createVNode("div", { class: "mt-6 flow-root" }, [
                    vueExports.createVNode("div", { class: "-my-6 divide-y divide-brand-border/70" }, [
                      vueExports.createVNode("div", { class: "space-y-2 py-6" }, [
                        (vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(navigation, (item) => {
                          return vueExports.createVNode("a", {
                            key: item.name,
                            href: item.href,
                            class: "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-brand-text/90 hover:bg-brand-surface transition-colors"
                          }, vueExports.toDisplayString(item.name), 9, ["href"]);
                        }), 64))
                      ]),
                      vueExports.createVNode("div", { class: "py-6 hidden" }, [
                        vueExports.createVNode("a", {
                          href: "#",
                          class: "-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        }, "Log in")
                      ])
                    ])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</header></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/partials/NavHeader.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=NavHeader-DfmO14ax.mjs.map
