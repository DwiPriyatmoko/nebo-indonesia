<template>
	<div>
		<!-- Header -->
		<NavHeader />

		<!-- Content -->
		<slot />

		<!-- Footer -->
		<TheFooter />
	</div>
</template>

<script setup>
import NavHeader from '@/layouts/partials/NavHeader.vue';
import TheFooter from '@/layouts/partials/TheFooter.vue';

useHead({
	title: 'NEBO: Yamaha NMAX Neo Turbo Community',
	meta: [
		{
			name: 'description',
			content:
				'NEBO adalah komunitas pecinta Yamaha NMAX yang menggabungkan semangat berkendara dengan modifikasi unik untuk menciptakan pengalaman berkendara yang lebih dinamis. Dengan fokus pada performa, gaya, dan kebersamaan, NEBO adalah tempat berkumpulnya para penggemar NMAX yang telah memodifikasi motornya menjadi lebih bertenaga dengan konsep Neo Turbo',
		},
	],
});
</script>
