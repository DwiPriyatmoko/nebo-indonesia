import { ref, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '../routes/renderer.mjs';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';

const _sfc_main$1 = {
  __name: "CommunityMemberCard",
  __ssrInlineRender: true,
  props: {
    member: {
      type: Object,
      required: true,
      validator: (value) => {
        return value.name && value.alias && value.role && value.photo && value.nra;
      }
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "member-card-wrapper group" }, _attrs))} data-v-019088eb><div class="relative mb-6" data-v-019088eb><div class="photo-circle w-40 h-40 rounded-full overflow-hidden ring-4 ring-brand-border group-hover:ring-brand-accent transition-[ring-color] duration-300" data-v-019088eb><img${ssrRenderAttr("src", __props.member.photo)}${ssrRenderAttr("alt", __props.member.name)} class="w-full h-full object-cover transform transition-transform duration-300 ease-out group-hover:scale-110" data-v-019088eb></div></div><div class="mb-3" data-v-019088eb><span class="inline-block text-brand-muted text-xs font-semibold px-4 py-2 rounded-lg border border-brand-border max-w-xs text-center" data-v-019088eb>${ssrInterpolate(__props.member.role)}</span></div><p class="text-xs font-semibold text-brand-muted text-center" data-v-019088eb>${ssrInterpolate(__props.member.alias)}</p><h4 class="text-lg font-bold text-brand-text text-center" data-v-019088eb>${ssrInterpolate(__props.member.name)}</h4><p class="text-sm font-semibold text-brand-accent text-center mt-2 bg-brand-accent/10 px-3 py-1 rounded-md" data-v-019088eb> NRA: ${ssrInterpolate(__props.member.nra)}</p>`);
      if (__props.member.subtitle) {
        _push(`<p class="text-sm text-brand-muted text-center mt-1" data-v-019088eb>${ssrInterpolate(__props.member.subtitle)}</p>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CommunityMemberCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-019088eb"]]);
const _sfc_main = {
  __name: "community-management",
  __ssrInlineRender: true,
  setup(__props) {
    const members = ref([
      {
        id: 1,
        alias: "Wa Haji",
        name: "Raden Dani Putra",
        role: "PEMBINA",
        nra: "004F",
        photo: "/assets/images/members/wahaji.png"
      },
      {
        id: 2,
        alias: "Ibnu",
        name: "Ibnu Malik",
        role: "PENGAWAS",
        nra: "002F",
        photo: "/assets/images/members/ibnu.png"
      },
      {
        id: 3,
        alias: "Irwan",
        name: "Irwan Nurfajar",
        role: "PENASEHAT",
        nra: "019",
        photo: "/assets/images/members/irwan.png"
      },
      {
        id: 4,
        alias: "Oppie",
        name: "Sopi Sopian",
        role: "KETUA UMUM",
        nra: "001F",
        photo: "/assets/images/members/oppie.png"
      },
      {
        id: 5,
        alias: "EB",
        name: "ER Byantara",
        role: "WAKIL KETUA UMUM",
        nra: "005F",
        photo: "/assets/images/members/eb.png"
      },
      {
        id: 6,
        alias: "Yoga",
        name: "Yoga Dewo Broto",
        role: "SEKRETARIS UMUM",
        nra: "007",
        photo: "/assets/images/members/yoga.png"
      },
      {
        id: 7,
        alias: "Victor",
        name: "Victor Januar Hendrawan",
        role: "WAKIL SEKRETARIS UMUM",
        nra: "093",
        photo: "/assets/images/members/victor.png"
      },
      {
        id: 8,
        alias: "Ceceng",
        name: "Aceng Ridwan Anshori",
        role: "BENDAHARA UMUM",
        nra: "003F",
        photo: "/assets/images/members/ceceng.png"
      },
      {
        id: 9,
        alias: "Azuy",
        name: "Irham Rahardiansyah",
        role: "WAKIL BENDAHARA UMUM",
        nra: "024",
        photo: "/assets/images/members/azuy.png"
      },
      {
        id: 10,
        alias: "Kahfi",
        name: "Ahmad Kahfi Sobar",
        role: "KETUA BIDANG KEANGGOTAAN",
        nra: "094",
        photo: "/assets/images/members/kahfii.png"
      },
      {
        id: 11,
        alias: "Chikoyz",
        name: "Ekko Bagus",
        role: "SUB BIDANG REGISTRASI DAN KTA",
        nra: "018",
        photo: "/assets/images/members/chikoyz.png"
      },
      {
        id: 12,
        alias: "Omben",
        name: "Mochamad Alfian Fawzie",
        role: "KETUA BIDANG KEGIATAN",
        nra: "020",
        photo: "/assets/images/members/omben.png"
      },
      {
        id: 13,
        alias: "Egi",
        name: "Egi Mardiana",
        role: "SUB BIDANG KOPDAR",
        nra: "008",
        photo: "/assets/images/members/egi.png"
      },
      {
        id: 14,
        alias: "Beka",
        name: "MR Eka Saputra",
        role: "SUB BIDANG TOURING",
        nra: "155",
        photo: "/assets/images/members/beka.png"
      },
      {
        id: 15,
        alias: "Yudi",
        name: "Yudi Abdul Rohim",
        role: "KETUA BIDANG HUKUM & ADVOKASI",
        nra: "058",
        photo: "/assets/images/members/yudi.png"
      },
      {
        id: 16,
        alias: "RG",
        name: "Ridwan G",
        role: "SUB BIDANG HUKUM & ADVOKASI",
        nra: "096",
        photo: "/assets/images/members/ridwan_rg.png"
      },
      {
        id: 17,
        alias: "Mas Mosky",
        name: "Dwi Priyatmoko",
        role: "KETUA BIDANG HUMAS & IT",
        nra: "055",
        photo: "/assets/images/members/masmosky.png"
      },
      {
        id: 18,
        alias: "Ben KW",
        name: "Beni Rindayana",
        role: "SUB BIDANG PUBLIKASI & DOKUMENTASI",
        nra: "198",
        photo: "/assets/images/members/benraya.png"
      },
      {
        id: 19,
        alias: "Dedy",
        name: "Dedy Budianto",
        role: "KETUA BIDANG DANA USAHA",
        nra: "032",
        photo: "/assets/images/members/dedy.png"
      },
      {
        id: 20,
        alias: "AdamNR",
        name: "Adam Nugraha",
        role: "SUB BIDANG MARCHANDISE & PROMOSI",
        nra: "026",
        photo: "/assets/images/members/adam.png"
      },
      {
        id: 21,
        alias: "Rawing",
        name: "Raka Kharisma Adhadira",
        role: "SUB BIDANG LOGISTIK",
        nra: "105",
        photo: "/assets/images/members/raka.png"
      },
      {
        id: 22,
        alias: "Ferry",
        name: "Ferry",
        role: "SUB BIDANG LOGISTIK",
        nra: "006",
        photo: "/assets/images/members/ferry.png"
      },
      {
        id: 23,
        alias: "Ali",
        name: "Ali Nurdin",
        role: "SUB BIDANG LOGISTIK",
        nra: "135",
        photo: "/assets/images/members/ali.png"
      }
    ]);
    const uniqueRoles = computed(() => {
      const roles = members.value.map((m) => m.role);
      return [...new Set(roles)];
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_community_member_card = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen py-12 px-4 sm:px-6 lg:px-8 mt-20" }, _attrs))}><div class="max-w-6xl mx-auto mb-16 text-center"><h1 class="text-4xl sm:text-5xl font-bold text-brand-text mb-4"> Struktur Kepengurusan </h1><p class="text-xl font-semibold text-brand-accent mb-4"> Periode 2026 - 2028 </p><div class="h-1 w-24 bg-brand-accent mx-auto mb-6"></div><p class="text-lg text-brand-muted max-w-3xl mx-auto"> Berikut adalah struktur kepengurusan NEBO pusat, yang terdiri dari ${ssrInterpolate(unref(members).length)} anggota yang berdedikasi dengan visi dan misi membangun untuk bersama. </p></div><div class="max-w-6xl mx-auto mb-16"><div class="bg-brand-surface rounded-lg border border-brand-border p-8"><div class="flex items-center gap-4 mb-4"><div><h2 class="text-2xl font-bold text-brand-text">NEBO PUSAT</h2><p class="text-brand-accent font-semibold">${ssrInterpolate(unref(members).length)} Anggota Kepengurusan </p></div></div><p class="text-brand-muted leading-relaxed"> Tim kepengurusan NEBO dipenuhi sosok-sosok energik yang siap melaju bersama membesarkan nama NEBO INDONESIA. Setiap anggota membawa keahlian unik, menyatukan langkah, dan menggerakkan komunitas agar terus maju dan berkembang. </p></div></div><div class="max-w-6xl mx-auto"><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"><!--[-->`);
      ssrRenderList(unref(members), (member) => {
        _push(`<div class="bg-brand-slate rounded-xl p-8">`);
        _push(ssrRenderComponent(_component_community_member_card, { member }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div><div class="max-w-6xl mx-auto mt-16 pt-12 border-t border-brand-border"><div class="grid grid-cols-1 md:grid-cols-2 gap-8 text-center"><div><div class="text-4xl font-bold text-brand-accent">${ssrInterpolate(unref(members).length)}</div><p class="text-brand-muted mt-2">Anggota Kepengurusan</p></div><div><div class="text-4xl font-bold text-brand-accent">${ssrInterpolate(unref(uniqueRoles).length)}</div><p class="text-brand-muted mt-2">Divisi Kepengurusan</p></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/community-management.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=community-management-BzhD3kvO.mjs.map
