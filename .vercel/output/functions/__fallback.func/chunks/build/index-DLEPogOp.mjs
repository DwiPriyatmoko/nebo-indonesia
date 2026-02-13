import { createVNode, resolveDynamicComponent, ref, mergeProps, withCtx, defineComponent, shallowRef, getCurrentInstance, provide, cloneVNode, h, createElementBlock, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrRenderVNode, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _imports_1, a as _imports_2, b as _imports_3, c as _imports_4, d as _imports_5 } from './hero_5-BYXJCVrG.mjs';
import { _ as _imports_0$1 } from './NEBO-DCIsbGwL.mjs';
import { StarIcon } from '@heroicons/vue/20/solid';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { c as createWhatsAppMessage, a as createWhatsAppLink, W as WHATSAPP_PHONES } from './whatsapp-BeTQHBEu.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';

defineComponent({
  name: "ServerPlaceholder",
  render() {
    return createElementBlock("div");
  }
});
const clientOnlySymbol = /* @__PURE__ */ Symbol.for("nuxt:client-only");
const __nuxt_component_0 = defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  ...false,
  setup(props, { slots, attrs }) {
    const mounted = shallowRef(false);
    const vm = getCurrentInstance();
    if (vm) {
      vm._nuxtClientOnly = true;
    }
    provide(clientOnlySymbol, true);
    return () => {
      var _a;
      if (mounted.value) {
        const vnodes = (_a = slots.default) == null ? void 0 : _a.call(slots);
        if (vnodes && vnodes.length === 1) {
          return [cloneVNode(vnodes[0], attrs)];
        }
        return vnodes;
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return h(slot);
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
const _imports_0 = publicAssetsURL("/assets/images/sliders/slider_11.jpg");
const _sfc_main$1 = {
  __name: "HeroSection",
  __ssrInlineRender: true,
  setup(__props) {
    const activeIndex = ref(0);
    const banners = [
      { media_path: "/assets/images/sliders/slider_11.jpg" },
      { media_path: "/assets/images/sliders/slider_3.jpeg" },
      { media_path: "/assets/images/sliders/slider_1.jpg" },
      { media_path: "/assets/images/sliders/slider_9.jpg" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative home-banner w-full h-screen min-h-[600px] max-h-[1000px]" }, _attrs))}>`);
      if (banners.length > 0) {
        _push(`<div class="w-full h-full">`);
        _push(ssrRenderComponent(_component_ClientOnly, null, {
          fallback: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="absolute inset-0 overflow-hidden"${_scopeId}><img class="hero-slide-img h-full w-full object-cover scale-105"${ssrRenderAttr("src", _imports_0)} alt="NEBO Community"${_scopeId}><div class="absolute inset-0 bg-gradient-to-r from-brand-ink/95 via-brand-ink/60 to-transparent"${_scopeId}></div><div class="absolute inset-0 bg-gradient-to-t from-brand-ink/80 via-transparent to-brand-ink/30"${_scopeId}></div></div>`);
            } else {
              return [
                createVNode("div", { class: "absolute inset-0 overflow-hidden" }, [
                  createVNode("img", {
                    class: "hero-slide-img h-full w-full object-cover scale-105",
                    src: _imports_0,
                    alt: "NEBO Community"
                  }),
                  createVNode("div", { class: "absolute inset-0 bg-gradient-to-r from-brand-ink/95 via-brand-ink/60 to-transparent" }),
                  createVNode("div", { class: "absolute inset-0 bg-gradient-to-t from-brand-ink/80 via-transparent to-brand-ink/30" })
                ])
              ];
            }
          })
        }, _parent));
        _push(`<div class="absolute inset-0 z-10 pointer-events-none"><div class="max-w-7xl mx-auto px-6 lg:px-8 h-full flex flex-col justify-end pb-32 md:pb-40"><div class="mb-4"><span class="inline-block text-brand-accent text-sm md:text-base font-semibold tracking-[0.25em] uppercase"> Yamaha NMAX NEO TURBO </span></div><h1 class="text-5xl sm:text-6xl lg:text-8xl font-black tracking-tight text-brand-text leading-[0.9] mb-6"> NEBO <span class="block text-brand-accent">INDONESIA</span></h1><p class="text-lg md:text-xl text-brand-muted/90 max-w-lg leading-relaxed mb-10"> Komunitas resmi pengguna Yamaha NMAX GEN TIGA <br><span class="text-brand-text font-medium">Ride together</span>, grow together! </p></div></div><div class="absolute bottom-10 right-6 lg:right-12 z-10 flex items-center gap-3"><span class="text-3xl md:text-4xl font-black text-brand-accent tabular-nums">${ssrInterpolate(String(activeIndex.value + 1).padStart(2, "0"))}</span><span class="text-brand-muted/50 text-lg">/</span><span class="text-sm text-brand-muted/50 tabular-nums">${ssrInterpolate(String(banners.length).padStart(2, "0"))}</span></div><div class="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2 opacity-60"><div class="w-px h-10 bg-gradient-to-b from-transparent to-brand-accent animate-pulse"></div></div><div class="absolute left-6 lg:left-12 top-1/2 -translate-y-1/2 z-10 hidden lg:flex flex-col items-center gap-3"><div class="w-px h-16 bg-brand-accent/40"></div><span class="text-[10px] tracking-[0.3em] text-brand-muted/50 uppercase" style="${ssrRenderStyle({ "writing-mode": "vertical-lr" })}"> @nebo_idn </span><div class="w-px h-16 bg-brand-accent/40"></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/HeroSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const registerMessage = createWhatsAppMessage();
    const whatsappLinks = {
      recruitment1: createWhatsAppLink(
        WHATSAPP_PHONES.RECRUITMENT_1,
        registerMessage
      ),
      recruitment2: createWhatsAppLink(
        WHATSAPP_PHONES.RECRUITMENT_3,
        registerMessage
      ),
      recruitment3: createWhatsAppLink(
        WHATSAPP_PHONES.RECRUITMENT_3,
        registerMessage
      )
    };
    const missions = [
      {
        name: "Koneksi dengan Sesama Penggemar",
        description: "Dapatkan kesempatan untuk bertemu dan berinteraksi dengan para pemilik dan penggemar Yamaha NMAX lainnya. Berbagi pengalaman dan tips modifikasi akan memperkaya pengetahuan Anda tentang motor kesayangan.",
        icon: StarIcon
      },
      {
        name: "Dukungan dan Saran Modifikasi",
        description: "Anggota NEBO saling membantu dalam hal modifikasi motor. Anda akan mendapatkan saran berharga tentang peningkatan performa dan gaya yang dapat membuat NMAX Anda semakin keren dan bertenaga.",
        icon: StarIcon
      },
      {
        name: "Kegiatan Seru dan Touring",
        description: "Ikuti berbagai kegiatan menarik, mulai dari kopdar hingga touring bersama. Rasakan kebersamaan dan keseruan menjelajahi jalanan dengan teman-teman satu hobi.",
        icon: StarIcon
      },
      {
        name: "Akses ke Informasi Terbaru",
        description: "Dapatkan informasi terkini tentang produk, event, dan tren modifikasi Yamaha NMAX. Jangan lewatkan kesempatan untuk selalu update dan mendapatkan penawaran spesial dari mitra komunitas.",
        icon: StarIcon
      },
      {
        name: "Komunitas yang Ramah dan Inklusif",
        description: "NEBO adalah tempat di mana semua penggemar NMAX disambut dengan hangat, tanpa memandang pengalaman berkendara atau tingkat modifikasi. Bergabunglah dengan komunitas yang mendukung dan menginspirasi satu sama lain.",
        icon: StarIcon
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><main>`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`<div class="relative isolate overflow-hidden"><div class="absolute inset-0 -z-10 bg-gradient-to-b from-brand-ink via-brand-slate/50 to-brand-ink"></div><div class="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32"><div class="text-center mb-16"><span class="inline-flex items-center rounded-full bg-brand-accent/10 px-4 py-1.5 text-sm font-semibold text-brand-accent ring-1 ring-inset ring-brand-accent/20 mb-4"> KOMUNITAS YAMAHA NMAX NEO TURBO </span><h2 class="text-4xl font-bold tracking-tight text-brand-text sm:text-5xl lg:text-6xl"> Selamat Datang di <span class="text-brand-accent">NEBO</span></h2><p class="mt-6 text-lg leading-8 text-brand-muted max-w-3xl mx-auto"> NEBO Indonesia tidak hanya berbagi tentang tips modifikasi dan peningkatan performa, tetapi juga aktif mengadakan kegiatan touring, kopdar, dan berbagai event seru lainnya. </p></div><div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"><div class="relative"><div class="group relative overflow-hidden rounded-2xl aspect-[4/3]"><img${ssrRenderAttr("src", _imports_1)} alt="NEBO Community" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"><div class="absolute inset-0 bg-gradient-to-t from-brand-ink/60 via-transparent to-transparent"></div><div class="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl"></div></div><div class="absolute -bottom-6 -right-6 w-32 sm:w-40 group overflow-hidden rounded-xl shadow-2xl ring-4 ring-brand-ink"><img${ssrRenderAttr("src", _imports_2)} alt="NEBO Event" class="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-110"></div><div class="absolute -top-6 -left-6 w-28 sm:w-36 group overflow-hidden rounded-xl shadow-2xl ring-4 ring-brand-ink hidden sm:block"><img${ssrRenderAttr("src", _imports_3)} alt="NEBO Touring" class="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-110"></div></div><div class="lg:pl-8"><div class="flex items-center gap-3 mb-6 text-brand-accent font-semibold"><div class="h-px w-12 bg-brand-accent"></div><span class="text-sm uppercase tracking-wider">Bergabung Bersama Kami</span></div><h3 class="text-2xl sm:text-3xl font-bold text-brand-text mb-6 leading-tight"> Bersama NEBO, rasakan sensasi berkendara yang maksimal </h3><p class="text-brand-muted leading-relaxed mb-8"> Setiap anggota bisa merasakan sensasi berkendara yang maksimal, sembari memperkuat tali persaudaraan sesama rider Nmax Generasi Tiga. Komunitas yang solid, kegiatan yang seru, dan pengalaman tak terlupakan menanti Anda. </p><div class="grid sm:grid-cols-2 gap-4 mb-8"><div class="flex items-center gap-3 p-3 rounded-lg bg-brand-surface/50 border border-brand-border/50"><div class="w-10 h-10 rounded-full bg-brand-accent/10 flex items-center justify-center"><svg class="w-5 h-5 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg></div><span class="text-sm font-medium text-brand-text">Komunitas Solid</span></div><div class="flex items-center gap-3 p-3 rounded-lg bg-brand-surface/50 border border-brand-border/50"><div class="w-10 h-10 rounded-full bg-brand-accent/10 flex items-center justify-center"><svg class="w-5 h-5 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path></svg></div><span class="text-sm font-medium text-brand-text">Touring Seru</span></div><div class="flex items-center gap-3 p-3 rounded-lg bg-brand-surface/50 border border-brand-border/50"><div class="w-10 h-10 rounded-full bg-brand-accent/10 flex items-center justify-center"><svg class="w-5 h-5 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg></div><span class="text-sm font-medium text-brand-text">Tips Modifikasi</span></div><div class="flex items-center gap-3 p-3 rounded-lg bg-brand-surface/50 border border-brand-border/50"><div class="w-10 h-10 rounded-full bg-brand-accent/10 flex items-center justify-center"><svg class="w-5 h-5 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg></div><span class="text-sm font-medium text-brand-text">Event Rutin</span></div></div><div class="bg-brand-surface/80 backdrop-blur rounded-xl p-6 border border-brand-border text-center lg:text-left"><p class="font-bold text-brand-text mb-2"> Yuk, Gabung Gratis ke NEBO! </p><p class="text-xs text-brand-muted mb-4"> *Sertakan foto selfie bersama motormu untuk verifikasi keanggotaan </p><div class="flex flex-col sm:flex-row flex-wrap gap-3 justify-center lg:justify-start"><a${ssrRenderAttr("href", whatsappLinks.recruitment1)} target="_blank" class="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-accent px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-accent/25 hover:bg-brand-accent-strong hover:shadow-brand-accent/40 transition-all duration-300"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path></svg> Rekrutmen 1 </a><a${ssrRenderAttr("href", whatsappLinks.recruitment3)} target="_blank" class="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-accent px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-accent/25 hover:bg-brand-accent-strong hover:shadow-brand-accent/40 transition-all duration-300"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path></svg> Rekrutmen 2 </a></div></div></div></div><div class="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-4"><div class="group relative overflow-hidden rounded-xl aspect-video"><img${ssrRenderAttr("src", _imports_4)} alt="NEBO Riders" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"><div class="absolute inset-0 bg-gradient-to-t from-brand-ink/50 to-transparent"></div></div><div class="group relative overflow-hidden rounded-xl aspect-video"><img${ssrRenderAttr("src", _imports_5)} alt="NEBO Meetup" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"><div class="absolute inset-0 bg-gradient-to-t from-brand-ink/50 to-transparent"></div></div><div class="group relative overflow-hidden rounded-xl aspect-video hidden sm:block"><img${ssrRenderAttr("src", _imports_2)} alt="NEBO Event" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"><div class="absolute inset-0 bg-gradient-to-t from-brand-ink/50 to-transparent"></div></div><div class="group relative overflow-hidden rounded-xl aspect-video hidden sm:block"><img${ssrRenderAttr("src", _imports_3)} alt="NEBO Touring" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"><div class="absolute inset-0 bg-gradient-to-t from-brand-ink/50 to-transparent"></div></div></div></div></div><div class="relative py-24 sm:py-32"><div class="mx-auto max-w-7xl px-6 lg:px-8"><div class="text-center mb-16"><span class="inline-flex items-center rounded-full bg-brand-accent/10 px-4 py-1.5 text-sm font-semibold text-brand-accent ring-1 ring-inset ring-brand-accent/20 mb-4"> Kenapa NEBO? </span><h2 class="text-3xl font-bold tracking-tight text-brand-text sm:text-4xl lg:text-5xl"> Mengapa Harus Bergabung? </h2><p class="mt-4 text-lg text-brand-muted max-w-2xl mx-auto"> Bergabung dengan NEBO bukan sekadar menjadi bagian dari komunitas, tetapi juga membuka pintu menuju pengalaman berkendara yang lebih seru. </p></div><div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"><!--[-->`);
      ssrRenderList(missions, (mission, index) => {
        _push(`<div class="group relative bg-brand-surface/50 backdrop-blur rounded-2xl p-6 border border-brand-border/50 hover:border-brand-accent/50 transition-all duration-300 hover:-translate-y-1"><div class="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center mb-4 group-hover:bg-brand-accent/20 transition-colors duration-300">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(mission.icon), {
          class: "w-6 h-6 text-brand-accent",
          "aria-hidden": "true"
        }, null), _parent);
        _push(`</div><h3 class="text-lg font-semibold text-brand-text mb-2 group-hover:text-brand-accent transition-colors duration-300">${ssrInterpolate(mission.name)}</h3><p class="text-sm text-brand-muted leading-relaxed">${ssrInterpolate(mission.description)}</p><div class="absolute top-4 right-4 text-5xl font-bold text-brand-border/30 group-hover:text-brand-accent/20 transition-colors duration-300">${ssrInterpolate(String(index + 1).padStart(2, "0"))}</div></div>`);
      });
      _push(`<!--]--></div><div class="mt-16 flex justify-center"><div class="group relative overflow-hidden rounded-2xl max-w-sm w-full"><img${ssrRenderAttr("src", _imports_0$1)} alt="NEBO Logo" class="w-full object-contain transition-transform duration-500 group-hover:scale-105"></div></div></div></div><div class="relative py-24 sm:py-32 overflow-hidden"><div class="absolute inset-0 -z-10 bg-gradient-to-br from-brand-accent/5 via-brand-ink to-brand-slate/50"></div><div class="absolute inset-y-0 right-0 -z-10 w-1/2 bg-gradient-to-l from-brand-accent/10 to-transparent"></div><div class="mx-auto max-w-7xl px-6 lg:px-8"><div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"><div class="text-center lg:text-left"><span class="inline-flex items-center rounded-full bg-brand-accent/10 px-4 py-1.5 text-sm font-semibold text-brand-accent ring-1 ring-inset ring-brand-accent/20 mb-6"> Gabung Sekarang </span><h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-text leading-tight mb-6"> Mulai Perjalananmu <span class="text-brand-accent">Bersama Kami</span></h2><p class="text-lg text-brand-muted mb-8 leading-relaxed max-w-md mx-auto lg:mx-0"> Bergabunglah sekarang dengan komunitas NMAX! Temukan teman, pengalaman, dan petualangan seru bersama kami. Jadilah bagian dari keluarga besar NEBO Indonesia. </p><div class="grid grid-cols-3 gap-4 sm:gap-6 mb-10 py-6 border-y border-brand-border/50"><div class="text-center"><div class="text-2xl sm:text-3xl font-bold text-brand-accent"> 500+ </div><div class="text-xs sm:text-sm text-brand-muted mt-1"> Members </div></div><div class="text-center"><div class="text-2xl sm:text-3xl font-bold text-brand-accent"> 50+ </div><div class="text-xs sm:text-sm text-brand-muted mt-1"> Events </div></div><div class="text-center"><div class="text-2xl sm:text-3xl font-bold text-brand-accent"> 4+ </div><div class="text-xs sm:text-sm text-brand-muted mt-1"> Chapters </div></div></div><div class="bg-brand-surface rounded-2xl p-6 border border-brand-border text-center lg:text-left"><p class="font-bold text-brand-text mb-1"> Yuk, Gabung Gratis ke NEBO! </p><p class="text-sm text-brand-muted mb-5"> *Sertakan foto selfie bersama motormu untuk verifikasi keanggotaan </p><div class="flex flex-col sm:flex-row flex-wrap gap-3 justify-center lg:justify-start"><a${ssrRenderAttr("href", whatsappLinks.recruitment1)} target="_blank" class="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-accent px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-accent/25 hover:bg-brand-accent-strong hover:shadow-brand-accent/40 hover:-translate-y-0.5 transition-all duration-300"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path></svg> Rekrutmen 1 </a><a${ssrRenderAttr("href", whatsappLinks.recruitment2)} target="_blank" class="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-accent px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-accent/25 hover:bg-brand-accent-strong hover:shadow-brand-accent/40 hover:-translate-y-0.5 transition-all duration-300"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path></svg> Rekrutmen 2 </a></div></div></div><div class="relative order-first lg:order-last"><div class="block lg:hidden"><div class="group relative overflow-hidden rounded-2xl aspect-video mx-auto max-w-md"><img${ssrRenderAttr("src", _imports_1)} alt="NEBO Community" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"><div class="absolute inset-0 bg-gradient-to-t from-brand-ink/60 to-transparent"></div></div></div><div class="hidden lg:grid grid-cols-2 gap-4"><div class="group relative overflow-hidden rounded-2xl aspect-[3/4]"><img${ssrRenderAttr("src", _imports_1)} alt="NEBO Community" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"><div class="absolute inset-0 bg-gradient-to-t from-brand-ink/60 to-transparent"></div></div><div class="space-y-4 pt-12"><div class="group relative overflow-hidden rounded-2xl aspect-square"><img${ssrRenderAttr("src", _imports_2)} alt="NEBO Event" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"><div class="absolute inset-0 bg-gradient-to-t from-brand-ink/60 to-transparent"></div></div><div class="group relative overflow-hidden rounded-2xl aspect-video"><img${ssrRenderAttr("src", _imports_3)} alt="NEBO Touring" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"><div class="absolute inset-0 bg-gradient-to-t from-brand-ink/60 to-transparent"></div></div></div></div><div class="hidden lg:block absolute -bottom-4 -left-4 w-24 h-24 bg-brand-accent/20 rounded-full blur-2xl"></div><div class="hidden lg:block absolute -top-4 -right-4 w-32 h-32 bg-brand-accent/10 rounded-full blur-3xl"></div></div></div></div></div></main></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DLEPogOp.mjs.map
