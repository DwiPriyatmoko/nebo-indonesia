import { ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_1, a as _imports_2, b as _imports_3, c as _imports_4, d as _imports_5 } from './hero_5-BYXJCVrG.mjs';
import { useSSRContext } from 'vue';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
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

const _sfc_main = {
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><main><div class="relative isolate"><div class="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48" aria-hidden="true"></div><div class="overflow-hidden"><div class="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32"><div class="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center"><div class="relative w-full max-w-xl lg:shrink-0 xl:max-w-2xl"><h1 class="text-4xl font-bold tracking-tight text-brand-text sm:text-6xl"> NEBO </h1><p class="mt-6 text-m text-brand-muted sm:max-w-md lg:max-w-none"> Awal Terbentuknya NEBO: Komunitas N-Max Neo Turbo Indonesia <br><br> Tidak sedikit orang yang penasaran tentang asal-usul NEBO, komunitas para pengguna Nmax yang kini semakin berkembang. Pertanyaan seperti, \u201CBagaimana awal terbentuknya NEBO?\u201D mungkin akan terus bermunculan seiring waktu. Jawaban dari pertanyaan ini menyimpan kisah sederhana namun penuh makna. <br><br> Semua bermula dari ide seorang penggemar Nmax, Kang Oppie. Dengan semangat kebersamaan, beliau mengajak para pengguna Nmax generasi ketiga untuk berkumpul dalam sebuah grup bernama &quot;Nmax Gen 3.&quot; Grup ini diciptakan sebagai wadah komunikasi bagi para pengguna, tempat berbagi cerita dan pengalaman tentang sepeda motor kesayangan mereka. <br><br> Tidak lama setelah grup terbentuk, kami merencanakan pertemuan pertama untuk bertemu dan mempererat tali silaturahmi. Pertemuan tersebut dihadiri oleh beberapa inisiator utama, yaitu Kang Oppie, Kang Ibnu, Kang Ceceng, Kang Dani. Kami berdiskusi panjang tentang bagaimana membentuk komunitas yang santai, nyaman, dan tidak terlalu banyak aturan. Kami ingin menciptakan ruang yang lepas dari formalitas, tetapi tetap solid dan berlandaskan semangat kekeluargaan. <br><br> Pada pertemuan itu juga, kami membahas nama untuk komunitas yang tengah kami bangun. Setelah mempertimbangkan berbagai pilihan, akhirnya kami sepakat menamainya &quot;NEBO&quot; yang merupakan singkatan dari N-Max Neo Turbo Indonesia. Nama ini mencerminkan semangat baru kami untuk menghadirkan energi positif dan persahabatan bagi seluruh anggota komunitas. <br><br> Komunitas NEBO pun resmi didirikan pada tanggal 20 Oktober 2024, dengan jumlah anggota awal yang mendaftar sebanyak 15 orang. Hari itu menjadi momen bersejarah yang menandai terbentuknya komunitas yang kuat dan penuh semangat. <br><br> Seiring berjalannya waktu, NEBO terus berkembang, menjadi rumah bagi para pengguna Nmax dari berbagai daerah di Indonesia. Komunitas ini bukan hanya sekadar tempat berkumpul, tetapi juga sebuah keluarga besar yang saling mendukung, berbagi, dan tumbuh bersama. Kami berharap NEBO dapat terus menjadi wadah yang nyaman dan menginspirasi bagi seluruh pengguna Nmax di Indonesia, menghadirkan semangat kebersamaan di setiap perjalanannya. </p></div><div class="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0"><div class="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80"><div class="relative"><img${ssrRenderAttr("src", _imports_1)} alt="" class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"><div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div></div></div><div class="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36"><div class="relative"><img${ssrRenderAttr("src", _imports_2)} alt="" class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"><div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div></div><div class="relative"><img${ssrRenderAttr("src", _imports_3)} alt="" class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"><div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div></div></div><div class="w-44 flex-none space-y-8 pt-32 sm:pt-0"><div class="relative"><img${ssrRenderAttr("src", _imports_4)} alt="" class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"><div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div></div><div class="relative"><img${ssrRenderAttr("src", _imports_5)} alt="" class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"><div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div></div></div></div></div></div></div></div></main></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=about-CWfTKyXC.mjs.map
