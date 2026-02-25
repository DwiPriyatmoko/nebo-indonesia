<template>
	<!-- Analytics -->
	<Analytics />
	<!-- Layout -->
	<NuxtLayout :name="layout">
		<!-- Page -->
		<NuxtPage />
	</NuxtLayout>
</template>

<script setup>
import { Analytics } from '@vercel/analytics/nuxt';

const layout = 'custom';
</script>
