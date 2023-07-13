<template>
	<div>
		<div id="pargrapheIntro"
			v-if="matchingRealisation"
			:key="matchingRealisation.lien">
			<h1>{{ matchingRealisation.client }}</h1>
			<div v-html="matchingRealisation.description"></div>
			<div id="galerie"
				class="container">
				<vue-masonry>
					<div v-for="(image, index) in matchingRealisation?.galerie"
						:key="index"
						class="element grid-item">
						<img :src="image"
							alt="Image"
							class="img-fluid">
					</div>
				</vue-masonry>
			</div>
		</div>
	</div>
	<NuxtLink to="/realisations"
		class="button">Réalisations</NuxtLink>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import axios from 'axios'
import { useRoute } from 'vue-router'
import VueMasonry from 'vue-masonry';
const realisations = ref([])
const route = useRoute()

onMounted(async () => {
	const response = await axios.get('/api/clients.json')
	realisations.value = response.data
})

const matchingRealisation = computed(() => {
	const filterValue = route.fullPath.substring('/realisations/'.length)
	return realisations.value.find(realisation => realisation.lien === filterValue)
})
</script>

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

.grid-wrapper>div {
	display: flex;
	justify-content: center;
	align-items: center;
}

.grid-wrapper>div>img {
	width: 100%;
	height: 100%;
	object-fit: contain;
	border-radius: 5px;
}

.grid-wrapper {
	display: grid;
	grid-gap: 10px;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
</style>