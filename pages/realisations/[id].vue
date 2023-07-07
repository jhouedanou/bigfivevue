<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios';

const realisations = ref([])
const route = useRoute()

onMounted(async () => {
	const response = await axios.get('/api/realisations.json');
	realisations.value = response.data;
})
const matchingRealisation = computed(() => {
	const filterValue = route.fullPath.substring('/realisations/'.length)
	return realisations.value.find(realisation => realisation.lien === filterValue)
})
</script>
<template>
	<div>
		<h1>Realisations</h1>
		<div v-if="matchingRealisation"
			:key="matchingRealisation.lien">
			{{ matchingRealisation.client }}
		</div>
		<NuxtLink to="/realisations"
			class="button">Réalisations</NuxtLink>
	</div>
</template>

<style scoped>
.button {
	background-color: #4CAF50;
	border: none;
	color: white;
	padding: 10px 20px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	font-size: 16px;
	margin: 4px 2px;
	cursor: pointer;
	border-radius: 8px;
}
</style>