<template>
	<ContenuAltLayout>
		<PageLoader v-if="state.isLoading" />

		<div :id="`banner`"
			:class="{ 'fixed': scrollPosition > 200, 'visible': scrollPosition > 200 }">
			<img :src="matchingRealisation.banniere"
				alt="Image"
				class="img-fluid" />
		</div>
		<div :id="`div-${matchingRealisation.lien}`"
			v-if="matchingRealisation"
			:class="`realisation-page realisation-${matchingRealisation.lien}`">
			<div id="pargrapheIntro"
				v-if="matchingRealisation"
				:key="matchingRealisation.lien">
				<div v-html="matchingRealisation.description"></div>
				<div id="gridcontainer">
					<div id="galerie"
						class="grid-wrapper"
						ref="grid">
						<img v-for="(image, index) in matchingRealisation?.galerie"
							:key="index"
							:id="'div-' + index + '-' + matchingRealisation.lien"
							:src="image"
							alt="Image"
							class="element grid-item popup" />
					</div>
				</div>
			</div>
		</div>
		<div id="projectnavgation">
			<ul>
				<li>
					<nuxt-link v-if="matchingRealisation.previousLink"
						:to="'/realisations/' + matchingRealisation.previousLink">
						projet<br>précédent
					</nuxt-link>
				</li>
				<li>
					<nuxt-link to="/realisations">
						<img src="/img/PATCWORK.svg"
							alt="" />
					</nuxt-link>
				</li>
				<li>
					<nuxt-link v-if="matchingRealisation.nextLink"
						:to="'/realisations/' + matchingRealisation.nextLink">
						projet<br>suivant
					</nuxt-link>
				</li>
			</ul>
		</div>
	</ContenuAltLayout>
</template>

<script setup>
import { ref, onMounted, computed, reactive } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router';
import ContenuAltLayout from '@/layouts/contenuAlt.vue';
import PageLoader from '@/components/PageLoader.vue';
const realisations = ref([]);
const route = useRoute();
const grid = ref(null);
const scrollPosition = ref(0);
const state = reactive({
	isLoading: true
})
const onScroll = () => {
	scrollPosition.value = window.scrollY;
};
onMounted(() => {
	window.addEventListener('scroll', onScroll);
});
onMounted(async () => {
	try {
		state.isLoading = true;
		if (process.client && typeof window !== 'undefined') {
			const response = await axios.get('/api/clients.json');
			realisations.value = response.data;
			const Masonry = await import('masonry-layout');
			const imagesLoaded = await import('imagesloaded');
			const masonry = new Masonry.default(grid.value, {
				itemSelector: '.element',
				layoutMode: 'packery'
			});
			imagesLoaded.default(grid.value).on('progress', () => {
				masonry.layout();
			});
		}
		state.isLoading = false;
	} catch (error) {
		console.error(error);
		state.isLoading = false;
	}
});

const matchingRealisation = computed(() => {
	const filterValue = route.fullPath.substring('/realisations/'.length);
	const index = realisations.value.findIndex((realisation) => realisation.lien === filterValue);
	const previousRealisation = realisations.value[index - 1];
	const nextRealisation = realisations.value[index + 1];
	return {
		...realisations.value[index],
		previousLink: previousRealisation ? previousRealisation.lien : null,
		nextLink: nextRealisation ? nextRealisation.lien : null
	};
});
</script>

<style lang="scss" scoped>
.button {
	background-color: #4caf50;
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

#galerie {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: row;
	flex-wrap: wrap;
	max-width: 80vw;
	margin: 0 auto;
}

/* Remove the invalid nested styles here */
</style>
