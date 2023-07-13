
<script setup>
import { ref, onMounted, computed } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router';
import ContenuAltLayout from '@/layouts/contenuAlt.vue';

const realisations = ref([]);
const route = useRoute();
const grid = ref(null);

onMounted(async () => {
	try {
		if (process.client && typeof window !== 'undefined') {
			const response = await axios.get('/api/clients.json');
			realisations.value = response.data;

			const Masonry = await import('masonry-layout');
			const imagesLoaded = await import('imagesloaded');

			const masonry = new Masonry.default(grid.value, {
				itemSelector: '.element',
				layoutMode: 'masonry'/* ,
				columnWidth: '.grid-sizer',
				percentPosition: true */
			});

			imagesLoaded.default(grid.value).on('progress', () => {
				masonry.layout();
			});
		}
	} catch (error) {
		console.error(error);
	}
});

const matchingRealisation = computed(() => {
	const filterValue = route.fullPath.substring('/realisations/'.length);
	return realisations.value.find(
		(realisation) => realisation.lien === filterValue
	);
});
</script>
<template>
	<ContenuAltLayout>
		<div :id="`div-${matchingRealisation.lien}`"
			v-if="matchingRealisation">
			<div id="banner">
				<img :src="matchingRealisation.banniere"
					alt="Image"
					class="img-fluid" />
			</div>
			<div id="pargrapheIntro"
				v-if="matchingRealisation"
				:key="matchingRealisation.lien">
				<h1>{{ matchingRealisation.client }}</h1>
				<div v-html="matchingRealisation.description"></div>
				<div id="gridcontainer"
					class="container">
					<div id="galerie"
						class="row grid-wrapper"
						ref="grid">
						<div v-for="(image, index) in matchingRealisation?.galerie"
							:key="index"
							:id="'div-' + index + '-' + matchingRealisation.lien"
							class="element grid-item col-md-6 mb-4">
							<img :src="image"
								alt="Image"
								class="img-fluid" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</ContenuAltLayout>
</template>



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

#div-stave {
	img {
		min-height: 447px;
	}
}

#div-10-stave {
	width: 100%;

	img {
		width: 100%;
	}

}

#div-11-stave {
	width: 100%;

	img {
		width: 100%;
	}

}
</style>