<template>
	<div>
		<h1>Realisations</h1>
		<ul>
			<li v-for="realisation in realisations"
				:key="realisation.lien">
				<NuxtLink :to="`/realisations/${realisation.lien}`">{{ realisation.client }}</NuxtLink>
			</li>
		</ul>
	</div>
</template>


<script setup="">
import { ref, onMounted } from 'vue'
import axios from 'axios';

const realisations = ref([])

onMounted(async () => {
	const response = await axios.get('/api/realisations.json');
	realisations.value = response.data;
})

</script>