<template>
	<div class="bg-transparent">
		<header
			class="fixed inset-x-0 top-0 z-50 transition-all duration-300"
			:class="[
				isScrolled
					? 'bg-brand-ink/80 backdrop-blur-md shadow-lg'
					: 'bg-transparent',
			]"
		>
			<nav
				class="flex items-center justify-between p-4 lg:px-8"
				aria-label="Global"
			>
				<div class="flex lg:flex-1">
					<a href="/" class="-m-1.5 p-1.5">
						<span class="sr-only">NEBO Indonesia</span>
						<img
							class="h-10 rounded-full w-auto"
							src="/assets/images/logos/nebo_logo.jpeg"
							alt="NEBO Indonesia"
						/>
					</a>
				</div>
				<div class="flex lg:hidden">
					<button
						type="button"
						class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-brand-text/80 hover:text-brand-accent transition-colors"
						@click="mobileMenuOpen = true"
					>
						<span class="sr-only">Open main menu</span>
						<Bars3Icon class="h-6 w-6" aria-hidden="true" />
					</button>
				</div>
				<div class="hidden lg:flex lg:gap-x-12">
					<a
						v-for="item in navigation"
						:key="item.name"
						:href="item.href"
						class="text-sm font-semibold leading-6 text-brand-text/85 hover:text-brand-accent transition-colors"
					>
						{{ item.name }}
					</a>
				</div>
				<div class="hidden lg:flex lg:flex-1 lg:justify-end"></div>
			</nav>
			<Dialog
				class="lg:hidden"
				@close="mobileMenuOpen = false"
				:open="mobileMenuOpen"
			>
				<div class="fixed inset-0 z-50 bg-brand-ink/70 backdrop-blur-sm" />
				<DialogPanel
					class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-brand-slate px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-brand-border/60"
				>
					<div class="flex items-center justify-between">
						<a href="/" class="-m-1.5 p-1.5">
							<span class="sr-only">NEBO Indonesia</span>
							<img
								class="h-10 rounded-full w-auto"
								src="/assets/images/logos/nebo_logo.jpeg"
								alt=""
							/>
						</a>
						<button
							type="button"
							class="-m-2.5 rounded-md p-2.5 text-brand-text/80 hover:text-brand-accent transition-colors"
							@click="mobileMenuOpen = false"
						>
							<span class="sr-only">Close menu</span>
							<XMarkIcon class="h-6 w-6" aria-hidden="true" />
						</button>
					</div>
					<div class="mt-6 flow-root">
						<div class="-my-6 divide-y divide-brand-border/70">
							<div class="space-y-2 py-6">
								<a
									v-for="item in navigation"
									:key="item.name"
									:href="item.href"
									class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-brand-text/90 hover:bg-brand-surface transition-colors"
								>
									{{ item.name }}
								</a>
							</div>

							<div class="py-6 hidden">
								<a
									href="#"
									class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
									>Log in</a
								>
							</div>
						</div>
					</div>
				</DialogPanel>
			</Dialog>
		</header>
	</div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { Dialog, DialogPanel } from '@headlessui/vue';
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline';

const navigation = [
	{ name: 'Home', href: '/' },
	{ name: 'Peraturan', href: '/rules' },
	{ name: 'Daftar Member', href: '/register' },
	{ name: 'Tentang Kami', href: '/about' },
	{ name: 'Struktur Kepengurusan', href: '/community-management' },
];

const mobileMenuOpen = ref(false);
const isScrolled = ref(false);

const handleScroll = () => {
	isScrolled.value = window.scrollY > 20;
};

onMounted(() => {
	window.addEventListener('scroll', handleScroll);
	handleScroll();
});

onUnmounted(() => {
	window.removeEventListener('scroll', handleScroll);
});
</script>
