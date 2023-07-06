<template>
	<div>
		<ContenuLayout>
			<h1>{{ realisation.title }}</h1>
			<div v-html="realisation.body"></div>
		</ContenuLayout>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import ContenuLayout from '@/layouts/contenu.vue';
import axios from 'axios';

const realisation = ref({});

// Fetch the data for the realisation using axios
axios.get(`/api/realisations/${$route.params.slug}`)
	.then(response => {
		realisation.value = response.data;
	})
	.catch(error => {
		console.log(error);
	});
</script>